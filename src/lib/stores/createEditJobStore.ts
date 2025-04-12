import { create } from 'zustand';

export interface StoreFolder {
    id: number;
    name: string | null;
}

export interface StoreCompany {
    id: number;
    name: string;
    logoLink: string | null;
}

export interface CreateEditJobState {
    source: "company" | "folder";
    company: StoreCompany | undefined;
    folder: StoreFolder | undefined;
    setCreateEditJobCompanyState: (company: StoreCompany) => void;
    setCreateEditJobState: (source: "company" | "folder", folder?: StoreFolder) => void;
    resetCreateEditJobState: () => void;
}

export const useCreateEditJobStateStore = create<CreateEditJobState>((set) => ({
    source: "company",
    company: undefined,
    folder: undefined,
    setCreateEditJobCompanyState: (company) =>
        set({
            company: company,
        }),
    setCreateEditJobState: (source, folder) =>
        set({
            source,
            folder: folder
        }),
    resetCreateEditJobState: () =>
        set({
            source: "company",
            folder: undefined,
        }),
}));