import {Box, Container, Stack, Typography} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination"
import ApplicationInJobManagementCard from "./_ui/ApplicationInJobManagementCard";
import ApplicationFilteringCard from "./_ui/ApplicationFilteringCard";

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
                    <Stack direction="row">
                        <MyDefaultPagination totalPages={10} />
                    </Stack>
                </Box>
            </Container>
        </>
    );
}
