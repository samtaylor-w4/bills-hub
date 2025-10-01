'use client';
import Link from 'next/link';

export default function MarketingNav(){
  return (
    <nav className="navbar navbar-expand-lg bg-transparent py-3">
      <div className="container">
        <Link className="navbar-brand fw-semibold" href="/">Bills Hub</Link>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-secondary" href="#features">Features</Link>
          <Link className="btn btn-primary" href="/app">Open app</Link>
        </div>
      </div>
    </nav>
  );
}
