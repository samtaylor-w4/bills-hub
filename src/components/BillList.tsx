import Link from 'next/link';

interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string | Date;
}

export default function BillList({ bills }: { bills: Bill[] }) {
  return (
    <table className="w-full text-sm border bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-right">Amount</th>
          <th className="p-2 text-left">Due Date</th>
          <th className="p-2"></th>
        </tr>
      </thead>
      <tbody>
        {bills.map(bill => (
          <tr key={bill.id} className="border-t">
            <td className="p-2">{bill.name}</td>
            <td className="p-2 text-right">
              {bill.amount.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD'
              })}
            </td>
            <td className="p-2">
              {new Date(bill.dueDate).toLocaleDateString()}
            </td>
            <td className="p-2 text-right">
              <Link
                href={`/bills/${bill.id}/edit`}
                className="text-blue-600 hover:underline mr-3"
              >
                Edit
              </Link>
              <DeleteButton id={bill.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DeleteButton({ id }: { id: string }) {
  async function onDelete() {
    const ok = confirm('Delete this bill?');
    if (!ok) return;
    const res = await fetch(`/api/bills/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      alert('Failed to delete');
      return;
    }
    location.reload();
  }
  return (
    <button
      onClick={onDelete}
      className="text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}