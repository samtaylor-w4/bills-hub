import MarketingNav from '@/components/MarketingNav';
import MarketingFooter from '@/components/MarketingFooter';
import { IconShieldCheck, IconBellRinging2, IconChartArrows, IconUsersGroup } from '@tabler/icons-react';
import Link from 'next/link';

export default function Landing(){
  return (
    <>
      <MarketingNav />
      <section className="hero pt-5 pb-4">
        <div className="container py-4">
          <span className="badge badge-soft rounded-pill mb-3">NEW • Bill splitting + family calendar</span>
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold mb-3">All your household bills in one tidy hub.</h1>
              <p className="lead text-secondary mb-4">Never miss a renewal again. Track spend, split costs with friends, and compare deals in one place.</p>
              <div className="d-flex gap-2">
                <Link href="/app" className="btn btn-primary btn-lg px-4">Open the app</Link>
                <a href="#features" className="btn btn-outline-secondary btn-lg px-4">See features</a>
              </div>
              <div className="d-flex gap-4 mt-4 text-secondary">
                <div><strong>5 min</strong> setup</div>
                <div><strong>Unlimited</strong> reminders</div>
                <div><strong>Free</strong> to start</div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card p-3 rounded-xl">
                <img className="rounded-xl" src="https://images.unsplash.com/photo-1554224155-3a589877462f?q=80&w=1200&auto=format&fit=crop" alt="Household budgeting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 h-100">
              <div className="icon-circle mb-2"><IconBellRinging2 size={20}/></div>
              <h3 className="h5">Smart renewals</h3>
              <p className="text-secondary mb-0">We nudge you at the right time with all the info you need to switch in a tap.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 h-100">
              <div className="icon-circle mb-2"><IconChartArrows size={20}/></div>
              <h3 className="h5">Savings tracker</h3>
              <p className="text-secondary mb-0">See what you pay today vs the best deals—no spreadsheet required.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 h-100">
              <div className="icon-circle mb-2"><IconUsersGroup size={20}/></div>
              <h3 className="h5">Bill splitting</h3>
              <p className="text-secondary mb-0">Share costs fairly with friends or family, settle up in seconds.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card p-3 h-100">
              <div className="icon-circle mb-2"><IconShieldCheck size={20}/></div>
              <h3 className="h5">Privacy-first</h3>
              <p className="text-secondary mb-0">You control your data. Export or delete any time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="card p-4 rounded-xl text-center">
          <h3 className="h4 mb-2">Ready to tidy up your bills?</h3>
          <p className="text-secondary mb-3">Start free. Add your first bill in under five minutes.</p>
          <Link href="/app" className="btn btn-primary btn-lg">Open the app</Link>
        </div>
      </section>

      <MarketingFooter />
    </>
  );
}
