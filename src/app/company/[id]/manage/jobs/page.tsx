import {Box, Typography} from "@mui/material";
import EditJobCard from "@/app/company/[id]/manage/jobs/_ui/EditJobCard";

export default function ManageCompanyJobsPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zarządzanie ogłoszeniami</Typography>
            <Typography mt={0.5}>W tej zakładce...</Typography>


            <Box display="flex" flexDirection="column" gap={4} mt={2}>
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
            </Box>

        </>
    );
}
