import MarketingNav from '@/components/MarketingNav';
import MarketingFooter from '@/components/MarketingFooter';

export default function Pricing(){
  return (
    <>
      <MarketingNav />
      <main className="container py-5">
        <div className="row justify-content-center g-4">
          <div className="col-lg-10 text-center">
            <h1 className="display-6 fw-bold mb-2">Simple pricing</h1>
            <p className="text-secondary">Start free. Upgrade when you need more.</p>
          </div>
          <div className="col-md-4">
            <div className="card p-4 h-100 text-center">
              <h3 className="h5">Free</h3>
              <div className="display-6 mb-2">£0</div>
              <ul className="text-secondary list-unstyled">
                <li>Up to 5 bills</li>
                <li>Renewal reminders</li>
                <li>Basic savings view</li>
              </ul>
              <a href="/app" className="btn btn-primary mt-2">Get started</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 h-100 text-center border-primary" style={{boxShadow:'0 8px 30px rgba(79,70,229,.15)'}}>
              <h3 className="h5">Pro</h3>
              <div className="display-6 mb-2">£3.99<span className="fs-6 text-secondary">/mo</span></div>
              <ul className="text-secondary list-unstyled">
                <li>Unlimited bills</li>
                <li>Email/PDF ingest</li>
                <li>Bill splitting groups</li>
                <li>Calendar (ICS)</li>
              </ul>
              <a href="/app" className="btn btn-primary mt-2">Try Pro</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4 h-100 text-center">
              <h3 className="h5">Family</h3>
              <div className="display-6 mb-2">£6.99<span className="fs-6 text-secondary">/mo</span></div>
              <ul className="text-secondary list-unstyled">
                <li>3 members</li>
                <li>Shared calendars</li>
                <li>Advanced alerts</li>
              </ul>
              <a href="/app" className="btn btn-primary mt-2">Start Family</a>
            </div>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
