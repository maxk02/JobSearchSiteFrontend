import { JobApplicationInUserProfileDto } from "@/lib/api/jobApplications/jobApplicationsApiDtos";

const jobApplications: JobApplicationInUserProfileDto[] = [
    {
        id: 1,
        companyId: 1,
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        companyLogoLink: "/company_0.svg",
        jobId: 1,
        jobTitle: "Programista Backend",
        dateTimePublishedUtc: "2025-04-20T10:24:00Z",
        salaryInfo: null,
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 8, name: "Mokotów, Warszawa, Województwo Mazowieckie" }
        ],
        employmentOptionIds: [1, 4, 5],
        contractTypeIds: [1, 4],
        dateTimeAppliedUtc: "2025-04-21T10:49:59Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    },
    {
        id: 2,
        companyId: 102,
        companyName: "Analityka Danych Polska",
        companyLogoLink: "/company_0.svg",
        jobId: 4,
        jobTitle: "Analityk Danych",
        dateTimePublishedUtc: "2025-04-18T09:00:00Z",
        salaryInfo: null,
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" }
        ],
        employmentOptionIds: [1, 3],
        contractTypeIds: [1],
        dateTimeAppliedUtc: "2025-04-19T12:30:00Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    },
    {
        id: 3,
        companyId: 105,
        companyName: "Studio Aplikacji Mobilnych",
        companyLogoLink: "/company_0.svg",
        jobId: 7,
        jobTitle: "Programista Aplikacji Mobilnych",
        dateTimePublishedUtc: "2025-04-19T12:00:00Z",
        salaryInfo: null,
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        employmentOptionIds: [2, 4],
        contractTypeIds: [3, 4],
        dateTimeAppliedUtc: "2025-04-20T15:45:00Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    },
    {
        id: 4,
        companyId: 106,
        companyName: "Laboratorium Badań AI",
        companyLogoLink: "/company_0.svg",
        jobId: 8,
        jobTitle: "Inżynier Uczenia Maszynowego",
        dateTimePublishedUtc: "2025-04-21T11:00:00Z",
        salaryInfo: null,
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 13, name: "Podgórze, Kraków, Województwo Małopolskie" }
        ],
        employmentOptionIds: [1, 5],
        contractTypeIds: [1],
        dateTimeAppliedUtc: "2025-04-22T09:15:00Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    },
    {
        id: 5,
        companyId: 108,
        companyName: "Platforma E-commerce",
        companyLogoLink: "/company_0.svg",
        jobId: 10,
        jobTitle: "Programista Full Stack",
        dateTimePublishedUtc: "2025-04-23T09:00:00Z",
        salaryInfo: null,
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" },
            { id: 9, name: "Wola, Warszawa, Województwo Mazowieckie" }
        ],
        employmentOptionIds: [1, 5],
        contractTypeIds: [1, 4],
        dateTimeAppliedUtc: "2025-04-24T11:20:00Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    },
    {
        id: 6,
        companyId: 116,
        companyName: "Sieć Sklepów Spożywczych",
        companyLogoLink: "/company_0.svg",
        jobId: 1111,
        jobTitle: "Kasjer-Sprzedawca",
        dateTimePublishedUtc: "2025-04-20T08:00:00Z",
        salaryInfo: null,
        locations: [
            { id: 11, name: "Kraków, Województwo Małopolskie" },
            { id: 12, name: "Nowa Huta, Kraków, Województwo Małopolskie" }
        ],
        employmentOptionIds: [2, 3],
        contractTypeIds: [3],
        dateTimeAppliedUtc: "2025-04-21T14:10:00Z",
        personalFiles: [
            {
                id: 1,
                name: "Cv",
                extension: "pdf",
                size: 4343584,
                dateTimeUploadedUtc: "2025-04-19T10:49:59Z"
            }
        ],
        statusId: 1
    }
];

export default jobApplications;