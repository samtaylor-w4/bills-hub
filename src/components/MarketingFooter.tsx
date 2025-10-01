'use client';
export default function MarketingFooter(){
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container d-flex justify-content-between small text-muted">
        <div>© {new Date().getFullYear()} Bills Hub</div>
        <div className="d-flex gap-3">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
