import { NextResponse } from 'next/server';

export async function GET() {
  // This is a placeholder. In a real app you'd verify cookies/JWT.
  return NextResponse.json({ ok: true });
}
