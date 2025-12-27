import {Container} from "@mui/material";
import Grid from "@mui/material/Grid";
import CompanyManagementSideNavbar from "@/app/company/[companyId]/_ui/CompanyManagementSideNavbar";


export default function ManageCompanyLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
                    <CompanyManagementSideNavbar />
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
