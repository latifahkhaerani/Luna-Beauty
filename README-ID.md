# Luna Beauty — Template Website Booking Salon
Versi Bahasa Indonesia.

Template website salon yang responsif dengan sistem booking sederhana melalui WhatsApp.

## Fitur
- Hero section
- Daftar layanan, harga, dan durasi
- Form booking
- Pesan booking otomatis ke WhatsApp
- Informasi bisnis
- Galeri
- Responsive design
- Siap di-deploy ke Vercel

## Teknologi
- Next.js 15.5.27
- React 19
- TypeScript
- CSS responsive
- Lucide React

## Instalasi

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
npm run start
```

## Mengubah Nomor WhatsApp

Edit:

`components/SalonPage.tsx`

Cari:

```ts
const WHATSAPP_NUMBER = "6281234567890";
```

Gunakan format internasional tanpa `+`, spasi, atau tanda baca.

Contoh:

```ts
const WHATSAPP_NUMBER = "6281234567890";
```

## Mengubah Layanan

Edit data `services` pada `components/SalonPage.tsx`.

Anda dapat mengubah:
- Nama layanan
- Harga
- Durasi

## Mengubah Informasi Bisnis

Cari dan ubah:
- Nama brand
- Alamat
- Jam operasional
- Nomor WhatsApp
- Link Instagram / media sosial

## Mengubah Warna

Edit CSS variables di:

`app/globals.css`

Variable utama:
- `--ink`
- `--muted`
- `--cream`
- `--rose`
- `--rose-dark`
- `--line`

## Gambar

Template ini menggunakan gambar eksternal dari Unsplash sebagai gambar demo.

Untuk website yang akan digunakan oleh bisnis nyata, **disarankan mengganti gambar demo dengan foto milik bisnis sendiri atau gambar yang memiliki lisensi penggunaan yang sesuai.**

### Opsi 1 — Menggunakan URL Gambar

Cara paling sederhana adalah mengganti URL gambar yang sudah tersedia di:

```text
components/SalonPage.tsx
```

Cari URL gambar pada bagian yang menggunakan `images.unsplash.com`, kemudian ganti dengan URL gambar milik Anda.

Contoh:

```tsx
const heroImage = "https://example.com/hero.jpg";
```

Pastikan URL gambar dapat diakses secara publik melalui HTTPS.

---

### Opsi 2 — Menggunakan Gambar Lokal

Anda juga dapat menyimpan gambar langsung di dalam project.

Buat folder:

```text
public/
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── gallery-3.jpg
```

Kemudian letakkan foto bisnis Anda sesuai kebutuhan.

Setelah itu, buka:

```text
components/SalonPage.tsx
```

dan ubah `src` gambar menjadi path lokal.

Contoh:

```tsx
src="/images/hero.jpg"
```

Contoh lainnya:

```tsx
src="/images/about.jpg"
```

```tsx
src="/images/gallery-1.jpg"
```

Dengan cara ini, gambar akan ikut tersimpan di dalam project dan tidak bergantung pada URL eksternal.

---

### 📷 Gambar yang Perlu Diganti

Template menggunakan beberapa gambar demo:

| Bagian          | File yang Disarankan |
| --------------- | -------------------- |
| Hero            | `hero.jpg`           |
| About / Tentang | `about.jpg`          |
| Gallery 1       | `gallery-1.jpg`      |
| Gallery 2       | `gallery-2.jpg`      |
| Gallery 3       | `gallery-3.jpg`      |

Anda tidak harus menggunakan nama file tersebut. Nama file dapat disesuaikan dengan kebutuhan selama path pada `SalonPage.tsx` juga diperbarui.

---

### ⚠️ Catatan Lisensi

Gambar yang terdapat pada template hanya digunakan sebagai **gambar demo**.

Untuk website bisnis atau website milik client, gunakan:

- Foto milik sendiri
- Foto yang diberikan oleh client
- Foto stock dengan lisensi yang sesuai
- Aset lain yang memiliki izin penggunaan komersial

Jangan menggunakan foto milik orang lain tanpa izin.

---

## 🎨 Mengganti Logo / Branding

Logo **Luna Beauty** yang terdapat pada template merupakan branding demo.

Untuk website client, ganti dengan logo milik bisnis tersebut.

Buka:

```text
components/SalonPage.tsx
```

Kemudian cari bagian logo / nama brand dan ubah sesuai identitas bisnis.

Jika tidak menggunakan file logo, template juga dapat menggunakan **text-based logo**, sehingga Anda cukup mengganti nama brand pada component.

Contoh:

```text
Luna Beauty
```

menjadi:

```text
Nama Salon Anda
```

## Batasan

Template ini belum menyediakan:
- Database booking
- Dashboard admin
- Login / registrasi
- Booking real-time
- Pengecekan slot otomatis
- Pembayaran online
- WhatsApp Business API
- Backend booking

Template dapat dikembangkan lebih lanjut jika diperlukan.

## Deployment

Panduan lengkap tersedia di:

`Panduan-Deployment-ID.pdf`

## Lisensi

Template ini disediakan sebagai source code untuk pembeli. Pastikan penggunaan gambar, font, ikon, dan aset pihak ketiga mengikuti lisensi masing-masing.
