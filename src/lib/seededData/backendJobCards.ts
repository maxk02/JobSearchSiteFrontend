import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";

export const backendJobCards: JobCardDto[] = [
    {
        id: 1,
        companyId: 101,
        companyLogoLink: "/company_0.svg",
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        title: "Programista Backend Java",
        dateTimePublishedUtc: "2025-04-20T08:00:00Z",
        dateTimeExpiringUtc: "2025-05-20T23:59:59Z",
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
        title: "Senior Programista Backend",
        dateTimePublishedUtc: "2025-04-21T09:00:00Z",
        dateTimeExpiringUtc: "2025-05-21T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [1],
        isBookmarked: true
    },
    {
        id: 3,
        companyId: 107,
        companyLogoLink: "/company_0.svg",
        companyName: "Rozwiązania FinTech",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" },
            { id: 16, name: "Wrzeszcz, Gdańsk, Województwo Pomorskie" }
        ],
        title: "Programista Backend w Zespole FinTech",
        dateTimePublishedUtc: "2025-04-22T10:00:00Z",
        dateTimeExpiringUtc: "2025-05-22T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4, 5],
        contractTypeIds: [4],
        isBookmarked: false
    },
    {
        id: 4,
        companyId: 107,
        companyLogoLink: "/company_0.svg",
        companyName: "Rozwiązania FinTech",
        locations: [
            { id: 15, name: "Gdańsk, Województwo Pomorskie" }
        ],
        title: "Programista Backend Python",
        dateTimePublishedUtc: "2025-04-23T11:00:00Z",
        dateTimeExpiringUtc: "2025-05-23T23:59:59Z",
        salaryInfo: null,
        employmentOptionIds: [1, 4],
        contractTypeIds: [4],
        isBookmarked: false
    },
    // {
    //     id: 5,
    //     companyId: 108,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Platforma E-commerce",
    //     locations: [
    //         { id: 7, name: "Warszawa, Województwo Mazowieckie" },
    //         { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
    //     ],
    //     title: "Programista Backend Node.js",
    //     dateTimePublishedUtc: "2025-04-24T12:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-24T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4, 5],
    //     contractTypeIds: [1, 4],
    //     isBookmarked: false
    // },
    // {
    //     id: 6,
    //     companyId: 108,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Platforma E-commerce",
    //     locations: [
    //         { id: 11, name: "Kraków, Województwo Małopolskie" }
    //     ],
    //     title: "Mid Programista Backend",
    //     dateTimePublishedUtc: "2025-04-25T13:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-25T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4],
    //     contractTypeIds: [1, 4],
    //     isBookmarked: false
    // },
    // {
    //     id: 7,
    //     companyId: 301,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "Innowacje Technologiczne Sp. z o.o.",
    //     locations: [
    //         { id: 11, name: "Kraków, Województwo Małopolskie" },
    //         { id: 13, name: "Podgórze, Kraków, Województwo Małopolskie" }
    //     ],
    //     title: "Programista Backend w Zespole Cloud",
    //     dateTimePublishedUtc: "2025-04-26T14:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-26T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4, 5],
    //     contractTypeIds: [1, 4],
    //     isBookmarked: false
    // },
    // {
    //     id: 8,
    //     companyId: 302,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "CyberSoft Sp. z o.o.",
    //     locations: [
    //         { id: 3, name: "Piaseczno, Powiat piaseczyński, Województwo Mazowieckie" }
    //     ],
    //     title: "Programista Backend Go",
    //     dateTimePublishedUtc: "2025-04-27T15:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-27T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4],
    //     contractTypeIds: [4],
    //     isBookmarked: false
    // },
    // {
    //     id: 9,
    //     companyId: 303,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "DataTech Solutions",
    //     locations: [
    //         { id: 7, name: "Warszawa, Województwo Mazowieckie" },
    //         { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
    //     ],
    //     title: "Programista Backend w Projektach Big Data",
    //     dateTimePublishedUtc: "2025-04-28T16:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-28T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4, 5],
    //     contractTypeIds: [1, 4],
    //     isBookmarked: false
    // },
    // {
    //     id: 10,
    //     companyId: 304,
    //     companyLogoLink: "/company_0.svg",
    //     companyName: "HealthTech Innovations",
    //     locations: [
    //         { id: 19, name: "Puck, Powiat pucki, Województwo Pomorskie" }
    //     ],
    //     title: "Junior Programista Backend",
    //     dateTimePublishedUtc: "2025-04-29T17:00:00Z",
    //     dateTimeExpiringUtc: "2025-05-29T23:59:59Z",
    //     salaryInfo: null,
    //     employmentOptionIds: [1, 4],
    //     contractTypeIds: [1],
    //     isBookmarked: false
    // }
];