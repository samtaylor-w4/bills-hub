'use client';
import { useEffect, useState } from 'react';
import { supabaseBrowser } from '../../../lib/supabaseClient';

export default function DebugAuth() {
  const [out, setOut] = useState<any>({});
  useEffect(() => {
    (async () => {
      const supabase = supabaseBrowser();
      const sessionRes = await supabase.auth.getSession();
      const userRes = await supabase.auth.getUser();
      setOut({ session: sessionRes.data.session, user: userRes.data.user });
    })();
  }, []);
  return (
    <main className="container py-5">
      <h1 className="h4 mb-3">Auth debug</h1>
      <pre className="card p-3">{JSON.stringify(out, null, 2)}</pre>
    </main>
  );
}
