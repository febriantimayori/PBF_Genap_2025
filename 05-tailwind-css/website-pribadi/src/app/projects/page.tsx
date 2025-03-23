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
          <div className="bg-gray-200 max-w-sm rounded overflow-hidden shadow-lg">
            <div className="w-full flex justify-center mt-6">
              <Image src={imageSrc} alt={name} width={250} height={250} className="object-contain" />
            </div>
            <div className="px-6 py-3">
              <div className="font-bold text-xl mb-2">{name}</div>
            </div>
            <div className="px-6 pb-4">
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mr-2 mb-2">
                {urlDisplay}
              </span>
            </div>
          </div>
        </a>
      </li>
    );
  }
  
  export default function Projects() {
    return (
      <div className="mt-6 px-8 pb-10">
        <header>
          <h1 className="font-bold text-4xl text-zinc-800">Proyek Saya</h1>
          <p className="text-base mt-6 text-zinc-600">
          Berikut adalah beberapa tim sukses yang telah bekerja sama dalam proyek yang saya kerjakan.
          </p>
        </header>
        <div className="mt-6">
          {/* <h2 className="text-2xl">Aplikasi</h2> */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-6">
            <ProjectItem 
              name="TEAM SPACETOON" 
              url="https://example.com" 
              urlDisplay="Space Go | Peminjaman Ruang dan Jadwal JTI" 
              imageSrc={Image1} 
            />
            <ProjectItem 
              name="TEAM MARSOSE" 
              url="https://example.com" 
              urlDisplay="Digitalisasi RW | Laporan Warga dan Surat Menyurat" 
              imageSrc={Image2} 
            />
            <ProjectItem 
              name="TEAM OP" 
              url="https://example.com" 
              urlDisplay="iSentry | Smart Home Security with Face Recognition" 
              imageSrc={Image3}
            />
          </ul>
        </div>
      </div>
    );
}