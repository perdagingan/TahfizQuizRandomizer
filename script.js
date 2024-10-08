const surahJuz30 = {
    tk: ['Al-\'Asr', 'Al-Humazah', 'Al-Fil', 'Quraisy', 'Al-Ma\'un', 'Al-Kautsar', 'Al-Kafirun', 'An-Nasr', 'Al-Masad', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas'],
    sd: ['Al-A\'la', 'Al-Gasyiyah', 'Al-Fajr', 'Al-Balad', 'Asy-Syams', 'Al-Lail', 'Ad-Duha', 'Asy-Syarh', 'At-Tin', 'Al-\'Alaq', 'Al-Qadr', 'Al-Bayyinah', 'Az-Zalzalah', 'Al-\'Adiyat', 'Al-Qari\'ah', 'At-Takatsur', 'Al-\'Asr', 'Al-Humazah', 'Al-Fil', 'Quraisy', 'Al-Ma\'un', 'Al-Kautsar', 'Al-Kafirun', 'An-Nasr', 'Al-Masad', 'Al-Ikhlas', 'Al-Falaq', 'An-Nas']
};

const surahAyahCount = {
    'Al-A\'la': 19, 'Al-Gasyiyah': 26, 'Al-Fajr': 30, 'Al-Balad': 20, 'Asy-Syams': 15, 'Al-Lail': 21,
    'Ad-Duha': 11, 'Asy-Syarh': 8, 'At-Tin': 8, 'Al-\'Alaq': 19, 'Al-Qadr': 5, 'Al-Bayyinah': 8,
    'Az-Zalzalah': 8, 'Al-Adiyat': 11, 'Al-Qari\'ah': 11, 'At-Takatsur': 8, 'Al-\'Asr': 3, 'Al-Humazah': 9,
    'Al-Fil': 5, 'Quraisy': 4, 'Al-Ma\'un': 7, 'Al-Kautsar': 3, 'Al-Kafirun': 6, 'An-Nasr': 3,
    'Al-Masad': 5, 'Al-Ikhlas': 4, 'Al-Falaq': 5, 'An-Nas': 6
};

const surahNumberMap = {
'Al-A\'la': 87, 'Al-Gasyiyah': 88, 'Al-Fajr': 89, 'Al-Balad': 90, 'Asy-Syams': 91, 'Al-Lail': 92,
'Ad-Duha': 93, 'Asy-Syarh': 94, 'At-Tin': 95, 'Al-\'Alaq': 96, 'Al-Qadr': 97, 'Al-Bayyinah': 98,
'Az-Zalzalah': 99, 'Al-\'Adiyat': 100, 'Al-Qari\'ah': 101, 'At-Takatsur': 102, 'Al-\'Asr': 103, 'Al-Humazah': 104,
'Al-Fil': 105, 'Quraisy': 106, 'Al-Ma\'un': 107, 'Al-Kautsar': 108, 'Al-Kafirun': 109, 'An-Nasr': 110,
'Al-Masad': 111, 'Al-Ikhlas': 112, 'Al-Falaq': 113, 'An-Nas': 114
};

let usedQuestions = new Set();

const ageGroupSelect = document.getElementById('ageGroup');
const generateButton = document.getElementById('generateQuestion');
const questionText = document.getElementById('questionText');

function getRandomQuestion(ageGroup) {
    const surahList = surahJuz30[ageGroup];
    let question;

    do {
        const randomSurah = surahList[Math.floor(Math.random() * surahList.length)];
        const randomAyah = Math.floor(Math.random() * surahAyahCount[randomSurah]) + 1;
        question = `${randomSurah}:${randomAyah}`;
    } while (usedQuestions.has(question));

    usedQuestions.add(question);
    const [surah, ayah] = question.split(':');
    return { surah, ayah: Number(ayah) };
}

async function fetchAyat(surah, ayah) {
    const surahNumber = surahNumberMap[surah];
    const response = await fetch(`http://api.alquran.cloud/v1/ayah/${surahNumber}:${ayah}`);
    const data = await response.json();
    return data.data.text;
}

generateButton.addEventListener('click', async () => {
const ageGroup = ageGroupSelect.value;
if (usedQuestions.size >= surahJuz30[ageGroup].length * 5) {
    usedQuestions.clear();
}

const randomQuestion = getRandomQuestion(ageGroup);

questionText.innerHTML = '<span class="loading">Memuat, harap tunggu</span>';

try {
    const ayat = await fetchAyat(randomQuestion.surah, randomQuestion.ayah);
    questionText.innerHTML = `Usia: ${ageGroup.toUpperCase()}<br>Soal: Surah ${randomQuestion.surah}, Ayat ${randomQuestion.ayah}<br><br><p class="noto-naskh-arabic-ayat">${ayat}</p>`;
} catch (error) {
    questionText.innerText = 'Gagal memuat soal, coba lagi!';
    console.error(error);
}
});