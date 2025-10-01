import Shell from '@/components/Shell';

export default function GroupsPage() {
  const groups = [
    { id: 'g1', name: 'Flat 3 – House Share', members: ['Sam', 'Amy', 'Ben'], default: 'equal' },
    { id: 'g2', name: 'Family – Utilities', members: ['Sam', 'Emily'], default: 'percent' },
  ];
  return (
    <Shell>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 m-0">Groups</h2>
        <a className="btn btn-primary" href="#">New group</a>
      </div>
      <div className="row g-3">
        {groups.map((g) => (
          <div className="col-md-6" key={g.id}>
            <div className="card h-100">
              <div className="card-body">
                <div className="fw-semibold mb-1">{g.name}</div>
                <div className="text-secondary small">Members: {g.members.join(', ')}</div>
                <div className="text-secondary small">Default split: {g.default}</div>
                <a className="btn btn-sm btn-outline-secondary mt-2" href="/app/ledger">View ledger</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
