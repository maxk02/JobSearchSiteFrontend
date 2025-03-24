"use client";

import {Container} from "@mui/material";


export default function ForEmployersLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="lg" sx={{ mt: 5, mb: 3 }}>
            {children}
        </Container>
    );
}
