import BillForm from '@/src/components/BillForm';

export default function NewBillPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Create Bill</h2>
      <BillForm />
    </div>
  );
}