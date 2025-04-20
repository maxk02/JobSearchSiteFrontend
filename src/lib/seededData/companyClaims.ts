export interface CompanyClaim {
    id: number;
    namePl: string;
    dependencies: number[];
}

export const companyClaims: CompanyClaim[] = [
    { id: 1, namePl: "Właściciel", dependencies: [2, 3, 4] },
    { id: 2, namePl: "Administrator", dependencies: [] },
    { id: 3, namePl: "Dostęp do statystyk", dependencies: [] },
    { id: 4, namePl: "Edycja profilu", dependencies: [] },
];

export const companyClaimIds: number[] = companyClaims.map(c => c.id);