export interface CompanyInfoDto {
    id: number;
    name: string;
    description: string | null;
    countryId: number;
    logoLink: string | null;
    nip: string;
}