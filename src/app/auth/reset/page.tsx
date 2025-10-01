'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '../../../lib/supabaseClient';

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>('Checking session…');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const supabase = supabaseBrowser();
      try {
        // If the reset link landed here with a code, exchange it for a session
        if (typeof window !== 'undefined' && window.location.href.includes('code=')) {
          await supabase.auth.exchangeCodeForSession(window.location.href);
        }
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
          setInfo(null);
          setError('No active recovery session. Please request a new reset link.');
          return;
        }
        setInfo('');
      } catch (e: any) {
        setInfo(null);
        setError(e?.message || 'Could not start recovery session.');
      }
    })();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.replace('/auth/sign-in');
  }

  return (
    <main className="container py-5" style={{ maxWidth: 480 }}>
      <div className="card p-4">
        <h1 className="h4 mb-3">Choose a new password</h1>
        {info && <div className="alert alert-info">{info}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">New password</label>
            <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm new password</label>
            <input className="form-control" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Updating…' : 'Update password'}
          </button>
        </form>
        <div className="text-secondary small mt-3">
          Return to <a href="/auth/sign-in">Sign in</a>
        </div>
      </div>
    </main>
  );
}
