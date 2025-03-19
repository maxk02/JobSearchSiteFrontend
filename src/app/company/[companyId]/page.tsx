import {Box, Container, Stack, Typography} from "@mui/material";
import React from "react";
import JobCard from "@/app/_ui/JobCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";


export default function CompanyPage() {
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography component="h1" variant="h3" color="primary" sx={{ fontWeight: 600 }}>Prominvest</Typography>
                <Typography sx={{ mt: 1, maxWidth: "800px", fontSize: "1.08em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis volutpat mauris, eget condimentum neque. Praesent turpis nibh, aliquam facilisis odio eu, dictum sodales nisl. Vivamus ac tristique justo, a finibus sapien. Vivamus facilisis aliquet nibh. Quisque dictum orci ac nisl suscipit tempus. Cras lobortis quam at mauris tempus, suscipit lacinia massa aliquam. Vestibulum eget tortor rutrum, pellentesque erat ac, auctor magna.
                </Typography>
            </Container>

            <Stack
                direction="column"
                sx={{
                    width: "100%",
                    backgroundColor: "#5D829F",
                    my: 3
                }}
            >
                <Container maxWidth="lg" sx={{ my: 3 }}>
                    <Typography component="h1" variant="h4" sx={{ fontWeight: 600, color: "white" }}>100 ofert pracy</Typography>
                </Container>
            </Stack>

            <Container maxWidth="lg" sx={{ my: 3 }}>
                <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}