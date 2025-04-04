import {Box, Container, Stack, Typography} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination"
import ApplicationInJobManagementCard from "./_ui/ApplicationInJobManagementCard";
import ApplicationFilteringCard from "./_ui/ApplicationFilteringCard";
import {Work} from "@mui/icons-material";

export default function AccountApplicationsPage() {
    return (
        <>
            <Box sx={{ maxWidth: 1000 }}>
                {/*<Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>*/}
                {/*    <Work color="primary" sx={{ fontSize: "1.85rem" }} />*/}
                {/*    <Typography variant="h5" fontWeight={600} color="primary">Specjalista ds księgowości</Typography>*/}
                {/*</Stack>*/}
                <Typography variant="h6" fontWeight={600} color="primary">Specjalista ds księgowości</Typography>
                <Typography variant="h4" fontWeight={600} mt={0.5} color="primary">Aplikacje</Typography>
                {/*<Typography mt={0.5}>W tej zakładce sprawdzisz status aplikacji na to stanowisko.</Typography>*/}

                <ApplicationFilteringCard />

                <Stack gap={3} sx={{ mt: 3 }}>
                    <MyDefaultSortingCard pxValue={2} />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <ApplicationInJobManagementCard />
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination totalPages={10} />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
