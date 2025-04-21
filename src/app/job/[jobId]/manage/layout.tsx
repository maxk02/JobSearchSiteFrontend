"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ManageJobViewsCard from "@/app/job/[jobId]/manage/_ui/ManageJobViewsCard";
import React, {useEffect} from "react";
import CreateEditJobAnchorCard from "@/app/_ui/CreateEditJob/CreateEditJobAnchorCard";
import EditJobButtons from "@/app/job/[jobId]/manage/edit/_ui/EditJobButtons";
import {useParams, usePathname} from "next/navigation";
import CreateManageJobNavigationCard from "@/app/_ui/CreateEditJob/CreateManageJobNavigationCard";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import {getJobManagementDto} from "@/lib/api/jobs/jobsApi";
import {useCurrentJobStore} from "@/lib/stores/currentJobStore";


export default function ManageJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const { jobId } = useParams();

    const jobIdParam = parseInt(jobId as string, 10);

    const pathname = usePathname();

    const isActive = () => pathname === `/job/${jobIdParam}/manage/edit`;

    const { currentJobState, setCurrentJobState } = useCurrentJobStore();
    const storeData = useCreateEditJobStateStore();

    useEffect(() => {

        const fetchManagementDto = async () => {
            const result = await getJobManagementDto(jobIdParam);

            if (result.success) {
                setCurrentJobState(result.data.job);
            }
        };

        fetchManagementDto();
    });

    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3.5, xl: 3 }}>
                    <Box display="flex" flexDirection="column" gap={2}
                         sx={{
                             position: "sticky", top: 20, zIndex: 1,
                             maxHeight: "calc(100vh - 40px)", flex: 1
                         }}
                    >
                        {currentJobState &&
                            <CreateManageJobNavigationCard
                                companyName={currentJobState.companyName}
                                companyLogoLink={currentJobState.companyLogoLink}
                                returnTo={storeData.source}
                                returnToId={storeData.source === "folder" ? currentJobState.folderId : currentJobState.companyId}
                            />
                        }
                        <ManageJobViewsCard />

                        {isActive() &&
                            <>
                                {/*<CreateManageJobFolderChosenCard />*/}
                                <CreateEditJobAnchorCard />
                                <EditJobButtons />
                            </>
                        }
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.5, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
