"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import CreateEditJobNavigationCard from "@/app/_ui/_create_edit_job/CreateEditJobNavigationCard";
import CreateJobCompanyNavigationCard from "@/app/company/[companyId]/create-job/_ui/CreateJobCompanyNavigationCard";
import CreateJobButtons from "@/app/company/[companyId]/create-job/_ui/CreateJobButtons";


export default function CreateJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <Grid container spacing={3.5}>
                <Grid size={{ xs: 12, md: 12, lg: 3.3 }}>
                    <Box display="flex" flexDirection="column" gap={2}
                         sx={{
                             position: "sticky", top: 20, zIndex: 1,
                             maxHeight: "calc(100vh - 40px)", flex: 1
                        }}
                    >
                        <CreateJobCompanyNavigationCard />
                        <CreateEditJobNavigationCard />
                        <CreateJobButtons />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 12, lg: 8.7 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
