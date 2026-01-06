"use client";

import {Stack, Typography} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import React, {useEffect, useState} from "react";
import {JobApplicationSortOption, JobManagementCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {useSearchParams} from "next/navigation";
import ManageJobCard from "./_ui/ManageJobCard";

const sortOptionListItems: { value: JobApplicationSortOption, label: string }[] = [
    { value: "dateAsc", label: "Najstarsze" },
    { value: "dateDesc", label: "Najnowsze" },
];

export default function CompanyJobsPage() {
    
    const [jobs, setJobs] = useState<JobManagementCardDto[]>([]);

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);
    const [updateTriggerCounter, setUpdateTriggerCounter] = useState<number>(0);

    useEffect(() => {

        const fetchJobs = async () => {
            const result =
                await getJobs(companyId, {pageSize: 15, pageNumber: parsedPageParam}); //todo

            if (result.success) {
                setJobs(result.data.jobs);
                setTotalPages(result.data.paginationResponse.totalPages);
            }
            else {
                console.log(`Error fetching jobs (${result.status})`);
            }
        }

        fetchJobs();

    }, [parsedPageParam, updateTriggerCounter]);

    const [sortOption, setSortOption] = useState<JobFolderJobsSortOption>("dateDesc");

    return (
        <>
            <Stack gap={3} mt={2} sx={{ maxWidth: "850px" }}>
                <MyDefaultSortingCard<JobApplicationSortOption>
                    pxValue="6px"
                    sortModes={sortOptionListItems}
                    defaultMode={sortOptionListItems[1]}
                    onSortChange={(newMode) => setSortOption(newMode)}
                    currentPage={parsedPageParam}
                    totalPages={totalPages}
                />
                {jobs.map((job) => (
                    <ManageJobCard
                        key={job.id}
                        item={job}
                        onUpdateTriggered={() => {setUpdateTriggerCounter(prev => prev + 1)}}
                    />
                ))}
                <MyDefaultPagination currentPage={parsedPageParam} totalPages={totalPages} />
            </Stack>

        </>
    );
}
