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
    contextInfo: CreateEditJobCreationInfo | null;
    setState: (info: CreateEditJobCreationInfo) => void;
    clearState: () => void;
}

export const useCreateEditJobStateStore = create<CreateEditJobState>()(
    (set) => ({
        navigation: null,
        contextInfo: null,
        setState: (info) => set({ contextInfo: info }),
        clearState: () => set({ contextInfo: null }),
    })
);