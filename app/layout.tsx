import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'JobNova Growth Challenge — Shikhar Sisodia', description: 'Product Marketing & Business Internship take-home submission.', robots: { index: false, follow: false } };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
