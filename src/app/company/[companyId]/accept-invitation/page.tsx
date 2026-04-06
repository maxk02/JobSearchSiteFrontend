"use client";

import {useRouter} from "next/navigation";
import {Container, Icon, Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {CheckCircle} from "@mui/icons-material";

export default function CompanyAcceptInvitationPage() {

    const router = useRouter();

    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Paper sx={{ width: "100%", px: 9, pt: 6, pb: 8 }}>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <Stack direction="column" spacing={1.5} sx={{ alignItems: "center" }}>

                        <Icon color="success" sx={{ mb: 1, p: 0, fontSize: 64 }}>
                            <CheckCircle sx={{ fontSize: 64 }} />
                        </Icon>

                        <Typography variant="h4" sx={{ textAlign: "center" }}>
                            Dołączono do firmy
                        </Typography>
                    </Stack>

                    <Typography variant="body1" sx={{ mt: 2.5 }}>
                        Od teraz możesz uzyskać uprawnienia do zarządzania kontem i ogłoszeniami pracy w firmie "Logistyka Trans-World".
                    </Typography>
                </Stack>
            </Paper>
        </Container>
    );

}
