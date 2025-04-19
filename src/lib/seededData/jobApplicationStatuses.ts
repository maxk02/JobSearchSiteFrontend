export interface JobApplicationStatus {
    id: number;
    namePl: string;
}

export const jobApplicationStatuses: JobApplicationStatus[] = [
    { id: 0, namePl: "Wszystkie" },
    { id: 1, namePl: "Zaaplikowano" },
    { id: 2, namePl: "Przejrzano" },
    { id: 3, namePl: "Odrzucono" },
];

export const jobApplicationStatusIds: number[] = jobApplicationStatuses.map(jas => jas.id);
