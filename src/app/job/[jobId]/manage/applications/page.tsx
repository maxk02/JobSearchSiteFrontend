"use client";

import {Box, Stack, Typography} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination"
import ApplicationInJobManagementCard from "./_ui/ApplicationInJobManagementCard";
import ApplicationFilteringCard from "./_ui/ApplicationFilteringCard";
import React, {useEffect, useState} from "react";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {useParams, useSearchParams} from "next/navigation";
import {getApplications} from "@/lib/api/jobs/jobsApi";
import {GetApplicationsRequest} from "@/lib/api/jobs/jobsApiInterfaces";


export default function AccountApplicationsPage() {

    const [applications, setApplications] = useState<JobApplicationForManagersDto[]>([]);

    const params = useParams();
    const jobIdParam = params.jobId as string;
    const parsedJobIdParam = jobIdParam && !isNaN(parseInt(jobIdParam, 10)) ? parseInt(jobIdParam, 10) : 1;

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);

    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [includedTags, setIncludedTags] = useState<string[]>([]);
    const [excludedTags, setExcludedTags] = useState<string[]>([]);
    const [selectedStatusIds, setSelectedStatusIds] = useState<number[]>([]);

    const fetchApplications = async () => {

        const request: GetApplicationsRequest = {
            paginationSpec: {pageSize: 15, pageNumber: parsedPageParam},
            query: searchQuery,
            statusIds: selectedStatusIds,
            includedTags: includedTags,
            excludedTags: excludedTags
        };

        const result =
            await getApplications(parsedJobIdParam, request);

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

    }, [excludedTags, includedTags, parsedJobIdParam, parsedPageParam]);

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
                    <MyDefaultSortingCard pxValue={2} />
                    {applications.map((application) => (
                        <ApplicationInJobManagementCard key={application.id} />
                    ))}
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination totalPages={totalPages} currentPage={parsedPageParam} />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
