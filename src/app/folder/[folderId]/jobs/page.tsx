import {Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import EditJobCard from "@/app/folder/[folderId]/jobs/_ui/EditJobCard";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";

export default function FolderJobsPage() {
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

            <Typography variant="h4" fontWeight={600} color="primary" mt={0.7}>Some folder 1</Typography>

            <Typography variant="body1" mt={0.7}>Opis folderu</Typography>

            <Stack gap={3} mt={2} sx={{ maxWidth: "850px" }}>
                <MyDefaultSortingCard pxValue="6px" />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <EditJobCard />
                <MyDefaultPagination totalPages={10} />
            </Stack>

        </>
    );
}
