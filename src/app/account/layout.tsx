import {Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {headers} from "next/headers";
import AccountSideNavbar from "@/app/account/_ui/AccountSideNavbar";


export default async function AccountLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const headersList = await headers();
    const pathname = headersList.get("x-current-path");
    if (pathname === null) throw new Error();

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
                    <AccountSideNavbar currentPath={pathname} />
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
