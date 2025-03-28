import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a
            href="https://github.com/febriantimayori"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/febriantimayori"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:febriantimayori@gmail.com"
            className="hover:text-teal-400"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <hr className="w-2/4 border-zinc-700 mb-4" />

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Febrianti Mayori. All rights reserved.
        </p>
      </div>
    </footer>
  );
}