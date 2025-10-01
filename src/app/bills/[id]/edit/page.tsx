import { prisma } from '@/src/lib/db';
import BillForm from '@/src/components/BillForm';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function EditBillPage({ params }: Props) {
  const bill = await prisma.bill.findUnique({ where: { id: params.id } });
  if (!bill) return notFound();
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Edit Bill</h2>
      <BillForm bill={bill} />
    </div>
  );
}