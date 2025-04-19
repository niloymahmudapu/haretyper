import quran from "../assets/quran.en.json";

export function random(max = 113, min = 0) {
	return Math.round(Math.random() * (max - min)) + min;
}

export function randomAyah(): string {
	const surah = quran[random()];
	const ayah = surah?.ayahs?.[random(surah?.ayahs?.length || 0)];
	return ayah?.text || randomAyah();
}
