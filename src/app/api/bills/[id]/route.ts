import { prisma } from '@/src/lib/db';
import { billSchema } from '@/src/lib/validation/bill';

interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const bill = await prisma.bill.findUnique({ where: { id: params.id } });
  if (!bill) return new Response('Not found', { status: 404 });
  return Response.json(bill);
}

export async function PUT(req: Request, { params }: Params) {
  try {
    const json = await req.json();
    const parsed = billSchema.parse(json);
    const updated = await prisma.bill.update({
      where: { id: params.id },
      data: {
        name: parsed.name,
        amount: parsed.amount,
        dueDate: new Date(parsed.dueDate)
      }
    });
    return Response.json(updated);
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: Params) {
  try {
    await prisma.bill.delete({ where: { id: params.id } });
    return new Response(null, { status: 204 });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}