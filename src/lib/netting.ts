export type Balances = Record<string, number>;
export type Transfer = { from: string; to: string; amount: number };
export function simplifyDebts(balances: Balances): Transfer[] {
  const debtors: { name: string; amount: number }[] = [];
  const creditors: { name: string; amount: number }[] = [];
  for (const [name, amt] of Object.entries(balances)) {
    if (amt < 0) debtors.push({ name, amount: -amt });
    if (amt > 0) creditors.push({ name, amount: amt });
  }
  debtors.sort((a,b)=>b.amount-a.amount);
  creditors.sort((a,b)=>b.amount-a.amount);
  const transfers: Transfer[] = [];
  let i=0, j=0;
  while (i < debtors.length && j < creditors.length) {
    const d = debtors[i], c = creditors[j];
    const pay = Math.min(d.amount, c.amount);
    transfers.push({ from: d.name, to: c.name, amount: pay });
    d.amount -= pay; c.amount -= pay;
    if (d.amount === 0) i++;
    if (c.amount === 0) j++;
  }
  return transfers;
}
