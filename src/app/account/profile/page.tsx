"use client";

import {Avatar, Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import ProfileAvatarUploadArea from "@/app/account/profile/_ui/ProfileAvatarUploadArea";

export default function AccountSettingsPage() {
    const [, setUploadedFiles] = useState<File[]>([]);

    const handleFileUpload = (files: File[]) => {
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Mój profil</Typography>
            <Typography mt={1}>Możesz zmienić tutaj ...</Typography>


            <Card sx={{ mt: 2.5 }}>
                <CardContent sx={{ px: 2.5, pt: 0.5, '&:last-child': { pb: 0 } }}>
                    <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Zdjęcie profilowe</Typography>
                    <Box display="flex" flexDirection="row" justifyContent="flex-start"
                         alignContent="center" flexWrap="wrap" gap={2}>
                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={1.3}
                             sx={{
                                 width: 270,
                                 height: 250,
                                 mt: 1,
                                 border: "2px dashed gray",
                                 borderRadius: 2,
                                 backgroundColor: "#fafafa",
                                 transition: "background-color 0.3s"
                             }}
                        >
                            <Avatar src="/avatar.jpg" sx={{ width: 128, height: 128, m: 0 }} />
                            <Typography textAlign="center">Obecne zdjęcie</Typography>
                        </Box>
                        <Box sx={{ width: 270, height: 250, mt: 1, ml: 2 }}>
                            <ProfileAvatarUploadArea onFileUpload={handleFileUpload} />
                        </Box>
                    </Box>
                    <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Podstawowe dane</Typography>
                    <Box display="flex" flexDirection="column" gap={1.5} mt={1} mb={2} width={350}>
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
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
