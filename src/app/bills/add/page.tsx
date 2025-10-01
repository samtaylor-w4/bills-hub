'use client';
import Shell from '@/components/Shell';
import { useSearchParams } from 'next/navigation';

export default function AddBill() {
  const sp = useSearchParams();
  const provider = sp.get('provider') || '';
  return (
    <Shell>
      <div className="card">
        <div className="card-header"><h3 className="card-title m-0">Add bill</h3></div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Provider</label>
            <input className="form-control" defaultValue={provider} placeholder="e.g., Octopus Energy" />
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Monthly cost (£)</label>
              <input className="form-control" type="number" step="0.01" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Renewal date</label>
              <input className="form-control" type="date" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Upload last bill (PDF)</label>
            <input className="form-control" type="file" accept="application/pdf,image/*" />
          </div>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </Shell>
  );
}
