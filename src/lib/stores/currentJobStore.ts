import {create} from 'zustand';
import {JobManagementDto} from "@/lib/api/jobs/jobsApiDtos";


export interface CurrentJobState {
    currentJobState: JobManagementDto | undefined;
    setCurrentJobState: (job: JobManagementDto) => void;
    resetCurrentJobState: () => void;
}

export const useCurrentJobStore = create<CurrentJobState>((set) => ({
    currentJobState: undefined,
    setCurrentJobState: (job) =>
        set({
            currentJobState: job,
        }),
    resetCurrentJobState: () =>
        set({
            currentJobState: undefined,
        }),
}));