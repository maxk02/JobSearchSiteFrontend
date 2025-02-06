"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    znajdzprace.pl
                </Typography>
                <Button color="inherit">Zaloguj się</Button>
            </Toolbar>
        </AppBar>
    );
}
