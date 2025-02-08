"use client";

import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    znajdzprace.pl
                </Typography>
                <Button color="inherit">Zaloguj się</Button>
            </Toolbar>
        </AppBar>
    );
}
