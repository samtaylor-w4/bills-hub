'use client';
import Shell from '@/components/Shell';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '@/lib/supabaseClient';

export default function AccountPage() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    supabaseBrowser().auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);
  return (
    <Shell>
      <div className="card p-3">
        <h2 className="h5 mb-2">Your account</h2>
        <div className="text-secondary">Signed in as: {email || '...'}</div>
      </div>
    </Shell>
  );
}
