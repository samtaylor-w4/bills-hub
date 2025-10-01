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
                  <h1 className="h3 mb-3">Privacy Policy (placeholder)</h1>
                  <div className="text-secondary">
<p>This is a placeholder privacy policy for development. Replace with your GDPR-compliant policy before launch.</p>
<ul>
  <li>What we collect: basic account info, uploaded bills, reminder settings.</li>
  <li>How we use it: to power reminders, comparisons, and savings insights.</li>
  <li>Your rights: access, rectify, delete, data portability.</li>
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
