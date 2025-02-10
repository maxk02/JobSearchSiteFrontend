"use client";

import {Typography, Toolbar, Container} from "@mui/material";

export default function Footer() {
    return (
        <Toolbar sx={{
            backgroundColor: "white",
            boxShadow: "none",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "lightgray"}}
        >
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: 'space-between'}}
            >
                <Typography variant="body2">© {new Date().getFullYear()} znajdzprace.pl</Typography>
            </Container>
        </Toolbar>
    );
}
