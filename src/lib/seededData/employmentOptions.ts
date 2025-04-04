export type EmploymentOptionType = "EmploymentTime" | "Mobility";

export interface EmploymentOption {
    id: number;
    type: EmploymentOptionType;
    namePl: string;
}

export const employmentOptions: EmploymentOption[] = [
    { id: 1, type: "EmploymentTime", namePl: "Pełny etat" },
    { id: 2, type: "EmploymentTime", namePl: "Część etatu" },
    { id: 3, type: "Mobility", namePl: "W biurze" },
    { id: 4, type: "Mobility", namePl: "Zdalnie" },
    { id: 5, type: "Mobility", namePl: "Hybrydowo" },
    { id: 6, type: "Mobility", namePl: "Z wyjazdami" },
];