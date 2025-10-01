'use client';
import Shell from '@/components/Shell';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

type Household = { id: string; name: string };

export default function HouseholdsPage(){
  const [items, setItems] = useState<Household[]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supabase = supabaseBrowser();

  async function load(){
    setError(null);
    const { data, error } = await supabase
      .from('households')
      .select('id,name')
      .order('created_at', { ascending: true });
    if (error) { setError(error.message); return; }
    setItems((data || []) as Household[]);
  }

  useEffect(() => { load(); }, []);

  async function ensureMembership(householdId: string){
    const { data: userRes } = await supabase.auth.getUser();
    const user = userRes?.user;
    if (!user) return;
    // Try to add current user as owner; ignore duplicates
    const { error } = await supabase
      .from('household_members')
      .insert({ household_id: householdId, user_id: user.id, role: 'owner' });
    if (error && String(error.code) !== '23505') {
      console.warn('membership insert error', error);
    }
  }

  async function createHousehold(e: React.FormEvent){
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Preferred path: RPC (transactional create + membership)
    const rpc = await supabase.rpc('create_household', { p_name: name });
    if (rpc.error) {
      // Fallback: raw insert (no RETURNING), then locate and attach membership
      const ins = await supabase.from('households').insert({ name });
      if (ins.error) {
        setError(ins.error.message);
        setLoading(false);
        return;
      }
      const find = await supabase.from('households')
        .select('id,name')
        .eq('name', name)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      if (!find.error && find.data) {
        await ensureMembership(find.data.id);
      }
    } else if (rpc.data?.id) {
      // If RPC succeeded but membership not visible yet, ensure explicitly
      await ensureMembership(rpc.data.id);
    }
    setName('');
    await load();
    setLoading(false);
  }

  return (
    <Shell>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card p-3">
            <h2 className="h5">Your households</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {items.length === 0 && !error ? (
              <div className="text-secondary">You have no households yet.</div>
            ) : (
              <ul className="list-group list-group-flush">
                {items.map(h => <li key={h.id} className="list-group-item">{h.name}</li>)}
              </ul>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3">
            <h2 className="h5">Create a household</h2>
            <form onSubmit={createHousehold}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" value={name} onChange={e=>setName(e.target.value)} placeholder="e.g., Smith Family" required/>
              </div>
              <button className="btn btn-primary" disabled={loading}>{loading ? 'Creating…' : 'Create'}</button>
            </form>
            <div className="text-secondary small mt-2">
              If you just signed in, check <a href="/auth/debug">/auth/debug</a> shows a session.
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
