import JobOverviewCard from "@/app/job/[id]/_ui/JobOverviewCard";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import JobDescriptionCard from "@/app/job/[id]/_ui/JobDescriptionCard";
import JobActionsCard from "@/app/job/[id]/_ui/JobActionsCard";
import SuggestedJobCard from "@/app/job/[id]/_ui/SuggestedJobCard";
import JobListCard from "@/app/job/[id]/_ui/JobListCard";
import {StarBorder, TaskAlt} from "@mui/icons-material";
import React from "react";


const items: string[] = [
    "wykształcenie wyższe kierunkowe",
    "wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe",
    "min. 1 rok doświadczenia komercyjnego na podobnym stanowisku",
    "zdolności do myślenia analitycznego",
];


export default function JobPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 12, lg: 8 }}>
                    <Stack gap={2}>
                        <JobOverviewCard />
                        <JobDescriptionCard />

                        <JobListCard header="Obowiązki" items={items} />
                        <JobListCard header="Wymogi" items={items} />
                        <JobListCard header="Mile widziane" items={items} />

                        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<TaskAlt />}
                                sx={{
                                    px: 6,
                                    borderRadius: "50px",
                                    fontSize: '1.1rem',
                                    "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                                }}
                            >
                                Aplikuj teraz
                            </Button>

                            <Button
                                size="large"
                                startIcon={<StarBorder />}
                                sx={{ }}
                            >
                                Zapisz
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                    <Stack sx={{ position: "sticky", top: 20, zIndex: 1 }}>
                        <JobActionsCard />
                        <Typography variant="h5" fontWeight={600} mt={2} color="primary">Podobne oferty</Typography>
                        <Stack gap={2} mt={1.5}>
                            <SuggestedJobCard />
                            <SuggestedJobCard />
                            <SuggestedJobCard />
                            <SuggestedJobCard />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}