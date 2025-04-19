"use client";

import {Button, Container, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {StarBorder, TaskAlt} from "@mui/icons-material";
import React, {useState} from "react";
import {getJobById} from "@/lib/api/jobs/jobsApi";
import JobListCard from "@/app/job/[jobId]/_ui/JobListCard";
import JobCompanyDescriptionCard from "@/app/job/[jobId]/_ui/JobCompanyDescriptionCard";
import ChooseApplicationFilesDialog from "@/app/dummy-job/_ui/ChooseApplicationFilesDialog";


const items: string[] = [
    "wykształcenie wyższe kierunkowe",
    "wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe",
    "min. 1 rok doświadczenia komercyjnego na podobnym stanowisku",
    "zdolności do myślenia analitycznego",
];

const companyName: string = "Prominvest";
const companyDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis volutpat mauris, eget condimentum neque. Praesent turpis nibh, aliquam facilisis odio eu, dictum sodales nisl. Vivamus ac tristique justo, a finibus sapien. Vivamus facilisis aliquet nibh. Quisque dictum orci ac nisl suscipit tempus. Cras lobortis quam at mauris tempus, suscipit lacinia massa aliquam. Vestibulum eget tortor rutrum, pellentesque erat ac, auctor magna.";


export default function JobPage() {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 12, lg: 7.9 }}>
                    <Stack gap={2}>
                        <JobListCard header="Obowiązki" items={items} />
                        <JobListCard header="Wymogi" items={items} />
                        <JobListCard header="Mile widziane" items={items} />

                        <JobCompanyDescriptionCard companyName={companyName} description={companyDescription} />

                        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<TaskAlt />}
                                sx={{
                                    px: 8,
                                    borderRadius: "50px",
                                    fontSize: '1.1rem',
                                    "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                                }}
                                onClick={() => setDialogOpen(true)}
                            >
                                Aplikuj teraz
                            </Button>

                            <Button
                                size="large"
                                startIcon={<StarBorder />}
                                sx={{ borderRadius: "50px" }}
                            >
                                Zapisz
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4.1 }}>
                    <Stack sx={{ position: "sticky", top: 20, zIndex: 1 }}>
                        {/*<JobActionsCard />*/}
                        <Typography variant="h5" fontWeight={600} mt={2} color="primary">Podobne oferty</Typography>
                        <Stack gap={2} mt={1.5}>
                            {/*<SuggestedJobCard />*/}
                            {/*<SuggestedJobCard />*/}
                            {/*<SuggestedJobCard />*/}
                            {/*<SuggestedJobCard />*/}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <ChooseApplicationFilesDialog
                title="Wybierz pliki do aplikowania"
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                id={1}
                currentFileIds={[1, 2, 3]}
            />
        </Container>
    );
}