export function generateICS({ householdId, events }: { householdId: string; events: { uid: string; title: string; start: Date; end: Date; }[] }) {
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BillsHub//EN',
  ];
  for (const e of events) {
    lines.push(
      'BEGIN:VEVENT',
      `UID:${e.uid}@${householdId}`,
      `DTSTAMP:${dt(new Date())}`,
      `DTSTART:${dt(e.start)}`,
      `DTEND:${dt(e.end)}`,
      `SUMMARY:${escapeText(e.title)}`,
      'END:VEVENT'
    );
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
function dt(d: Date){ return d.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z'; }
function escapeText(s: string){ return s.replace(/,/g,'\\,').replace(/;/g,'\\;'); }
