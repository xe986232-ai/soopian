# SOPAN TEAM — Landing Page

Landing page komunitas SOPAN TEAM dengan tiga divisi: **Remix**, **Creator**, dan **Leadis**.
Dibangun pakai Next.js (App Router), Tailwind CSS, dan Framer Motion.

## Cara Menjalankan

1. Pastikan sudah install [Node.js](https://nodejs.org) versi 18 ke atas.
2. Buka folder project ini lewat terminal, lalu jalankan:

   ```bash
   npm install
   npm run dev
   ```

3. Buka `http://localhost:3000` di browser.

> Catatan: saat pertama kali `npm run dev` atau `npm run build`, Next.js akan
> mengunduh font (Unbounded & Plus Jakarta Sans) dari Google Fonts secara
> otomatis — pastikan komputer kamu terkoneksi internet.

## Struktur Project

```
app/
  layout.js       -> font & metadata global
  page.js         -> menyusun semua section jadi 1 halaman
  globals.css     -> style dasar + reduced-motion support
components/
  FloatingNavbar.jsx    -> navbar yang hide/show saat scroll
  AuroraBackground.jsx  -> background animasi di hero
  Hero.jsx              -> section pembuka + text reveal animation
  AboutSection.jsx      -> manifesto singkat tim
  DivisionsSection.jsx  -> grid 3 kartu divisi
  DivisionCard.jsx      -> kartu divisi dengan tilt 3D + pola animasi unik
  Footer.jsx            -> CTA gabung + link sosial
lib/
  utils.js        -> helper gabungin className Tailwind
```

## Yang Bisa Kamu Ganti

- **Teks & copy**: langsung edit di tiap file component (`Hero.jsx`,
  `AboutSection.jsx`, `DivisionsSection.jsx`).
- **Data divisi**: array `DIVISIONS` di `components/DivisionsSection.jsx`
  — ganti `description`, `tags`, atau warna gradient (`gradientFrom`/`gradientTo`).
- **Warna tema**: `tailwind.config.js` bagian `colors` (`remix`, `creator`, `leadis`, `base`, `ink`).
- **Logo**: taruh file logo di folder `public/`, lalu pakai `<Image>` dari `next/image` di `FloatingNavbar.jsx`.
- **Link sosial & kontak**: `components/Footer.jsx`.

## Deploy

Paling gampang pakai [Vercel](https://vercel.com) — tinggal push ke GitHub,
import repo-nya di Vercel, otomatis ke-deploy dengan free tier.
