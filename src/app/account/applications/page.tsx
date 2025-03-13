import {Stack, Typography} from "@mui/material";
import ApplicationInUserProfileCard from "@/app/account/applications/_ui/ApplicationInUserProfileCard";

export default function AccountApplicationsPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Historia aplikacji</Typography>
            <Typography mt={0.5}>W tej zakładce sprawdzisz status swoich aplikacji.</Typography>

            <Stack gap={3} mt={2}>
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
            </Stack>

        </>
    );
}
