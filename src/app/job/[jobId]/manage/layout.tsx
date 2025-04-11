"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ManageJobViewsCard from "@/app/job/[jobId]/manage/_ui/ManageJobViewsCard";
import React from "react";
import CreateEditJobAnchorCard from "@/app/_ui/CreateEditJob/CreateEditJobAnchorCard";
import EditJobButtons from "@/app/job/[jobId]/manage/edit/_ui/EditJobButtons";
import {useParams, usePathname} from "next/navigation";
import CreateManageJobNavigationCard from "@/app/_ui/CreateEditJob/CreateManageJobNavigationCard";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import CreateManageJobFolderChosenCard from "@/app/_ui/CreateEditJob/CreateManageJobFolderChosenCard";


export default function ManageJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const { jobId } = useParams();

    const pathname = usePathname();

    const isActive = () => pathname === `/job/${jobId}/manage/edit`;

    const { createEditJobSource } = useCreateEditJobStateStore();

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
                        {createEditJobSource &&
                            <CreateManageJobNavigationCard
                                companyName={createEditJobSource.companyName}
                                companyLogoLink={createEditJobSource.companyLogoLink}
                                returnTo={createEditJobSource.source}
                                returnToId={{ "company": createEditJobSource.companyId, "folder": createEditJobSource.folderId }[createEditJobSource.source]}
                            />}
                        <ManageJobViewsCard />

                        {isActive() &&
                            <>
                                {createEditJobSource?.folderId && createEditJobSource.folderName &&
                                    <CreateManageJobFolderChosenCard
                                        folderId={createEditJobSource.folderId}
                                        folderName={createEditJobSource.folderName}
                                    />
                                }
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
