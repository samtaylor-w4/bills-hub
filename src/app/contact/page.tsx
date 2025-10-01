import MarketingNav from '@/components/MarketingNav';
import MarketingFooter from '@/components/MarketingFooter';

export default function Contact(){
  return (
    <>
      <MarketingNav />
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4">
              <h1 className="h3 mb-3">Contact us</h1>
              <p className="text-secondary">Have a question or feedback? Send us a message.</p>
              <form onSubmit={(e)=>e.preventDefault()}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" placeholder="Your name" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input className="form-control" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows={5} placeholder="How can we help?" required />
                </div>
                <button className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <MarketingFooter />
    </>
  );
}
