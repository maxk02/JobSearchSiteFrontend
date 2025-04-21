import {create} from 'zustand';
import {CompanyManagementDetailedDto} from "@/lib/api/companies/companyDtos";


export interface CurrentCompanyState {
    currentCompanyState: CompanyManagementDetailedDto | undefined;
    setCurrentCompanyState: (company: CompanyManagementDetailedDto) => void;
    resetCurrentCompanyState: () => void;
}

export const useCurrentCompanyStore = create<CurrentCompanyState>((set) => ({
    currentCompanyState: undefined,
    setCurrentCompanyState: (company) =>
        set({
            currentCompanyState: company,
        }),
    resetCurrentCompanyState: () =>
        set({
            currentCompanyState: undefined,
        }),
}));