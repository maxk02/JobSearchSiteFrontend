"use client";

import {AppBar, Toolbar, Typography, Button, Container} from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    return (
        <AppBar color="primary" position="static" sx={{ zIndex: 4 }}>
            <Toolbar>
                <Container
                    maxWidth="xl"
                    sx={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}
                >
                    <Link href="/" passHref>
                        <Button variant="text" sx={{ color: "white", textTransform: "none" }}>
                            <Typography variant="h5">
                                znajdzprace.pl
                            </Typography>
                        </Button>
                    </Link>
                    <Button color="inherit">Zaloguj się</Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
