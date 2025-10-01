'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabaseClient';
import {
  IconLayoutDashboard,
  IconBuilding,
  IconUsersGroup,
  IconWallet,
  IconCalendarEvent,
  IconLogout
} from '@tabler/icons-react';

export default function Shell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  async function signOut() {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.replace('/');
  }
  return (
    <div className="d-flex">
      <aside className="bg-white border-end" style={{ width: 240, minHeight: '100vh' }}>
        <div className="p-3 border-bottom">
          <Link href="/app" className="text-decoration-none">
            <strong>Bills Hub</strong>
          </Link>
          <div className="text-muted small">Tabler + Bootstrap</div>
        </div>
        <nav className="nav flex-column p-2">
          <Link className="nav-link d-flex align-items-center gap-2" href="/app">
            <IconLayoutDashboard size={18}/> Dashboard
          </Link>
          <Link className="nav-link d-flex align-items-center gap-2" href="/app/providers">
            <IconBuilding size={18}/> Providers
          </Link>
          <Link className="nav-link d-flex align-items-center gap-2" href="/app/groups">
            <IconUsersGroup size={18}/> Groups
          </Link>
          <Link className="nav-link d-flex align-items-center gap-2" href="/app/ledger">
            <IconWallet size={18}/> Settle up
          </Link>
          <Link className="nav-link d-flex align-items-center gap-2" href="/app/calendar">
            <IconCalendarEvent size={18}/> Calendar
          </Link>
        </nav>
      </aside>
      <main className="flex-grow-1">
        <header className="d-flex align-items-center justify-content-between p-3 border-bottom bg-white">
          <div className="fw-semibold">Household Bills & Renewals</div>
          <div className="d-flex gap-2">
            <Link href="/" className="btn btn-outline-secondary btn-sm">Marketing site</Link>
            <button className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-1" onClick={signOut}>
              <IconLogout size={16}/> Sign out
            </button>
          </div>
        </header>
        <div className="p-3">{children}</div>
      </main>
    </div>
  );
}
