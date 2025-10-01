'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabaseClient';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = supabaseBrowser();
    let mounted = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      if (!data.session) {
        router.replace(`/auth/sign-in?next=${encodeURIComponent(pathname || '/app')}`);
      } else {
        setReady(true);
      }
    })();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.replace('/auth/sign-in');
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, [router, pathname]);

  if (!ready) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
      </div>
    );
  }
  return <>{children}</>;
}
