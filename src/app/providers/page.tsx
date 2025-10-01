import Shell from '@/components/Shell';
import { PROVIDERS } from '@/lib/providers';

export default function ProvidersPage() {
  return (
    <Shell>
      <div className="row g-3">
        {PROVIDERS.map((p) => (
          <div key={p.id} className="col-6 col-md-3">
            <div className="card text-center p-3 h-100">
              <img src={p.logo} alt={p.name} height={32} className="mx-auto mb-2" />
              <div className="fw-semibold">{p.name}</div>
              <div className="text-muted small text-capitalize">{p.category}</div>
              <a href={`/bills/add?provider=${p.id}`} className="stretched-link" />
            </div>
          </div>
        ))}
      </div>
    </Shell>
  );
}
