"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import JobFolderCompanyNavigationCard from "@/app/folder/[folderId]/_ui/JobFolderCompanyNavigationCard";
import JobFolderViewsCard from "@/app/folder/[folderId]/_ui/JobFolderViewsCard";
import JobFolderActionsCard from "./_ui/JobFolderActionsCard";
import JobFolderParentsNavigationCard from "./_ui/JobFolderParentsNavigationCard";
import JobFolderChildrenNavigationCard from "./_ui/JobFolderChildrenNavigationCard";
import React, {useEffect} from "react";
import {useCurrentJobFolderStore} from "@/lib/stores/currentJobFolderStore";
import {getJobFolder} from "@/lib/api/jobFolders/jobFoldersApi";
import {useParams} from "next/navigation";


export default function ManageFolderLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    
    const { currentJobFolderState, setCurrentJobFolderState } = useCurrentJobFolderStore();
    
    const { folderId } = useParams();
    const parsedFolderId = parseInt(folderId as string, 10);
    
    useEffect(() => {
        const fetchJobFolder = async () => {
            const result = await getJobFolder(parsedFolderId);
            
            if (result.success) {
                setCurrentJobFolderState(result.data.jobFolder);
            }
        };

        fetchJobFolder();

    }, [parsedFolderId, setCurrentJobFolderState]);
    
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
                        {currentJobFolderState?.companyId && currentJobFolderState.companyName &&
                            <JobFolderCompanyNavigationCard
                                companyId={currentJobFolderState.companyId}
                                companyName={currentJobFolderState.companyName}
                                companyLogoLink={currentJobFolderState.companyLogoLink}
                            />
                        }
                        <JobFolderViewsCard />
                        <JobFolderActionsCard claimIds={currentJobFolderState?.claimIds ?? []} />
                        <JobFolderParentsNavigationCard
                            rootFolderId={currentJobFolderState?.rootFolderId ?? null}
                            parentFolderId={currentJobFolderState?.parentFolderId ?? null}
                        />
                        <JobFolderChildrenNavigationCard folders={currentJobFolderState?.children ?? []} />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.5, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
