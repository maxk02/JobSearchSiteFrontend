import JobCard from "@/app/_ui/JobCard";
import {Box, Typography} from "@mui/material";

export default function AccountPage() {
    return (
        <Box width="95%">
            <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

            <Box display="flex" flexDirection="column" gap={4} mt={2}>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </Box>
        </Box>
    );
}
