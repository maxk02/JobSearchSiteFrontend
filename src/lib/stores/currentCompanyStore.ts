import { create } from 'zustand';
import {JobFolderDetailedDto} from "@/lib/api/jobFolders/jobFoldersApiDtos";


export interface CurrentCompanyState {
    currentCompanyState: JobFolderDetailedDto | undefined;
    setCurrentCompanyState: (folder: JobFolderDetailedDto) => void;
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