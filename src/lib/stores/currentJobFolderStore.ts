import { create } from 'zustand';
import {JobFolderDetailedDto} from "@/lib/api/jobFolders/jobFoldersApiDtos";


export interface CurrentJobFolderState {
    currentJobFolderState: JobFolderDetailedDto | undefined;
    setCurrentJobFolderState: (folder: JobFolderDetailedDto) => void;
    resetCurrentJobFolderState: () => void;
}

export const useCurrentJobFolderStore = create<CurrentJobFolderState>((set) => ({
    currentJobFolderState: undefined,
    setCurrentJobFolderState: (folder) =>
        set({
            currentJobFolderState: folder,
        }),
    resetCurrentJobFolderState: () =>
        set({
            currentJobFolderState: undefined,
        }),
}));