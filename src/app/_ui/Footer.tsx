"use client";

import {Typography, Toolbar, Container} from "@mui/material";

export default function Footer() {
    return (
        // <Box component="footer" sx={{ p: 2, textAlign: "left", bgcolor: "grey.200", mt: "auto" }}>
        //     <Typography variant="body2">© {new Date().getFullYear()} znajdzprace.pl</Typography>
        // </Box>
        <Toolbar>
            <Container
                maxWidth="xl"
                sx={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Typography variant="body2">© {new Date().getFullYear()} znajdzprace.pl</Typography>
            </Container>
        </Toolbar>
    );
}
