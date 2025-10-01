'use client';

import { useState } from 'react';
import { billSchema } from '@/src/lib/validation/bill';
import { useRouter } from 'next/navigation';

interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: string | Date;
}

export default function BillForm({ bill }: { bill?: Bill }) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: bill?.name ?? '',
    amount: bill?.amount?.toString() ?? '',
    dueDate: bill ? new Date(bill.dueDate).toISOString().substring(0, 10) : ''
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = billSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const payload = {
      name: parsed.data.name,
      amount: parsed.data.amount,
      dueDate: parsed.data.dueDate
    };
    try {
      const res = await fetch(
        bill ? `/api/bills/${bill.id}` : '/api/bills',
        {
          method: bill ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Request failed');
      }
      router.push('/bills');
      router.refresh();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-4 max-w-md" onSubmit={onSubmit}>
      {error && (
        <div className="rounded border border-red-300 bg-red-50 p-2 text-sm text-red-700">
          {error}
        </div>
      )}
      <div className="space-y-1">
        <label className="block text-sm font-medium">Name</label>
        <input
          className="w-full rounded border px-3 py-2 text-sm"
          value={form.name}
          onChange={e => update('name', e.target.value)}
          required
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium">Amount</label>
        <input
          className="w-full rounded border px-3 py-2 text-sm"
          value={form.amount}
          onChange={e => update('amount', e.target.value)}
          required
          inputMode="decimal"
          placeholder="e.g. 79.99"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium">Due Date</label>
        <input
          type="date"
          className="w-full rounded border px-3 py-2 text-sm"
          value={form.dueDate}
          onChange={e => update('dueDate', e.target.value)}
          required
        />
      </div>
      <div className="flex gap-2">
        <button
          disabled={submitting}
          className="rounded bg-blue-600 px-4 py-2 text-white text-sm hover:bg-blue-500 disabled:opacity-50"
        >
          {submitting ? 'Saving...' : bill ? 'Update' : 'Create'}
        </button>
        <a
          href="/bills"
          className="rounded border px-4 py-2 text-sm hover:bg-gray-50"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}