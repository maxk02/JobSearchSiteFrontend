import {create} from 'zustand';


interface FromFolder {
    source: "folder";
    id: number;
    name: string;
}

interface FromCompany {
    source: "company";
}

interface CreateEditJobState {
    createEditJobSource: FromCompany | FromFolder;
    setCreateEditJobSource: (info: FromCompany | FromFolder) => void;
    resetCreateEditJobSource: () => void;
}

export const useCreateEditJobStateStore = create<CreateEditJobState>()(
    (set) => ({
        createEditJobSource: { source: "company" },
        setCreateEditJobSource: (source) => set({ createEditJobSource: source }),
        resetCreateEditJobSource: () => set({ createEditJobSource: { source: "company" } }),
    })
);