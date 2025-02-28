This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

[Laporan Praktikum](#laporan-praktikum)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Laporan Praktikum
|  | Pemrograman Berbasis Framework 2025 |
|--|--|
| NIM |  2241720248|
| Nama |  Febrianti Mayori |
| Kelas | TI - 3B |

## Praktikum 1: Menyiapkan Lingkungan Pengembangan
1. Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini!

    **Jawab:**
    - Git digunakan untuk mengelola versi kode dan mempermudah kerja sama antar developer supaya tetap sinkron.  
    - VS Code berfungsi sebagai editor untuk menulis dan mengedit kode, serta bisa ditambahkan berbagai ekstensi untuk mendukung pengembangan.  
    - NodeJS dipakai sebagai package manager lewat NPM untuk menginstal dan mengelola dependensi React.

2. Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut telah berhasil terinstall di perangkat Anda!

    **Jawab:** 
    ![](/src/assets/img/P1-2.png)

## Praktikum 2: Membuat Proyek Pertama React Menggunakan Next.js
1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack!

    **Jawab:**
    ### 📌 Istilah dalam Next.js
    | Istilah           | Penjelasan |
    |------------------|------------|
    | **TypeScript** | Bahasa pemrograman berbasis JavaScript yang lebih terstruktur dan aman. |
    | **ESLint** | Alat untuk mendeteksi serta memperbaiki kesalahan dalam kode JavaScript maupun TypeScript. |
    | **Tailwind CSS** | Framework CSS berbasis class untuk mempermudah kustomisasi tampilan. |
    | **App Router** | Sistem routing di Next.js yang menggunakan file sistem routing dengan React Server Component, mirip dengan *web.php* di Laravel. |
    | **Import alias** | Metode untuk menyederhanakan path import, misalnya mengubah `'../../path'` menjadi `'@/path'`. |
    | **Turbopack** | *Module bundler* yang menggabungkan file seperti CSS dan JavaScript agar lebih efisien di browser. |

2. Apa saja kegunaak folder dan file yang ada pada struktur proyek React yang tampil pada
gambar pada tahap percobaan ke-3!

    **Jawab:**
    ### 📂 Struktur Folder & File dalam Next.js
    | Folder/File | Kegunaan |
    |------------|----------|
    | **`.next`** | Folder hasil build yang dibuat otomatis oleh Next.js setelah menjalankan `next build`. |
    | **`node_modules`** | Menyimpan berbagai dependensi atau package yang diinstal melalui `npm install`. |
    | **`public`** | Folder untuk menyimpan aset statis seperti gambar atau logo. |
    | **`src/app`** | Folder utama untuk routing dan komponen utama dalam sistem *App Router*. |
    | **`favicon.ico`** | File ikon yang ditampilkan pada tab browser. |
    | **`globals.css`** | File CSS yang diterapkan ke seluruh aplikasi. |
    | **`layout.tsx`** | File layout utama yang diterapkan ke semua halaman. |
    | **`page.tsx`** | Berfungsi sebagai halaman utama atau beranda (`/`). |
    | **`.gitignore`** | Berisi daftar file atau folder yang tidak boleh dilacak oleh Git. |
    | **`eslint.config.mjs`** | File konfigurasi ESLint. |
    | **`next-env.d.ts`** | Digunakan untuk menyediakan *typing* otomatis dalam TypeScript. |
    | **`next.config.ts`** | File konfigurasi utama untuk Next.js. |
    | **`package-lock.json`** | Menyimpan daftar dependensi, skrip, serta metadata proyek secara spesifik. |
    | **`package.json`** | Berisi daftar dependensi, skrip, serta metadata proyek. |
    | **`tailwind.config.js`** | File konfigurasi untuk Tailwind CSS. |
    | **`tsconfig.json`** | File yang mengatur konfigurasi TypeScript dalam proyek. |

3. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!

    **Jawab:**
    - Membuat Project React:
    ![](/src/assets/img/P2-1.png)

    - Berhasil membuat project:
    ![](/src/assets/img/P2-2.png)

    - Running project:
    ![](/src/assets/img/P2-3.png)


## Praktikum 3: Menambahkan Komponen React (Button)
1. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah
berhasil Anda lakukan!

    **Jawab:**
    ![](/src/assets/img/P3.png)

## Praktikum 4: Menulis Markup dengan JSX
1. Untuk apakah kegunaan sintaks user.imageUrl?

    **Jawab:** Sintaks tersebut digunakan untuk mengambil nilai dari field imageUrl dalam variabel user, yang berisi URL gambar.

2. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan!

    **Jawab:**
    ![](/src/assets/img/P4.png)