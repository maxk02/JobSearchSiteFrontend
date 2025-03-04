"use client";

import {Alert, AlertTitle, Avatar, Box, Button, Card, CardContent, Divider, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import ProfileAvatarUploadArea from "@/app/account/profile/_ui/ProfileAvatarUploadArea";
import {Info, Warning} from "@mui/icons-material";

export default function CreateJobPage() {
    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
            <Typography mt={1}>O</Typography>


            <Card sx={{ mt: 2.5 }}>
                <CardContent sx={{ py: 2, px: 1.5, '&:last-child': { pb: 2 } }}>
                    <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Podstawowe dane</Typography>
                    <Box display="flex" flexDirection="column" gap={1.5} mt={1.7} width={500}>

                        <Alert
                            severity="warning" // You can use "warning", "error", "success", or "info"
                            icon={<Warning />}
                        >
                            <AlertTitle marginY={0}>
                                System props are deprecated and will be removed in the next major release. Please use the `sx` prop instead.
                            </AlertTitle>
                        </Alert>


                        <TextField required label="Nazwa" variant="outlined" sx={{ width: "100%" }} />
                        <TextField multiline rows={5} label="Krótki opis" variant="outlined" sx={{ width: "100%" }} />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ borderRadius: "50px", width: "125px" }}
                        >
                            Zaktualizuj
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
