import {create} from 'zustand';
import {CompanyManagementDetailedDto} from "@/lib/api/companies/companiesApiDtos";
import { getCompanyManagementNavbarDto } from '../api/companies/companiesApi';


export interface CurrentCompanyState {
    currentCompany: CompanyManagementDetailedDto | null;
    isLoading: boolean;
    setCurrentCompany: (company: CompanyManagementDetailedDto) => void;
    resetCurrentCompany: () => void;
    fetchCurrentCompany: (id: number) => Promise<void>;
}

export const useCurrentCompanyStore = create<CurrentCompanyState>((set, get) => ({
    currentCompany: null,
    isLoading: true,
    setCurrentCompany: (company) =>
        set({
            currentCompany: company,
        }),
    resetCurrentCompany: () =>
        set({
            currentCompany: null,
        }),
    fetchCurrentCompany: async (id: number) => {
        const result = await getCompanyManagementNavbarDto(id);
        if (result.success) {
            set({ currentCompany: result.data.company, isLoading: false });
            console.log(`Loaded company ${get().currentCompany?.id}`);
        }
        else {
            set({ currentCompany: null, isLoading: false });

            if (result.status !== 401)
                console.error(`Couldn't load company id=${id}, error: ${result.error.message}, ${result.error.details}`);
        }
    }
}));