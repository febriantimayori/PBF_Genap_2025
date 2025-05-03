import type { Metadata } from 'next';
import Image, { StaticImageData } from 'next/image';
import Image1 from '../../../public/images/project1.jpg';
import Image2 from '../../../public/images/project2.jpg';
import Image3 from '../../../public/images/project3.jpg';

type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
  };
  
  function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) {
    return (
      <li>
        <a href={url}>
          <div className="bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full flex justify-center mt-6">
              <Image src={imageSrc} alt={name} width={250} height={250} className="object-contain" />
            </div>
            <div className="px-6 py-3">
              <div className="font-bold text-l mb-2">{name}</div>
            </div>
            <div className="px-6 pb-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-300 mr-2 mb-2">
                {urlDisplay}
              </span>
            </div>
          </div>
        </a>
      </li>
    );
  }

  export const metadata: Metadata = {
    title: "Proyek",
    description: "Halaman proyek",
    openGraph: {
      images: ['images/project1.jpg', 'images/project2.jpg', 'images/project3.jpg'],
      url: "https://example.com/projects",
    },
  };
  
  export default function Projects() {
    return (
      <div className="mt-6 px-8 pb-10">
        <header>
          <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
          <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
          </p>
        </header>
        <div className="mt-6">
          {/* <h2 className="text-2xl">Aplikasi</h2> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-6">
            <ProjectItem 
              name="Space Go | Peminjaman Ruang dan Jadwal Jurusan Teknologi Informasi" 
              url="https://example.com" 
              urlDisplay="TEAM SPACETOON" 
              imageSrc={Image1} 
            />
            <ProjectItem 
              name="Digitalisasi RW | Laporan Pengaduan Warga dan Surat Menyurat" 
              url="https://example.com" 
              urlDisplay="TEAM MARSOSE" 
              imageSrc={Image2} 
            />
            <ProjectItem 
              name="iSentry | Smart Home Security with Face Recognition and IoT Integration" 
              url="https://example.com" 
              urlDisplay="TEAM OP" 
              imageSrc={Image3}
            />
          </ul>
        </div>
      </div>
    );
}