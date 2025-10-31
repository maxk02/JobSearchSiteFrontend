export interface LocationDto {
    id: number;
    countryId: number;
    name: string;
    subdivisions: string[];
    description: string | null;
    code: string | null;
}

export interface StringLocationDto {
    id: number;
    name: string;
}