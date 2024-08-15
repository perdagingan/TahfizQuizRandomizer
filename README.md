# Randomizer Ayat Quran
Randomizer Ayat Quran adalah berkas HTML sederhana yang men-*generate* secara acak ayat-ayat surat pendek sebagai soal sambung ayat untuk lomba tahfiz anak-anak.

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

### Modifikasi Kode JavaScript
Untuk menambahkan kategori baru, Anda juga perlu menambahkan surat-surat yang sesuai ke dalam array surahJuz30 dan jumlah ayat ke dalam array surahAyahCount di file script.js. Contoh tambahan kategori baru:

```javascript
const surahJuz30 = {
    [nama_kategori]: ['surat1', 'surat2', 'surat3'] // Tambahkan surat-surat yang sesuai
};

const surahAyahCount = {
    [nama_kategori]: [jumlah_ayah_surat1, jumlah_ayah_surat2, jumlah_ayah_surat3] // Tambahkan jumlah ayat untuk setiap surat
};
```

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
Untuk membuat proses pengumpulan data lebih mudah dan otomatis, Anda dapat menggunakan script berikut untuk mengumpulkan data surah dan jumlah ayat secara otomatis:

```javascript
const axios = require('axios');

async function getSurahData() {
    const response = await axios.get('https://api.alquran.cloud/v1/surah');
    const surahs = response.data.data;

    const surahJuz30 = {
        tk: [],
        sd: []
    };

    for (const surah of surahs) {
        const ayahCount = await getAyahCount(surah.number);
        const ayahs = Array.from({ length: ayahCount }, (_, i) => i + 1);

        if (surah.number >= 87 && surah.number <= 114) {
            if (surah.number >= 87 && surah.number <= 90) {
                surahJuz30.tk.push(surah.name);
            } else if (surah.number >= 91 && surah.number <= 114) {
                surahJuz30.sd.push(surah.name);
            }
        }
    }

    return surahJuz30;
}

async function getAyahCount(surahNumber) {
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
    return response.data.data.ayahs.length;
}

getSurahData().then(surahJuz30 => {
    console.log(surahJuz30);
});
```

# FAQ (Pertanyaan yang Pasti Anda Tanyakan)
1. Kenapa kok ga dibikin sekalian nam? MALAS...