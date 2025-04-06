"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ManageJobViewsCard from "@/app/job/[jobId]/manage/_ui/ManageJobViewsCard";
import ManageJobCompanyNavigationCard from "@/app/job/[jobId]/manage/_ui/ManageJobCompanyNavigationCard";
import React from "react";
import CreateEditJobNavigationCard from "@/app/_ui/CreateEditJob/CreateEditJobNavigationCard";
import EditJobButtons from "@/app/job/[jobId]/manage/edit/_ui/EditJobButtons";
import {useParams, usePathname} from "next/navigation";


export default function ManageJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const { jobId } = useParams();

    const pathname = usePathname();

    const isActive = () => pathname === `/job/${jobId}/manage/edit`;

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
                        <ManageJobCompanyNavigationCard />
                        <ManageJobViewsCard />

                        {isActive() &&
                            <>
                                <CreateEditJobNavigationCard />
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
