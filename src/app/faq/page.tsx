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
                  <h1 className="h3 mb-3">Frequently Asked Questions</h1>
                  <div className="text-secondary">
<ul>
  <li><strong>Do you store my bank details?</strong><br/>No. For payments we use trusted providers and never see your card/bank info.</li>
  <li className="mt-2"><strong>Is this regulated?</strong><br/>We provide information and links to comparison partners. We don’t advise on insurance or hold client money.</li>
  <li className="mt-2"><strong>Can I delete my data?</strong><br/>Yes. A full export and one-click delete will be available in Settings.</li>
  <li className="mt-2"><strong>How do reminders work?</strong><br/>We create renewal events and can send email/push notifications.</li>
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
