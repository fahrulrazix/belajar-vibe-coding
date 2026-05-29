# Project Setup: Bun + ElysiaJS + Drizzle + MySQL

Project backend minimal menggunakan runtime Bun, framework ElysiaJS, ORM Drizzle, dan database MySQL.

## Prasyarat
- [Bun](https://bun.sh/) terinstal di komputer Anda.
- Server MySQL yang sedang berjalan.

## Cara Memulai

### 1. Instal Dependensi
```bash
bun install
```

### 2. Konfigurasi Environment
Salin berkas `.env.example` ke `.env` dan sesuaikan nilainya (khususnya `DATABASE_URL` dengan kredensial MySQL Anda).
```bash
cp .env.example .env
```

### 3. Sinkronisasi Database (Drizzle Kit Push)
Gunakan perintah berikut untuk menyinkronkan skema Drizzle langsung ke database MySQL Anda:
```bash
bun run db:push
```

### 4. Menjalankan Server Development
Jalankan server dalam mode development (dengan reload otomatis):
```bash
bun run dev
```
Server akan berjalan di `http://localhost:3000`.

## Struktur Folder
- `src/index.ts`: Entry point aplikasi dan setup server ElysiaJS.
- `src/db/schema.ts`: Definisi skema tabel database (Drizzle ORM).
- `src/db/index.ts`: Inisialisasi client Drizzle dan koneksi MySQL pool.
- `drizzle.config.ts`: Konfigurasi Drizzle Kit untuk database.
