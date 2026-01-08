import {create} from 'zustand';
import {JobManagementDto} from "@/lib/api/jobs/jobsApiDtos";
import { getJobManagementDto } from '../api/jobs/jobsApi';


export interface CurrentJobState {
    currentJob: JobManagementDto | null;
    isLoading: boolean;
    setCurrentJob: (job: JobManagementDto) => void;
    resetCurrentJob: () => void;
    fetchCurrentJob: (id: number) => Promise<void>;
}

export const useCurrentJobStore = create<CurrentJobState>((set, get) => ({
    currentJob: null,
    isLoading: true,
    setCurrentJob: (job) =>
        set({
            currentJob: job,
        }),
    resetCurrentJob: () =>
        set({
            currentJob: null,
            isLoading: true
        }),
    fetchCurrentJob: async (id: number) => {
        const result = await getJobManagementDto(id);
        if (result.success) {
            set({ currentJob: result.data.job, isLoading: false });
            console.log(`Loaded company ${get().currentJob?.id}`);
        }
        else {
            set({ currentJob: null, isLoading: false });

            if (result.status !== 401)
                console.error(`Couldn't load company id=${id}, error: ${result.error.message}, ${result.error.details}`);
        }
    }
}));