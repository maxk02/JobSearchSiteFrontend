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
import ApplicationTagSearchDialog from "@/app/job/[jobId]/manage/applications/_ui/ApplicationTagSearchDialog";


const mockTags = [
    {id: 1, title: "1 etap"},
    {id: 2, title: "2 etap"},
    {id: 3, title: "Do przeglądu 7 lipca"},
];


export default function AccountApplicationsPage() {

    const [selectedApplicationStatusId, setSelectedApplicationStatusId] = useState<number | null>(null);
    const [applications, setApplications] = useState<JobApplicationForManagersDto[]>([]);

    const params = useParams();
    const jobIdParam = params.jobId as string;
    const parsedJobIdParam = jobIdParam && !isNaN(parseInt(jobIdParam, 10)) ? parseInt(jobIdParam, 10) : 1;

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);

    const [includeTagSearchDialogOpen, setIncludeTagSearchDialogOpen] = useState(false);
    const [excludeTagSearchDialogOpen, setExcludeTagSearchDialogOpen] = useState(false);

    const [includedTags, setIncludedTags] = useState<string[]>([]);
    const [excludedTags, setExcludedTags] = useState<string[]>([]);

    useEffect(() => {

        const fetchApplications = async () => {

            const request: GetApplicationsRequest = {
                paginationSpec: {pageSize: 15, pageNumber: parsedPageParam},
                query: "",
                statusId: selectedApplicationStatusId,
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

        fetchApplications();

    }, [excludedTags, includedTags, parsedJobIdParam, parsedPageParam, selectedApplicationStatusId]);

    const handleCloseDialogs = () => {
        setIncludeTagSearchDialogOpen(false);
        setExcludeTagSearchDialogOpen(false);
    };

    const handleTagSearchDialogSubmit = (mode: "include" | "exclude", tag: string) => {
        switch (mode) {
            case "include":
                setIncludedTags(prev => [...prev, tag]);
                break;
            case "exclude":
                setExcludedTags(prev => [...prev, tag]);
                break;
        }
    };

    return (
        <>
            <Box sx={{ maxWidth: 1000 }}>
                <Typography variant="h4" fontWeight={600} mt={0.5} color="primary">Aplikacje</Typography>
                <Typography variant="h6" fontWeight={600}>Specjalista ds księgowości</Typography>

                <ApplicationFilteringCard />

                <Stack gap={3} sx={{ mt: 3 }}>
                    <MyDefaultSortingCard pxValue={2} />
                    <ApplicationInJobManagementCard />
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination totalPages={totalPages} currentPage={parsedPageParam} />
                    </Stack>
                </Stack>
            </Box>

            <ApplicationTagSearchDialog
                title="Wyszukiwanie tagów do uwzględnienia"
                open={includeTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagSearchDialogSubmit("include", tag)}
                data={mockTags}
            />
            <ApplicationTagSearchDialog
                title="Wyszukiwanie tagów do uwzględnienia"
                open={excludeTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagSearchDialogSubmit("exclude", tag)}
                data={mockTags}
            />
        </>
    );
}
