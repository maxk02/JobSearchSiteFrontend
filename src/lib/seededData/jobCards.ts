import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";

export const jobCardData: JobCardDto[] = [
    // Technologie Rozwiązań Sp. z o.o. (Multiple Jobs)
    {
        id: 1,
        companyId: 101,
        companyLogoLink: "/company_0.svg",
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Programista Frontend",
        dateTimePublishedUtc: "2025-04-20T10:00:00Z",
        dateTimeExpiringUtc: "2025-05-22T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4, 5],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    {
        id: 2,
        companyId: 101,
        companyLogoLink: "/company_0.svg",
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Programista Backend",
        dateTimePublishedUtc: "2025-04-21T11:00:00Z",
        dateTimeExpiringUtc: "2025-05-20T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4, 5],
        contractTypeIds: [4],
        isBookmarked: false
    },
    {
        id: 3,
        companyId: 101,
        companyLogoLink: "/company_0.svg",
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Kierownik Projektu IT",
        dateTimePublishedUtc: "2025-04-22T12:00:00Z",
        dateTimeExpiringUtc: "2025-05-19T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 5],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Analityka Danych Polska
    {
        id: 4,
        companyId: 102,
        companyLogoLink: "/company_0.svg",
        companyName: "Analityka Danych Polska",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Analityk Danych",
        dateTimePublishedUtc: "2025-04-18T09:00:00Z",
        dateTimeExpiringUtc: "2025-05-18T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // CyberBezpieczeństwo Sp. z o.o.
    {
        id: 5,
        companyId: 103,
        companyLogoLink: "/company_0.svg",
        companyName: "CyberBezpieczeństwo Sp. z o.o.",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" },
            { id: 17, name: "Oliwa, Gdańsk, Województwo Pomorskie" }
        ],
        title: "Specjalista ds. Cyberbezpieczeństwa",
        dateTimePublishedUtc: "2025-04-15T14:00:00Z",
        dateTimeExpiringUtc: "2025-05-15T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Innowacje Chmurowe
    {
        id: 6,
        companyId: 104,
        companyLogoLink: "/company_0.svg",
        companyName: "Innowacje Chmurowe",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Inżynier Chmury",
        dateTimePublishedUtc: "2025-04-22T08:00:00Z",
        dateTimeExpiringUtc: "2025-05-22T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 5],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Studio Aplikacji Mobilnych
    {
        id: 7,
        companyId: 105,
        companyLogoLink: "/company_0.svg",
        companyName: "Studio Aplikacji Mobilnych",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Programista Aplikacji Mobilnych",
        dateTimePublishedUtc: "2025-04-19T12:00:00Z",
        dateTimeExpiringUtc: "2025-05-19T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 4],
        contractTypeIds: [3, 4],
        isBookmarked: false
    },
    // Laboratorium Badań AI
    {
        id: 8,
        companyId: 106,
        companyLogoLink: "/company_0.svg",
        companyName: "Laboratorium Badań AI",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 13, name: "Podgórze, Kraków, Województwo Małopolskie" }
        ],
        title: "Inżynier Uczenia Maszynowego",
        dateTimePublishedUtc: "2025-04-21T11:00:00Z",
        dateTimeExpiringUtc: "2025-05-21T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 5],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Rozwiązania FinTech
    {
        id: 9,
        companyId: 107,
        companyLogoLink: "/company_0.svg",
        companyName: "Rozwiązania FinTech",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Specjalista ds. Blockchain",
        dateTimePublishedUtc: "2025-04-17T15:00:00Z",
        dateTimeExpiringUtc: "2025-05-17T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Platforma E-commerce
    {
        id: 10,
        companyId: 108,
        companyLogoLink: "/company_0.svg",
        companyName: "Platforma E-commerce",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Programista Full Stack",
        dateTimePublishedUtc: "2025-04-23T09:00:00Z",
        dateTimeExpiringUtc: "2025-05-23T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 5],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Studio Gier
    {
        id: 11,
        companyId: 109,
        companyLogoLink: "/company_0.svg",
        companyName: "Studio Gier",
        locations: [
            { id: 19, name: "Puck, Powiat pucki, Województwo Pomorskie" }
        ],
        title: "Programista Gier",
        dateTimePublishedUtc: "2025-04-16T10:00:00Z",
        dateTimeExpiringUtc: "2025-05-16T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Innowacje HealthTech
    {
        id: 12,
        companyId: 110,
        companyLogoLink: "/company_0.svg",
        companyName: "Innowacje HealthTech",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 12, name: "Nowa Huta, Kraków, Województwo Małopolskie" }
        ],
        title: "Inżynier DevOps",
        dateTimePublishedUtc: "2025-04-24T13:00:00Z",
        dateTimeExpiringUtc: "2025-05-24T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Zdrowa Kuchnia Sp. z o.o. (Multiple Jobs)
    {
        id: 13,
        companyId: 111,
        companyLogoLink: "/company_0.svg",
        companyName: "Zdrowa Kuchnia Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Kucharz",
        dateTimePublishedUtc: "2025-04-25T08:00:00Z",
        dateTimeExpiringUtc: "2025-05-25T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    {
        id: 14,
        companyId: 111,
        companyLogoLink: "/company_0.svg",
        companyName: "Zdrowa Kuchnia Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Kelner",
        dateTimePublishedUtc: "2025-04-26T09:00:00Z",
        dateTimeExpiringUtc: "2025-05-26T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    {
        id: 15,
        companyId: 111,
        companyLogoLink: "/company_0.svg",
        companyName: "Zdrowa Kuchnia Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Kierownik Restauracji",
        dateTimePublishedUtc: "2025-04-27T10:00:00Z",
        dateTimeExpiringUtc: "2025-05-27T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Edukacja Przyszłości
    {
        id: 16,
        companyId: 112,
        companyLogoLink: "/company_0.svg",
        companyName: "Edukacja Przyszłości",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Nauczyciel Matematyki",
        dateTimePublishedUtc: "2025-04-28T11:00:00Z",
        dateTimeExpiringUtc: "2025-05-28T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Logistyka Polska
    {
        id: 17,
        companyId: 113,
        companyLogoLink: "/company_0.svg",
        companyName: "Logistyka Polska",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Kierowca Ciężarówki",
        dateTimePublishedUtc: "2025-04-29T12:00:00Z",
        dateTimeExpiringUtc: "2025-05-29T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 6],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Opieka Medyczna
    {
        id: 18,
        companyId: 114,
        companyLogoLink: "/company_0.svg",
        companyName: "Opieka Medyczna",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Pielęgniarka",
        dateTimePublishedUtc: "2025-04-30T13:00:00Z",
        dateTimeExpiringUtc: "2025-05-30T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Budownictwo Nowoczesne
    {
        id: 19,
        companyId: 115,
        companyLogoLink: "/company_0.svg",
        companyName: "Budownictwo Nowoczesne",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Inżynier Budownictwa",
        dateTimePublishedUtc: "2025-05-01T14:00:00Z",
        dateTimeExpiringUtc: "2025-06-01T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Sieć Sklepów Spożywczych (Multiple Jobs)
    {
        id: 20,
        companyId: 116,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Sklepów Spożywczych",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 12, name: "Nowa Huta, Kraków, Województwo Małopolskie" }
        ],
        title: "Kasjer",
        dateTimePublishedUtc: "2025-05-02T15:00:00Z",
        dateTimeExpiringUtc: "2025-06-02T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [5],
        isBookmarked: false
    },
    {
        id: 21,
        companyId: 116,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Sklepów Spożywczych",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Magazynier",
        dateTimePublishedUtc: "2025-05-03T16:00:00Z",
        dateTimeExpiringUtc: "2025-06-03T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    {
        id: 22,
        companyId: 116,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Sklepów Spożywczych",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 13, name: "Podgórze, Kraków, Województwo Małopolskie" }
        ],
        title: "Kierownik Sklepu",
        dateTimePublishedUtc: "2025-05-04T17:00:00Z",
        dateTimeExpiringUtc: "2025-06-04T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Marketing Kreatywny
    {
        id: 23,
        companyId: 117,
        companyLogoLink: "/company_0.svg",
        companyName: "Marketing Kreatywny",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" },
            { id: 16, name: "Wrzeszcz, Gdańsk, Województwo Pomorskie" }
        ],
        title: "Specjalista ds. Marketingu",
        dateTimePublishedUtc: "2025-05-05T08:00:00Z",
        dateTimeExpiringUtc: "2025-06-05T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4, 5],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Hotele Luksusowe
    {
        id: 24,
        companyId: 118,
        companyLogoLink: "/company_0.svg",
        companyName: "Hotele Luksusowe",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Recepcjonista",
        dateTimePublishedUtc: "2025-05-06T09:00:00Z",
        dateTimeExpiringUtc: "2025-06-06T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Produkcja Mebli
    {
        id: 25,
        companyId: 119,
        companyLogoLink: "/company_0.svg",
        companyName: "Produkcja Mebli",
        locations: [
            { id: 19, name: "Puck, Powiat pucki, Województwo Pomorskie" }
        ],
        title: "Stolarz",
        dateTimePublishedUtc: "2025-05-07T10:00:00Z",
        dateTimeExpiringUtc: "2025-06-07T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Rolnictwo Ekologiczne
    {
        id: 26,
        companyId: 120,
        companyLogoLink: "/company_0.svg",
        companyName: "Rolnictwo Ekologiczne",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Rolnik",
        dateTimePublishedUtc: "2025-05-08T11:00:00Z",
        dateTimeExpiringUtc: "2025-06-08T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Fitness Klub
    {
        id: 27,
        companyId: 121,
        companyLogoLink: "/company_0.svg",
        companyName: "Fitness Klub",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Trener Personalny",
        dateTimePublishedUtc: "2025-05-09T12:00:00Z",
        dateTimeExpiringUtc: "2025-06-09T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3, 4],
        isBookmarked: false
    },
    // Agencja Eventowa
    {
        id: 28,
        companyId: 122,
        companyLogoLink: "/company_0.svg",
        companyName: "Agencja Eventowa",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Organizator Imprez",
        dateTimePublishedUtc: "2025-05-10T13:00:00Z",
        dateTimeExpiringUtc: "2025-06-10T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 5],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Pracownia Architektoniczna
    {
        id: 29,
        companyId: 123,
        companyLogoLink: "/company_0.svg",
        companyName: "Pracownia Architektoniczna",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Architekt",
        dateTimePublishedUtc: "2025-05-11T14:00:00Z",
        dateTimeExpiringUtc: "2025-06-11T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Klinika Weterynaryjna
    {
        id: 30,
        companyId: 124,
        companyLogoLink: "/company_0.svg",
        companyName: "Klinika Weterynaryjna",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Weterynarz",
        dateTimePublishedUtc: "2025-05-12T15:00:00Z",
        dateTimeExpiringUtc: "2025-06-12T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Sieć Aptek
    {
        id: 31,
        companyId: 125,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Aptek",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Farmaceuta",
        dateTimePublishedUtc: "2025-05-13T16:00:00Z",
        dateTimeExpiringUtc: "2025-06-13T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Studio Fotograficzne
    {
        id: 32,
        companyId: 126,
        companyLogoLink: "/company_0.svg",
        companyName: "Studio Fotograficzne",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Fotograf",
        dateTimePublishedUtc: "2025-05-14T17:00:00Z",
        dateTimeExpiringUtc: "2025-06-14T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Transport Publiczny
    {
        id: 33,
        companyId: 127,
        companyLogoLink: "/company_0.svg",
        companyName: "Transport Publiczny",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Kierowca Autobusu",
        dateTimePublishedUtc: "2025-05-15T08:00:00Z",
        dateTimeExpiringUtc: "2025-06-15T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Biuro Rachunkowe
    {
        id: 34,
        companyId: 128,
        companyLogoLink: "/company_0.svg",
        companyName: "Biuro Rachunkowe",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Księgowy",
        dateTimePublishedUtc: "2025-05-16T09:00:00Z",
        dateTimeExpiringUtc: "2025-06-16T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [1, 4],
        isBookmarked: false
    },
    // Przemysł Odzieżowy
    {
        id: 35,
        companyId: 129,
        companyLogoLink: "/company_0.svg",
        companyName: "Przemysł Odzieżowy",
        locations: [
            { id: 19, name: "Puck, Powiat pucki, Województwo Pomorskie" }
        ],
        title: "Krawiec",
        dateTimePublishedUtc: "2025-05-17T10:00:00Z",
        dateTimeExpiringUtc: "2025-06-17T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Centrum Językowe
    {
        id: 36,
        companyId: 130,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Językowe",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Lektor Języka Angielskiego",
        dateTimePublishedUtc: "2025-05-18T11:00:00Z",
        dateTimeExpiringUtc: "2025-06-18T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 4],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Agencja Ochrony
    {
        id: 37,
        companyId: 131,
        companyLogoLink: "/company_0.svg",
        companyName: "Agencja Ochrony",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Ochroniarz",
        dateTimePublishedUtc: "2025-05-19T12:00:00Z",
        dateTimeExpiringUtc: "2025-06-19T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Produkcja Spożywcza
    {
        id: 38,
        companyId: 132,
        companyLogoLink: "/company_0.svg",
        companyName: "Produkcja Spożywcza",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Technolog Żywności",
        dateTimePublishedUtc: "2025-05-20T13:00:00Z",
        dateTimeExpiringUtc: "2025-06-20T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Salon Kosmetyczny
    {
        id: 39,
        companyId: 133,
        companyLogoLink: "/company_0.svg",
        companyName: "Salon Kosmetyczny",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Kosmetyczka",
        dateTimePublishedUtc: "2025-05-21T14:00:00Z",
        dateTimeExpiringUtc: "2025-06-21T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Firma Sprzątająca
    {
        id: 40,
        companyId: 134,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Sprzątająca",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Pracownik Sprzątający",
        dateTimePublishedUtc: "2025-05-22T15:00:00Z",
        dateTimeExpiringUtc: "2025-06-22T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Biuro Podróży
    {
        id: 41,
        companyId: 135,
        companyLogoLink: "/company_0.svg",
        companyName: "Biuro Podróży",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Agent Turystyczny",
        dateTimePublishedUtc: "2025-05-23T16:00:00Z",
        dateTimeExpiringUtc: "2025-06-23T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Centrum Logistyczne
    {
        id: 42,
        companyId: 136,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Logistyczne",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Magazynier",
        dateTimePublishedUtc: "2025-05-24T17:00:00Z",
        dateTimeExpiringUtc: "2025-06-24T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Pracownia Jubilerska
    {
        id: 43,
        companyId: 137,
        companyLogoLink: "/company_0.svg",
        companyName: "Pracownia Jubilerska",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Jubiler",
        dateTimePublishedUtc: "2025-05-25T08:00:00Z",
        dateTimeExpiringUtc: "2025-06-25T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Firma Elektryczna
    {
        id: 44,
        companyId: 138,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Elektryczna",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Elektryk",
        dateTimePublishedUtc: "2025-05-26T09:00:00Z",
        dateTimeExpiringUtc: "2025-06-26T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Centrum Szkoleniowe
    {
        id: 45,
        companyId: 139,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Szkoleniowe",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Trener Biznesowy",
        dateTimePublishedUtc: "2025-05-27T10:00:00Z",
        dateTimeExpiringUtc: "2025-06-27T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Produkcja Maszyn
    {
        id: 46,
        companyId: 140,
        companyLogoLink: "/company_0.svg",
        companyName: "Produkcja Maszyn",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Operator CNC",
        dateTimePublishedUtc: "2025-05-28T11:00:00Z",
        dateTimeExpiringUtc: "2025-06-28T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Agencja Reklamowa
    {
        id: 47,
        companyId: 141,
        companyLogoLink: "/company_0.svg",
        companyName: "Agencja Reklamowa",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Grafik Komputerowy",
        dateTimePublishedUtc: "2025-05-29T12:00:00Z",
        dateTimeExpiringUtc: "2025-06-29T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Centrum Medyczne
    {
        id: 48,
        companyId: 142,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Medyczne",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Lekarz Internista",
        dateTimePublishedUtc: "2025-05-30T13:00:00Z",
        dateTimeExpiringUtc: "2025-06-30T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Firma Hydrauliczna
    {
        id: 49,
        companyId: 143,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Hydrauliczna",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Hydraulik",
        dateTimePublishedUtc: "2025-05-31T14:00:00Z",
        dateTimeExpiringUtc: "2025-07-01T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Studio Muzyczne
    {
        id: 50,
        companyId: 144,
        companyLogoLink: "/company_0.svg",
        companyName: "Studio Muzyczne",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Producent Muzyczny",
        dateTimePublishedUtc: "2025-06-01T15:00:00Z",
        dateTimeExpiringUtc: "2025-07-01T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Sieć Kawiarni
    {
        id: 51,
        companyId: 145,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Kawiarni",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Barista",
        dateTimePublishedUtc: "2025-06-02T16:00:00Z",
        dateTimeExpiringUtc: "2025-07-02T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Firma Geodezyjna
    {
        id: 52,
        companyId: 146,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Geodezyjna",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Geodeta",
        dateTimePublishedUtc: "2025-06-03T17:00:00Z",
        dateTimeExpiringUtc: "2025-07-03T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Ośrodek Kultury
    {
        id: 53,
        companyId: 147,
        companyLogoLink: "/company_0.svg",
        companyName: "Ośrodek Kultury",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Animator Kultury",
        dateTimePublishedUtc: "2025-06-04T08:00:00Z",
        dateTimeExpiringUtc: "2025-07-04T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // Firma Konsultingowa
    {
        id: 54,
        companyId: 148,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Konsultingowa",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Konsultant Biznesowy",
        dateTimePublishedUtc: "2025-06-05T09:00:00Z",
        dateTimeExpiringUtc: "2025-07-05T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Pracownia Krawiecka
    {
        id: 55,
        companyId: 149,
        companyLogoLink: "/company_0.svg",
        companyName: "Pracownia Krawiecka",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Projektant Mody",
        dateTimePublishedUtc: "2025-06-06T10:00:00Z",
        dateTimeExpiringUtc: "2025-07-06T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Centrum Rehabilitacji
    {
        id: 56,
        companyId: 150,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Rehabilitacji",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Fizjoterapeuta",
        dateTimePublishedUtc: "2025-06-07T11:00:00Z",
        dateTimeExpiringUtc: "2025-07-07T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Firma Budowlana
    {
        id: 57,
        companyId: 151,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Budowlana",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Murarz",
        dateTimePublishedUtc: "2025-06-08T12:00:00Z",
        dateTimeExpiringUtc: "2025-07-08T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },
    // Agencja Nieruchomości
    {
        id: 58,
        companyId: 152,
        companyLogoLink: "/company_0.svg",
        companyName: "Agencja Nieruchomości",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Agent Nieruchomości",
        dateTimePublishedUtc: "2025-06-09T13:00:00Z",
        dateTimeExpiringUtc: "2025-07-09T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Studio Tatuażu
    {
        id: 59,
        companyId: 153,
        companyLogoLink: "/company_0.svg",
        companyName: "Studio Tatuażu",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        title: "Tatuażysta",
        dateTimePublishedUtc: "2025-06-10T14:00:00Z",
        dateTimeExpiringUtc: "2025-07-10T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // Firma Ogrodnicza
    {
        id: 60,
        companyId: 154,
        companyLogoLink: "/company_0.svg",
        companyName: "Firma Ogrodnicza",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        title: "Ogrodnik",
        dateTimePublishedUtc: "2025-06-11T15:00:00Z",
        dateTimeExpiringUtc: "2025-07-11T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        isBookmarked: false
    },






    {
        id: 1111,
        companyId: 116,
        companyLogoLink: "/company_0.svg",
        companyName: "Sieć Sklepów Spożywczych",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 12, name: "Nowa Huta, Kraków, Województwo Małopolskie" }
        ],
        title: "Kasjer-Sprzedawca",
        dateTimePublishedUtc: "2025-04-20T08:00:00Z",
        dateTimeExpiringUtc: "2025-05-20T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    // {
    //     id: 1112,
    //     companyId: 116,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Sieć Sklepów Spożywczych",
    //     locations: [
    //         { id: 7, name: "Warszawa, Województwo Mazowieckie" }
    //     ],
    //     title: "Kasjer w Sklepie Spożywczym",
    //     dateTimePublishedUtc: "2025-04-21T09:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-21T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [2, 3],
    //     contractTypeIds: [3],
    //     isBookmarked: false
    // },
    // {
    //     id: 1113,
    //     companyId: 201,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Hipermarket Polska",
    //     locations: [
    //         { id: 15, name: "Gdańsk, Województwo Pomorskie" },
    //         { id: 16, name: "Wrzeszcz, Gdańsk, Województwo Pomorskie" }
    //     ],
    //     title: "Kasjer na Pełny Etat",
    //     dateTimePublishedUtc: "2025-04-22T10:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-22T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 3],
    //     contractTypeIds: [1],
    //     isBookmarked: false
    // },
    // {
    //     id: 1114,
    //     companyId: 201,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Hipermarket Polska",
    //     locations: [
    //         { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
    //     ],
    //     title: "Kasjer-Wykładacz Towaru",
    //     dateTimePublishedUtc: "2025-04-23T11:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-23T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [2, 3],
    //     contractTypeIds: [3],
    //     isBookmarked: false
    // },
    // {
    //     id: 1115,
    //     companyId: 202,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Sklepy Convenience",
    //     locations: [
    //         { id: 7, name: "Warszawa, Województwo Mazowieckie" },
    //         { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
    //     ],
    //     title: "Kasjer na Zmiany Nocne",
    //     dateTimePublishedUtc: "2025-04-24T12:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-24T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [2, 3],
    //     contractTypeIds: [3],
    //     isBookmarked: false
    // },
    // {
    //     id: 1116,
    //     companyId: 202,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Sklepy Convenience",
    //     locations: [
    //         { id: 19, name: "Puck, Powiat pucki, Województwo Pomorskie" }
    //     ],
    //     title: "Kasjer w Małym Sklepie",
    //     dateTimePublishedUtc: "2025-04-25T13:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-25T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [2, 3],
    //     contractTypeIds: [3],
    //     isBookmarked: false
    // },
    {
        id: 1117,
        companyId: 203,
        companyLogoLink: "/company_0.svg",
        companyName: "Centrum Handlowe Sp. z o.o.",
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 13, name: "Podgórze, Kraków, Województwo Małopolskie" }
        ],
        title: "Kasjer w Galerii Handlowej",
        dateTimePublishedUtc: "2025-04-26T14:00:00Z",
        dateTimeExpiringUtc: "2025-05-26T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    {
        id: 1118,
        companyId: 204,
        companyLogoLink: "/company_0.svg",
        companyName: "Dyskont Spożywczy",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Kasjer-Sprzedawca w Dyskontcie",
        dateTimePublishedUtc: "2025-04-27T15:00:00Z",
        dateTimeExpiringUtc: "2025-05-27T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    {
        id: 1119,
        companyId: 205,
        companyLogoLink: "/company_0.svg",
        companyName: "Stacja Paliw Orlen",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Kasjer na Stacji Paliw",
        dateTimePublishedUtc: "2025-04-28T16:00:00Z",
        dateTimeExpiringUtc: "2025-05-28T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    },
    {
        id: 11110,
        companyId: 206,
        companyLogoLink: "/company_0.svg",
        companyName: "Supermarket Familijny",
        locations: [
            { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
        ],
        title: "Kasjer z Obsługą Klienta",
        dateTimePublishedUtc: "2025-04-29T17:00:00Z",
        dateTimeExpiringUtc: "2025-05-29T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        isBookmarked: false
    }
];