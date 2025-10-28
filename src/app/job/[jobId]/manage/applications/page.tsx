"use client";

import {Box, Stack, Typography} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination"
import ApplicationInJobManagementCard from "./_ui/ApplicationInJobManagementCard";
import ApplicationFilteringCard from "./_ui/ApplicationFilteringCard";
import React, {useEffect, useState} from "react";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {useParams, useSearchParams} from "next/navigation";
import {getApplicationsForJob} from "@/lib/api/jobs/jobsApi";
import {GetApplicationsForJobRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {JobApplicationSortOption} from "@/lib/api/jobs/jobsApiDtos";



const sortOptionListItems: { value: JobApplicationSortOption, label: string }[] = [
    { value: "dateAsc", label: "Najstarsze" },
    { value: "dateDesc", label: "Najnowsze" },
];

export default function AccountApplicationsPage() {

    const [applications, setApplications] = useState<JobApplicationForManagersDto[]>([]);

    const params = useParams();
    const jobIdParam = params.jobId as string;
    const parsedJobIdParam = jobIdParam && !isNaN(parseInt(jobIdParam, 10)) ? parseInt(jobIdParam, 10) : 1;

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [sortOption, setSortOption] = useState<JobApplicationSortOption>("dateDesc");

    const [totalPages, setTotalPages] = useState<number>(1);

    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [includedTags, setIncludedTags] = useState<string[]>([]);
    const [excludedTags, setExcludedTags] = useState<string[]>([]);
    const [selectedStatusIds, setSelectedStatusIds] = useState<number[]>([]);

    const [updateTriggerCounter, setUpdateTriggerCounter] = useState<number>(0);

    const fetchApplications = async () => {

        const request: GetApplicationsForJobRequest = {
            paginationSpec: {pageSize: 15, pageNumber: parsedPageParam},
            sortOption: sortOption,
            query: searchQuery,
            statusIds: selectedStatusIds,
            includedTags: includedTags,
            excludedTags: excludedTags
        };

        const result =
            await getApplicationsForJob(parsedJobIdParam, request);

        if (result.success) {
            setApplications(result.data.jobApplications);
            setTotalPages(result.data.paginationResponse.totalPages);
        }
        else {
            console.log(`Error fetching job applications (${result.status})`);
        }
    }

    useEffect(() => {

        fetchApplications();

    }, [excludedTags, fetchApplications, includedTags, parsedJobIdParam, parsedPageParam, sortOption, updateTriggerCounter]);

    return (
        <>
            <Box sx={{ maxWidth: 1000 }}>
                <Typography variant="h4" fontWeight={600} color="primary">Aplikacje</Typography>
                <Typography variant="h5" fontWeight={600} mt={0.5}>Specjalista ds księgowości</Typography>

                <ApplicationFilteringCard
                    setSearchQuery={setSearchQuery}
                    includedTags={includedTags}
                    setIncludedTags={setIncludedTags}
                    excludedTags={excludedTags}
                    setExcludedTags={setExcludedTags}
                    selectedStatusIds={selectedStatusIds}
                    setSelectedStatusIds={setSelectedStatusIds}
                    onSearchButtonClick={fetchApplications}
                />

                <Stack gap={3} sx={{ mt: 3 }}>
                    <MyDefaultSortingCard<JobApplicationSortOption>
                        pxValue={2}
                        sortModes={sortOptionListItems}
                        defaultMode={sortOptionListItems[1]}
                        onSortChange={(newMode) => setSortOption(newMode)}
                        currentPage={parsedPageParam}
                        totalPages={totalPages}
                    />
                    {applications.map((application) => (
                        <ApplicationInJobManagementCard
                            key={application.id}
                            item={application}
                            onUpdateTriggered={() => setUpdateTriggerCounter(prev => prev + 1)}
                        />
                    ))}
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination totalPages={totalPages} currentPage={parsedPageParam} />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
