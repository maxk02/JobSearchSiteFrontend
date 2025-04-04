export interface JobContractType {
    id: number;
    countryId: number;
    namePl: string;
}

export const jobContractTypes: JobContractType[] = [
    { id: 1, countryId: 1, namePl: "Umowa o pracę" },
    { id: 2, countryId: 1, namePl: "Umowa o dzieło" },
    { id: 3, countryId: 1, namePl: "Umowa zlecenie" },
    { id: 4, countryId: 1, namePl: "Kontrakt B2B" },
    { id: 5, countryId: 1, namePl: "Umowa o pracę tymczasową" },
    { id: 6, countryId: 1, namePl: "Umowa agencyjna" },
    { id: 7, countryId: 1, namePl: "Umowa o staż/praktykę" },
    { id: 8, countryId: 1, namePl: "Umowa na zastępstwo" }
];