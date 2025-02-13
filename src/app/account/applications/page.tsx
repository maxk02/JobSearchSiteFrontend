import {Box, Typography} from "@mui/material";
import ApplicationInUserProfileCard from "@/app/account/_ui/ApplicationInUserProfileCard";

export default function ApplicationsPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Historia aplikacji</Typography>
            <Typography mt={0.5}>W tej zakładce sprawdzisz status swoich aplikacji.</Typography>


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

        </>
    );
}
