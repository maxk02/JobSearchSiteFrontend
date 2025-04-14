import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import AccountSideNavbar from "@/app/account/_ui/AccountSideNavbar";


export default async function AccountLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 12, lg: 3.5, xl: 3 }}>
                    <AccountSideNavbar />
                </Grid>

                <Grid size={{ xs: 12, md: 12, lg: 8.5, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
