export interface CompanyClaim {
    id: number;
    namePl: string;
    dependencies: number[];
}

export const companyClaims: CompanyClaim[] = [
    { id: 1, namePl: "Właściciel", dependencies: [2, 3, 4] },
    { id: 2, namePl: "Administrator", dependencies: [7] },
    { id: 3, namePl: "Dostęp do statystyk", dependencies: [7] },
    { id: 4, namePl: "Edycja profilu", dependencies: [] },
    { id: 5, namePl: "Dostęp do rachunku", dependencies: [] },
    { id: 6, namePl: "Edycja ofert pracy", dependencies: [7] },
    { id: 7, namePl: "Dostęp do ofert pracy", dependencies: [] },
    { id: 8, namePl: "Zarządzanie aplikacjami", dependencies: [7] },
];

export const companyClaimIds: number[] = companyClaims.map(c => c.id);