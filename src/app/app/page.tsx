import Shell from '@/components/Shell';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';

export default function AppDashboard() {
  const renewals: any[] = []; // empty to show the empty-state

  return (
    <Shell>
      {renewals.length === 0 ? (
        <div className="card p-4 text-center">
          <h2 className="h4 mb-2">Let’s get you set up</h2>
          <p className="text-secondary mb-3">Create a household, then add your first bill.</p>
          <div className="d-flex justify-content-center gap-2">
            <Link href="/app/households" className="btn btn-outline-secondary">Create a household</Link>
            <Link href="/app/providers" className="btn btn-primary d-inline-flex align-items-center gap-2">
              <IconPlus size={18}/> Add a bill
            </Link>
          </div>
          <div className="text-secondary small mt-3">Takes about 2 minutes—just the latest bill or contract is enough.</div>
        </div>
      ) : (
        <div className="row g-3">
          {/* render renewals table/cards when data exists */}
        </div>
      )}
    </Shell>
  );
}
