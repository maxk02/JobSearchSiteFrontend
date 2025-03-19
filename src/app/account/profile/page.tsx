"use client";

import {Avatar, Box, Button, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import ImageUploadArea from "@/app/_ui/ImageUploadArea";

export default function AccountSettingsPage() {
    const [, setUploadedFiles] = useState<File[]>([]);

    const handleFileUpload = (files: File[]) => {
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Mój profil</Typography>
            <Typography mt={1}>Możesz zmienić tutaj ...</Typography>

            <Paper sx={{ mt: 2, px: 2, pt: 1.5, pb: 2.5, maxWidth: "900px" }}>
                <Typography variant="h6" fontWeight={600} color="primary">Zdjęcie profilowe</Typography>
                <Stack direction="row" sx={{ mt: 1, gap: 2 }}>
                    <Paper
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1.3,
                            width: 270,
                            height: 250,
                            border: "2px dashed lightgray",
                        }}
                    >
                        <Avatar src="/avatar2.webp" sx={{ width: 128, height: 128, m: 0 }} />
                        <Typography textAlign="center">Obecne zdjęcie</Typography>
                    </Paper>
                    <Box sx={{ width: 270, height: 250 }}>
                        <ImageUploadArea onFileUpload={handleFileUpload} />
                    </Box>
                </Stack>
                <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Podstawowe dane</Typography>
                <Stack sx={{ gap: 1.5, mt: 1, width: 350 }}>
                    <TextField required label="Imię" variant="outlined" sx={{ width: "100%" }} />
                    <TextField required label="Nazwisko" variant="outlined" sx={{ width: "100%" }} />
                    <TextField label="Numer telefonu" variant="outlined" sx={{ width: "100%" }} />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: "50px", width: "125px" }}
                    >
                        Zaktualizuj
                    </Button>
                </Stack>
            </Paper>
        </>
    );
}
