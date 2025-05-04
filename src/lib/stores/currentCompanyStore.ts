import {create} from 'zustand';
import {CompanyManagementDetailedDto} from "@/lib/api/companies/companiesApiDtos";


export interface CurrentCompanyState {
    currentCompanyState: CompanyManagementDetailedDto | undefined;
    setCurrentCompanyState: (company: CompanyManagementDetailedDto) => void;
    resetCurrentCompanyState: () => void;
}

export const useCurrentCompanyStore = create<CurrentCompanyState>((set) => ({
    currentCompanyState: {
        id: 1,
        name: 'Moja Firma',
        description: null,
        countryId: 1,
        logoLink: '/company2.webp',
        nip: '1111111111',
        claimIds: [1, 2, 3, 4, 5, 6]
    },
    setCurrentCompanyState: (company) =>
        set({
            currentCompanyState: company,
        }),
    resetCurrentCompanyState: () =>
        set({
            currentCompanyState: undefined,
        }),
}));