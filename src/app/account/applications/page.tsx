import {Box, Typography} from "@mui/material";
import ApplicationInUserProfileCard from "@/app/account/_ui/ApplicationInUserProfileCard";

export default function ApplicationsPage() {
    return (
        <Box width="100%">
            <Typography variant="h6" fontWeight="bold">APLIKACJE</Typography>

            <Box display="flex" flexDirection="column" gap={4} mt={2}>
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
            </Box>
        </Box>
    );
}
