export interface JobFolderClaim {
    id: number;
    namePl: string;
    dependencies: number[];
}

export const jobFolderClaims: JobFolderClaim[] = [
    { id: 1, namePl: "Właściciel", dependencies: [2, 3, 4, 5, 6, 7] },
    { id: 2, namePl: "Administrator", dependencies: [] },
    { id: 3, namePl: "Dostęp do statystyk", dependencies: [] },
    { id: 4, namePl: "Edycja folderu i ogłoszeń", dependencies: [6] },
    { id: 5, namePl: "Dostęp do ogłoszeń", dependencies: [] },
    { id: 6, namePl: "Zarządzanie aplikacjami", dependencies: [] },
];

export const jobFolderClaimIds: number[] = jobFolderClaims.map(jfc => jfc.id);
