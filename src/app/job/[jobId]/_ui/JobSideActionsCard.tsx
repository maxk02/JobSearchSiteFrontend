"use client";

import {Button, Paper, Stack} from "@mui/material";
import {ArrowForward, Delete, Edit, Star, StarBorder, TaskAlt, Undo} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";
import ChooseApplicationFilesDialog from "@/app/_ui/ChooseApplicationFilesDialog";
import { JobApplicationOnJobPageDto } from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import {useParams, useRouter} from "next/navigation";
import { getJobDataForCurrentAccount } from "@/lib/api/jobs/jobsApi";
import BasicConfirmationDialog from "@/app/_ui/BasicConfirmationDialog";
import LogInRequiredDialog from "@/app/_ui/LogInRequiredDialog";
import {UpdateJobApplicationStatusRequest} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";
import {updateJobApplicationStatus} from "@/lib/api/jobApplications/jobApplicationsApi";


export default function JobSideActionsCard() {

    const params = useParams();

    const router = useRouter();
    
    const jobId = parseInt(params.jobId as string, 10);

    const [logInRequiredDialogOpen, setLogInRequiredDialogOpen] = useState(false);

    const handleCloseDialogs = () => {
        setLogInRequiredDialogOpen(false);
    };

    const handleProceedWithLoggingIn = async () => {
        router.push(`/login`);
    };

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
                console.log("Job data for current profile fetching error");
            }
        }
        
        fetchData();
    }, [jobId, updateDataTriggerCounter]);

    const toggleBookmark = async () => {
        const result = isBookmarked ? await deleteJobBookmark(jobId) : await addJobBookmark(jobId);

        if (result.success) {
            setIsBookmarked(!isBookmarked);
        }
        else if (result.status === 401) {
            setLogInRequiredDialogOpen(true);
        }
        else {
            console.log(`Toggle bookmark failed (${result.status})`);
        }
    }

    return (
        <>
            <Paper sx={{ p: 2 }}>
                <Stack gap={2} sx={{ alignItems: "center" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={jobApplication !== null ? <Edit /> : <TaskAlt />}
                        onClick={() => setDialogOpen(true)}
                        sx={{
                            px: 2,
                            maxWidth: "90%",
                            borderRadius: "50px",
                            fontSize: '1.1rem',
                            "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 },
                            width: "100%"
                        }}
                    >
                        {jobApplication !== null ? "Edytuj aplikację" : "Aplikuj teraz"}
                    </Button>

                    {jobApplication !== null &&
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Undo />}
                            onClick={() => setDialogOpen(true)}
                            sx={{
                                px: 2,
                                maxWidth: "90%",
                                borderRadius: "50px",
                                fontSize: '1.1rem',
                                "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 },
                                width: "100%"
                            }}
                        >
                            Wycofaj aplikację
                        </Button>
                    }


                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <Button
                            size="large"
                            startIcon={ isBookmarked ? <Star sx={{ color: "#202557" }} /> : <StarBorder /> }
                            sx={{ borderRadius: "50px" }}
                            onClick={toggleBookmark}
                        >
                            { isBookmarked ? "Usuń z zapisanych" : "Zapisz" }
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
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

            <LogInRequiredDialog
                open={logInRequiredDialogOpen}
                onClose={handleCloseDialogs}
                onConfirm={handleProceedWithLoggingIn}
            />
        </>
    );
}