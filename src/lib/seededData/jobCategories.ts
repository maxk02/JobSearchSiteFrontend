export interface JobCategory {
    id: number;
    namePl: string;
}

export const jobCategories: JobCategory[] = [
    { id: 1, namePl: "Administracja biurowa" },
    { id: 2, namePl: "Administracja publiczna / Służba cywilna" },
    { id: 3, namePl: "Architektura" },
    { id: 4, namePl: "Badania i rozwój" },
    { id: 5, namePl: "Budownictwo / Geodezja" },
    { id: 6, namePl: "Doradztwo / Konsulting" },
    { id: 7, namePl: "Edukacja / Nauka / Szkolenia" },
    { id: 8, namePl: "Energetyka / Elektronika" },
    { id: 9, namePl: "Farmaceutyka / Biotechnologia" },
    { id: 10, namePl: "Finanse / Bankowość" },
    { id: 11, namePl: "Gastronomia / Catering" },
    { id: 12, namePl: "Grafika / Fotografia / Kreacja" },
    { id: 13, namePl: "Human Resources / Kadry" },
    { id: 14, namePl: "Informatyka / Administracja" },
    { id: 15, namePl: "Informatyka / Programowanie" },
    { id: 16, namePl: "Internet / e-commerce" },
    { id: 17, namePl: "Inżynieria / Projektowanie" },
    { id: 18, namePl: "Kadra zarządzająca" },
    { id: 19, namePl: "Kontrola jakości" },
    { id: 20, namePl: "Kosmetyka / Pielęgnacja" },
    { id: 21, namePl: "Księgowość / Audyt / Podatki" },
    { id: 22, namePl: "Logistyka / Dystrybucja" },
    { id: 23, namePl: "Marketing / Reklama / PR" },
    { id: 24, namePl: "Media / Sztuka / Rozrywka" },
    { id: 25, namePl: "Medycyna / Opieka zdrowotna" },
    { id: 26, namePl: "Motoryzacja" },
    { id: 27, namePl: "Nieruchomości" },
    { id: 28, namePl: "Ochrona osób i mienia" },
    { id: 29, namePl: "Organizacje pozarządowe / Wolontariat" },
    { id: 30, namePl: "Praca fizyczna" },
    { id: 31, namePl: "Praktyki / Staż" },
    { id: 32, namePl: "Prawo" },
    { id: 33, namePl: "Przemysł / Produkcja" },
    { id: 34, namePl: "Rolnictwo / Ochrona środowiska" },
    { id: 35, namePl: "Serwis / Technika / Montaż" },
    { id: 36, namePl: "Sport / Rekreacja" },
    { id: 37, namePl: "Sprzedaż / Obsługa klienta" },
    { id: 38, namePl: "Telekomunikacja" },
    { id: 39, namePl: "Tłumaczenia" },
    { id: 40, namePl: "Transport / Spedycja" },
    { id: 41, namePl: "Turystyka / Hotelarstwo" },
    { id: 42, namePl: "Ubezpieczenia" },
    { id: 43, namePl: "Zakupy" },
    { id: 44, namePl: "Franczyza" }
];

export const jobCategoryIds: number[] = jobCategories.map(jc => jc.id);