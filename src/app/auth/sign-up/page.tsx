'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabaseBrowser } from '../../../lib/supabaseClient';

export default function SignUp() {
  const sp = useSearchParams();
  const router = useRouter();
  const next = sp.get('next') || '/app';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    supabaseBrowser().auth.getSession().then(({ data }) => {
      if (data.session) router.replace(next);
    });
  }, [router, next]);

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setError(null); setInfo(null);
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true);
    const supabase = supabaseBrowser();
    const { data, error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) { setError(error.message); return; }
    if (!data.session) {
      setInfo('Account created. Check your email to confirm your address, then return to sign in.');
      return;
    }
    router.replace(next);
  }

  return (
    <main className="container py-5" style={{ maxWidth: 480 }}>
      <div className="card p-4">
        <h1 className="h4 mb-3">Create account</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm password</label>
            <input className="form-control" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} required />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {info && <div className="alert alert-info">{info}</div>}
          <button className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Creating…' : 'Create account'}
          </button>
        </form>
        <div className="text-secondary small mt-3">
          Already have an account? <a href={`/auth/sign-in?next=${encodeURIComponent(next)}`}>Sign in</a>
        </div>
      </div>
    </main>
  );
}
