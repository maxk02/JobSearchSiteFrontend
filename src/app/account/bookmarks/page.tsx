import {Stack, Typography} from "@mui/material";
import JobCard from "@/app/_ui/JobCard";

export default function AccountBookmarksPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zapisane</Typography>
            <Typography mt={0.5}>W tej zakładce znajdziesz oferty i wyszukiwania zapisane podczas korzystania z serwisu.</Typography>

            <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </Stack>
        </>
    );
}
