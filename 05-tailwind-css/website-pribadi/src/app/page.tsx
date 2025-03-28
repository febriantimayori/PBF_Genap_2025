import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman Tentang Saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman Tentang Saya.',
  },
};

export default function About() {
  return (
    <div className="mt-2 px-8 flex flex-col items-center text-center mb-8 py-10">
      <header className="mb-6">
        <h1 className="font-bold text-2xl text-zinc-800">Tentang Saya</h1>
      </header>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center mt-2">
        <Image
          src="/images/profil.jpg"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full border-4 border-zinc-300 shadow-lg"
        />
        <h2 className="text-xl font-semibold mt-4 text-zinc-800">Febrianti Mayori</h2>
        <p className="mt-2 text-m text-zinc-600 max-w-lg leading-relaxed">
          Saya seorang <strong>Frontend Developer</strong> yang memiliki pengalaman dalam membangun
          antarmuka web yang responsif dan interaktif. Saat ini, saya sedang menempuh pendidikan
          di <strong>Politeknik Negeri Malang</strong> jurusan Teknik Informatika.
        </p>
      </div>
    </div>
  );
}