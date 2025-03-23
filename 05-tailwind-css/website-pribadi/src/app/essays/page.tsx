import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman Esai.',
  openGraph: {
    title: 'Esai',
    description: 'Halaman Esai.',
  },
};

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zonc-800">Esai</h1>
      </header>
    </div>
  );
}