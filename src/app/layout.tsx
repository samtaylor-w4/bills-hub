import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Bills Hub',
  description: 'Minimal bills tracker'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white border-b p-4">
          <h1 className="text-xl font-semibold"><a href="/bills">Bills Hub</a></h1>
        </header>
        <main className="p-4 max-w-3xl mx-auto w-full">{children}</main>
        <footer className="text-center text-xs text-gray-500 py-6">
          Minimal MVP &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}