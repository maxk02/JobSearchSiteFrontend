import {Box, Typography} from "@mui/material";
import JobCard from "@/app/_ui/JobCard";

export default function AccountBookmarksPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zapisane</Typography>
            <Typography mt={0.5}>W tej zakładce znajdziesz oferty i wyszukiwania zapisane podczas korzystania z serwisu.</Typography>


            <Box display="flex" flexDirection="column" gap={4} mt={2}>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </Box>

        </>
    );
}
