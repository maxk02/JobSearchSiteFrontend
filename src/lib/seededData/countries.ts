export interface Country {
    id: number;
    code: string;
    namePL: string;
}

export const countries: Country[] = [
    { id: 1, code: "POL", namePL: "Polska" },
    { id: 2, code: "FRA", namePL: "Francja" },
    { id: 3, code: "DEU", namePL: "Niemcy" }
];

export const countryIds: number[] = countries.map(c => c.id);