'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabaseBrowser } from '../../../lib/supabaseClient';

export default function SignIn() {
  const sp = useSearchParams();
  const router = useRouter();
  const next = sp.get('next') || '/app';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabaseBrowser().auth.getSession().then(({ data }) => {
      if (data.session) router.replace(next);
    });
  }, [router, next]);

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(null);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    router.replace(next);
  }

  return (
    <main className="container py-5" style={{ maxWidth: 480 }}>
      <div className="card p-4">
        <h1 className="h4 mb-3">Sign in</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <div className="text-secondary small mt-3">
          Don’t have an account? <a href={`/auth/sign-up?next=${encodeURIComponent(next)}`}>Create one</a>
        </div>
      </div>
    </main>
  );
}
