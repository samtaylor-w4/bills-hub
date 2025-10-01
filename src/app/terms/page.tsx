    import MarketingNav from '@/components/MarketingNav';
    import MarketingFooter from '@/components/MarketingFooter';

    export default function Page(){
      return (
        <>
          <MarketingNav />
          <main className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card p-4">
                  <h1 className="h3 mb-3">Terms of Service (placeholder)</h1>
                  <div className="text-secondary">
<p>These are placeholder terms. Replace with proper legal terms before launch.</p>
<ul>
  <li>Service provided “as is” during beta.</li>
  <li>We’re not responsible for third-party offers or pricing changes.</li>
  <li>Do not upload unlawful content.</li>
</ul>
</div>
                </div>
              </div>
            </div>
          </main>
          <MarketingFooter />
        </>
      );
    }
