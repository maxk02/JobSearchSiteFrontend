export interface JobApplicationStatus {
    id: number;
    namePl: string;
}

export const accountJobApplicationStatuses: JobApplicationStatus[] = [
    { id: 0, namePl: "Wszystkie" },
    { id: 1, namePl: "Zaaplikowano" },
    { id: 2, namePl: "W trakcie rozpatrzenia" },
    { id: 3, namePl: "Odrzucono" },
    { id: 4, namePl: "Wycofano" },
];

export const accountJobApplicationStatusIds: number[] = accountJobApplicationStatuses.map(jas => jas.id);

export const managementJobApplicationStatuses: JobApplicationStatus[] = [
    { id: 0, namePl: "Wszystkie" },
    { id: 1, namePl: "Zaaplikowano" },
    { id: 2, namePl: "W trakcie rozpatrzenia" },
    { id: 3, namePl: "Odrzucono" },
];

export const managementJobApplicationStatusIds: number[] = managementJobApplicationStatuses.map(jas => jas.id);
