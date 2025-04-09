import {create} from 'zustand';


interface CreateEditJobCreationInfo {
    source: "company" | "folder";
    companyId: number;
    companyName: string;
    companyLogoLink: string | null;
    folderId: number;
    folderName: string;
    countryId: number;
}

interface CreateEditJobState {
    info: CreateEditJobCreationInfo | null;
    setState: (info: CreateEditJobCreationInfo) => void;
    clearState: () => void;
}

export const useCreateEditJobStateStore = create<CreateEditJobState>()(
    (set) => ({
        navigation: null,
        info: null,
        setState: (info) => set({ info: info }),
        clearState: () => set({ info: null }),
    })
);