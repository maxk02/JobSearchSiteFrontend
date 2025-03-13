"use client";

import {Container} from "@mui/material";

export default function ManageJobApplicationsLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    return (
        <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
            {children}
        </Container>
    );
}
