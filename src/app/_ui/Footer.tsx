"use client";

import {Typography, Toolbar} from "@mui/material";

export default function Footer() {
    return (
        // <Box component="footer" sx={{ p: 2, textAlign: "left", bgcolor: "grey.200", mt: "auto" }}>
        //     <Typography variant="body2">© {new Date().getFullYear()} znajdzprace.pl</Typography>
        // </Box>
        <Toolbar>
            <Typography variant="body2">© {new Date().getFullYear()} znajdzprace.pl</Typography>
        </Toolbar>
    );
}
