import Shell from '@/components/Shell';
import { simplifyDebts } from '@/lib/netting';

export default function LedgerPage() {
  // Example balances (in pence): positive = they are owed; negative = they owe
  const balances = { Sam: -4000, Amy: 1000, Ben: 3000 };
  const transfers = simplifyDebts(balances);

  return (
    <Shell>
      <div className="card">
        <div className="card-header"><h3 className="card-title m-0">Settle up</h3></div>
        <div className="card-body">
          <ul className="list-group">
            {transfers.map((t, i) => (
              <li className="list-group-item d-flex justify-content-between" key={i}>
                <span>{t.from} → {t.to}</span>
                <strong>£{(t.amount/100).toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary mt-3" href="#">Record payments</a>
        </div>
      </div>
    </Shell>
  );
}
