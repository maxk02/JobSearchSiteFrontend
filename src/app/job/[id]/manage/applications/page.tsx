import {Box, Container, Stack, Typography} from "@mui/material";
import ApplicationInJobManagementCard from "@/app/job/[id]/manage/applications/_ui/ApplicationInJobManagementCard";
import ApplicationFilteringCard from "@/app/job/[id]/manage/applications/_ui/ApplicationFilteringCard";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination"

export default function AccountApplicationsPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Aplikacje</Typography>
            <Typography mt={0.5}>W tej zakładce sprawdzisz status aplikacji na to stanowisko.</Typography>

            <ApplicationFilteringCard />

            <Container sx={{ mt: 3 }}>
                <Box display="flex" flexDirection="column" gap={3}>
                    <MyDefaultSortingCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination />
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
