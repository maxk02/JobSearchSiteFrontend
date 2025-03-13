import {Box, Breadcrumbs, Link, Typography} from "@mui/material";
import EditJobCard from "@/app/company/[companyId]/manage/folder/[folderId]/jobs/_ui/EditJobCard";

export default function ManageCompanyJobsPage() {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/public">
                    Udostępnione foldery
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/public"
                >
                    Some parent folder 1
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Some folder 1</Typography>
            </Breadcrumbs>

            <Typography variant="h4" fontWeight={600} color="primary" mt={1}>Some folder 1</Typography>

            <Typography variant="body1" mt={1}>Opis folderu</Typography>

            <Box display="flex" flexDirection="column" gap={3} mt={2}>
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
