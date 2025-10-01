import { prisma } from '@/src/lib/db';
import BillList from '@/src/components/BillList';

export const dynamic = 'force-dynamic';

export default async function BillsPage() {
  const bills = await prisma.bill.findMany({
    orderBy: { dueDate: 'asc' }
  });
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Bills</h2>
        <a
          href="/bills/new"
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-500"
        >
          + New Bill
        </a>
      </div>
      {bills.length === 0 ? (
        <p className="text-sm text-gray-600">No bills yet. Create one.</p>
      ) : (
        <BillList bills={bills} />
      )}
    </div>
  );
}