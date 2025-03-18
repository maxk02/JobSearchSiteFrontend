import JobOverviewCard from "@/app/job/[id]/_ui/JobOverviewCard";
import {Container, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import JobDescriptionCard from "@/app/job/[id]/_ui/JobDescriptionCard";
import JobResponsibilitiesCard from "@/app/job/[id]/_ui/JobResponsibilitiesCard";
import JobRequirementsCard from "@/app/job/[id]/_ui/JobRequirementsCard";
import JobNiceToHavesCard from "@/app/job/[id]/_ui/JobNiceToHavesCard";
import JobActionsCard from "@/app/job/[id]/_ui/JobActionsCard";

export default function JobPage() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 12, lg: 8 }}>
                    <Stack gap={2}>
                        <JobOverviewCard />
                        <JobDescriptionCard />
                        <JobResponsibilitiesCard />
                        <JobRequirementsCard />
                        <JobNiceToHavesCard />
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4 }}>
                    <Stack gap={2}>
                        <JobActionsCard />
                        <Typography variant="h5" fontWeight={600} color="primary">Podobne oferty</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}