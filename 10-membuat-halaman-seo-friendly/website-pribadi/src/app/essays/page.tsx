import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import ImageEsai1 from '../../../public/images/esai1.jpg';
import ImageEsai2 from '../../../public/images/esai2.jpg';
import ImageEsai3 from '../../../public/images/esai3.jpg';

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Halaman Esai.',
  openGraph: {
    images: ['images/esai1.jpg', 'images/esai2.jpg', 'images/esai3.jpg'],
    url: 'https://example.com/essays', 
  },
};

type EssayItemProps = {
  imageSrc: StaticImageData;
  title: string;
  excerpt: string;
  url: string;
};

function EssayItem({ imageSrc, title, excerpt, url }: EssayItemProps) {
  return (
    <li className="bg-gray-100 border border-zinc-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
      <a href={url}>
        <div className="w-full h-auto object-cover rounded-t-xl overflow-hidden">
          <Image src={imageSrc} alt={title} className="object-contain" />
        </div>
        <div className="px-6 py-3">
          <div className="font-bold text-l mb-2">{title}</div>
            <p className="text-gray-700 text-base">{excerpt}</p>
          <div className="mt-4 flex justify-end">
            <span className="inline-block text-blue-600 text-sm font-medium hover:underline">
              Baca Selengkapnya
            </span>
          </div> 
        </div>
      </a>
    </li>
  );
}

export default function Essays() {
  return (
    <div className="mt-6 px-8 mb-16">
      <header>
        <h1 className="font-bold text-4xl text-zonc-800">Esai</h1>
        <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa daftar artikel esai yang telah saya tulis.</p>
      </header>
      <div className="mt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
          <EssayItem
            imageSrc={ImageEsai1}
            title="Menjelajahi Teknologi AI"
            excerpt="Sebuah tinjauan mendalam tentang perkembangan kecerdasan buatan dan dampaknya pada kehidupan sehari-hari."
            url="https://example.com"
          />
          <EssayItem
            imageSrc={ImageEsai2}
            title="Dampak IoT dalam Kehidupan Modern"
            excerpt="Bagaimana Internet of Things (IoT) secara signifikan mempengaruhi kehidupan kita sehari-hari?"
            url="https://example.com"
          />
          <EssayItem
            imageSrc={ImageEsai3}
            title="Pemrograman Berbasis Framework"
            excerpt="Mengapa framework modern menjadi bagian penting dalam pengembangan perangkat lunak modern?"
            url="https://example.com"
          />
        </ul>
      </div>
    </div>
  );
}