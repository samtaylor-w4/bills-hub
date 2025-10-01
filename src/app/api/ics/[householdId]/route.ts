import { NextRequest } from 'next/server';
import { generateICS } from '@/lib/ics';

export async function GET(_req: NextRequest, { params }: { params: { householdId: string } }) {
  const now = new Date();
  const oneHour = 60 * 60 * 1000;
  const events = [
    { uid: 'renewal-1', title: 'Car Insurance Renewal', start: now, end: new Date(now.getTime() + oneHour) },
    { uid: 'mot-1', title: 'MOT Due', start: new Date(now.getTime() + 7*24*oneHour), end: new Date(now.getTime() + 7*24*oneHour + oneHour) },
  ];
  const ics = generateICS({ householdId: params.householdId, events });
  return new Response(ics, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
}
