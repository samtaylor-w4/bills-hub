import Shell from '@/components/Shell';

export default function CalendarPage() {
  return (
    <Shell>
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3 className="card-title m-0">Household calendar</h3>
          <a className="btn btn-sm btn-outline-secondary" href="/api/ics/demo-household">Subscribe (ICS)</a>
        </div>
        <div className="card-body">
          <p className="text-secondary mb-2">
            Subscribe to the ICS feed with Apple Calendar, Google Calendar, or Outlook.
          </p>
          <ul className="mb-0">
            <li>Apple Calendar: File → New Calendar Subscription… paste the ICS URL.</li>
            <li>Google Calendar: Other calendars → + → From URL → paste the ICS URL.</li>
            <li>Outlook: Add calendar → Subscribe from web → paste the ICS URL.</li>
          </ul>
        </div>
      </div>
    </Shell>
  );
}
