export interface Country {
    id: number;
    code: string;
    namePL: string;
}

export const countries: Country[] = [
    { id: 1, code: "PL", namePL: "Polska" },
    { id: 2, code: "FR", namePL: "Francja" },
    { id: 3, code: "DE", namePL: "Niemcy" }
];

export const countryIds: number[] = countries.map(c => c.id);