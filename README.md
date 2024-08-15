# Randomizer Ayat Quran
Randomizer Ayat Quran adalah berkas HTML sederhana yang men-*generate* secara acak ayat-ayat surat pendek sebagai soal sambung ayat untuk lomba tahfiz anak-anak dengan trimurti teknologi klien web (html, css, js) dan API dari https://alquran.cloud/api.

## Kategori Kelas/Usia
1. Kelas 2-6 SD (Juz 30 surat Al - A'la s/d An Nas) 
2. Kelas pra-sekolah/TK dan SD kelas 1 (Juz 30 surat Quraisy s/d An-Nas)

Karena proyek ini saya kerjakan untuk kegiatan sehari, Anda dapat mengubah kategori sesuai kebutuhan dengan modifikasi file `index.html` yang telah anda unduh menggunakan notepad/notepad++/vscode sebagai berikut:

- Pada teks HTML `<select id="ageGroup">` baris 93, Anda dapat menambah kategori dengan format `<option value="[nama_kategori]">[nama_kategori]</option>`.
- Pada baris 94, tambahkan kategori baru dengan format `<option value="[nama_kategori]">[nama_kategori]</option>`.

Contoh tambahan kategori:
```html
<select id="ageGroup">
    <option value="tk">TK dan SD Kelas 1</option>
    <option value="sd">SD Kelas 2-6</option>
    <option value="[nama_kategori]">[nama_kategori]</option>
</select>
```

## Langkah-Langkah Modifikasi
### Modifikasi Berkas html
Buka file index.html menggunakan notepad/notepad++/vscode.
Cari baris ```<select id="ageGroup">```.
Tambahkan kategori baru dengan format ```<option value="[nama_kategori]">[nama_kategori]</option>.```
    Simpan perubahan dan buka ulang browser untuk melihat perubahan.

### Contoh Modifikasi
Misalkan Anda ingin menambah kategori "Kelas 7-9" dengan surat Al - A'la s/d An Nas, Anda dapat menambahkan kode berikut:

```html
<select id="ageGroup">
    <option value="tk">TK dan SD Kelas 1</option>
    <option value="sd">SD Kelas 2-6</option>
    <option value="kelas7-9">Kelas 7-9</option>
</select>
```

## Cara Menggunakan

1. Unduh file index.html dari repository ini.
2. Buka file menggunakan notepad/notepad++/vscode.
3. Modifikasi kategori sesuai kebutuhan Anda.
4. Simpan perubahan dan buka ulang browser untuk melihat perubahan.

Masih kurang?
# Otomasi Rentang Surah yang Diujikan
Pakailah library dari repo https://github.com/zakiego/quran-quiz yang lebih advance
