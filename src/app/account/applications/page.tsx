"use client";

import {Chip, Stack, Typography} from "@mui/material";
import ApplicationInUserProfileCard from "@/app/account/applications/_ui/ApplicationInUserProfileCard";
import {useEffect, useState} from "react";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {useSearchParams} from "next/navigation";
import {getJobApplications} from "@/lib/api/userProfiles/userProfilesApi";
import {jobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";


export default function AccountApplicationsPage() {
    const [selectedApplicationStatusId, setSelectedApplicationStatusId] = useState<number | null>(null);
    const [applications, setApplications] = useState<JobApplicationInUserProfileDto[]>([]);

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);

    const [updateTriggerCounter, setUpdateTriggerCounter] = useState<number>(0);

    useEffect(() => {

        const fetchApplications = async () => {
            const result = await getJobApplications(selectedApplicationStatusId,
                {pageSize: 15, pageNumber: parsedPageParam});
            
            if (result.success) {
                setApplications(result.data.jobApplications);
                setTotalPages(result.data.paginationResponse.totalPages);
            }
            else {
                console.log(`Error fetching job applications (${result.status})`);
            }
        }
        
        fetchApplications();

    }, [parsedPageParam, selectedApplicationStatusId, updateTriggerCounter]);

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Historia aplikacji</Typography>
            <Typography mt={0.5}>W tej zakładce sprawdzisz status swoich aplikacji.</Typography>

            <Stack direction="row" spacing={1.3} sx={{ mt: 1.5, alignItems: "center" }}>
                <Typography variant="body1" color="text.secondary">
                    Filtruj:
                </Typography>
                {jobApplicationStatuses.map((status) => (
                    <Chip
                        variant="filled"
                        color={selectedApplicationStatusId === status.id ? "primary" : "default"}
                        key={status.id}
                        label={status.namePl}
                        onClick={() => setSelectedApplicationStatusId(status.id)}
                        sx={{
                            fontSize: "1.02em"
                        }}
                    />
                ))}
            </Stack>

            <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                {applications.map((application) => (
                    <ApplicationInUserProfileCard
                        key={application.id}
                        item={application}
                        onDeletionTriggered={() => setUpdateTriggerCounter(prev => prev + 1)}
                    />
                ))}
                <MyDefaultPagination currentPage={parsedPageParam} totalPages={totalPages} />
            </Stack>

        </>
    );
}
