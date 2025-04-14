export interface JobApplicationStatus {
    id: number;
    namePl: string;
}

export const jobApplicationStatuses: JobApplicationStatus[] = [
    { id: 1, namePl: "Zaaplikowano" },
    { id: 2, namePl: "W trakcie rozpatrzenia" },
    { id: 3, namePl: "Odrzucona" },
    { id: 4, namePl: "Wycofana" },
];

export const jobCategoryIds: number[] = jobApplicationStatuses.map(jas => jas.id);