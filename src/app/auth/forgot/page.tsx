'use client';
import { useState } from 'react';
import { supabaseBrowser } from '../../../lib/supabaseClient';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_BASE_URL || 'http://localhost:3000'}/auth/reset`
    });
    setLoading(false);
    if (error) { setError(error.message); return; }
    setSent(true);
  }

  return (
    <main className="container py-5" style={{ maxWidth: 480 }}>
      <div className="card p-4">
        <h1 className="h4 mb-3">Reset your password</h1>
        {sent ? (
          <div className="alert alert-success">
            If an account exists for <strong>{email}</strong>, we’ve sent a reset link.
            Please check your inbox.
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input className="form-control" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Sending…' : 'Send reset link'}
            </button>
          </form>
        )}
        <div className="text-secondary small mt-3">
          Remembered it? <a href="/auth/sign-in">Back to sign in</a>
        </div>
      </div>
    </main>
  );
}
