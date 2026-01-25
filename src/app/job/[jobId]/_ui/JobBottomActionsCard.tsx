"use client";

import {Button, Stack} from "@mui/material";
import {ArrowForward, Star, StarBorder, TaskAlt} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";
import ChooseApplicationFilesDialog from "@/app/_ui/ChooseApplicationFilesDialog";
import { useParams } from "next/navigation";
import { JobApplicationOnJobPageDto } from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import { getJobDataForCurrentAccount } from "@/lib/api/jobs/jobsApi";


interface JobBottomActionsCardProps {
    item: JobDetailedDto;
}

export default function JobBottomActionsCard({ item }: JobBottomActionsCardProps) {

    const params = useParams();
        
    const jobId = parseInt(params.jobId as string, 10);

    const [jobApplication, setJobApplication] = React.useState<JobApplicationOnJobPageDto | null>(null);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [updateDataTriggerCounter, setUpdateDataTriggerCounter] = useState<number>(0);

    useEffect(() => {
            const fetchData = async () => {
                const result = await getJobDataForCurrentAccount(jobId);
                if (result.success) {
                    setJobApplication(result.data.jobApplicationOnJobPageDto);
                    setIsBookmarked(result.data.isBookmarked);
                }
                else {
                    console.log("Job data for current profilel fetching error");
                }
            }
            
            fetchData();
        }, [jobId, updateDataTriggerCounter]);

    const toggleBookmark = async () => {
        const result = isBookmarked ? await deleteJobBookmark(item.id) : await addJobBookmark(item.id);

        if (result.success) {
            setIsBookmarked(!isBookmarked);
        } else {
            console.log(`Toggle bookmark failed (${result.status})`);
        }
    }

    return (
        <>
            <Stack direction="row" sx={{ width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={jobApplication !== null ? <ArrowForward /> : <TaskAlt />}
                    onClick={() => setDialogOpen(true)}
                    sx={{
                        px: 8,
                        borderRadius: "50px",
                        fontSize: '1.1rem',
                        "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                    }}
                >
                    {jobApplication !== null ? "Przejdź do aplikacji" : "Aplikuj teraz"}
                </Button>

                <Button
                    size="large"
                    startIcon={ isBookmarked ? <Star sx={{ color: "#202557" }} /> : <StarBorder /> }
                    sx={{ borderRadius: "50px" }}
                    onClick={toggleBookmark}
                >
                    { isBookmarked ? "Usuń z zapisanych" : "Zapisz" }
                </Button>
            </Stack>

            <ChooseApplicationFilesDialog
                title="Wybierz miescowość i pliki do aplikowania"
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                currentFileIds={jobApplication?.personalFileIds ?? []}
                jobId={jobId}
                applicationId={jobApplication?.id ?? null}
                currentLocation={jobApplication?.locationDto ?? null}
                triggerApplicationInfoUpdate={() => setUpdateDataTriggerCounter(x => x + 1)}
            />
        </>
    );
}