import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Website Pribadi",
  description: "Website Pribadi untuk menampilkan Proyek dan Esai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Layout>
          {children}  
        </Layout>
      </body>
    </html>
  );
}
