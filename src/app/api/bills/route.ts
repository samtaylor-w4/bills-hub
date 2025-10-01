import { prisma } from '@/src/lib/db';
import { billSchema } from '@/src/lib/validation/bill';

export async function GET() {
  const bills = await prisma.bill.findMany({ orderBy: { dueDate: 'asc' } });
  return Response.json(bills);
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = billSchema.parse(json);
    const created = await prisma.bill.create({
      data: {
        name: parsed.name,
        amount: parsed.amount,
        dueDate: new Date(parsed.dueDate)
      }
    });
    return new Response(JSON.stringify(created), { status: 201 });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 400 });
  }
}