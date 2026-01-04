"use client";

import {AppBar, Box, Container, Stack, Toolbar, Typography,} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import SiteLogo from "@/app/_ui/SiteLogo";
import MyAccountMenuButton from "@/app/_ui/Navbar/MyAccountMenuButton";
import ForEmployersMenuButton from "@/app/_ui/Navbar/ForEmployersMenuButton";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";

export default function Navbar() {
    const currentUser = useCurrentUserStore((state) => state.currentUser);

    const hasCompanies = currentUser?.companiesManaged && currentUser.companiesManaged.length > 0;

    return (
        <AppBar position="static" sx={{ zIndex: 4, backgroundColor: "white", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.08)" }}>
            <Toolbar>
                <Container
                    disableGutters
                    maxWidth="xl"
                    sx={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}
                >
                    <Link href="/" passHref>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <SiteLogo />
                        </Box>
                    </Link>
                    <Stack direction="row" gap={3}>
                        <MyAccountMenuButton />
                        {hasCompanies && <ForEmployersMenuButton />}
                        {!hasCompanies &&
                            <Box display="flex" flexDirection="column" alignItems="left" justifyContent="center">
                                <Typography fontWeight={450} lineHeight={1.2} fontSize={15} color="textSecondary">
                                    DLA PRACODAWCÓW
                                </Typography>
                                <Typography component={Link} href="/for-employers" lineHeight={1.2} color="primary" fontSize={15}
                                            sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                                >
                                    Załóż konto firmowe
                                </Typography>
                            </Box>
                        }
                    </Stack>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
