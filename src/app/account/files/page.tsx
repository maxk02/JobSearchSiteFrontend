"use client";

import {
    Alert,
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {Delete, Download, Edit, Info} from "@mui/icons-material";
import React, {useState} from "react";
import FileUploadArea from "@/ui/FileUploadArea";

export default function AccountFilesPage() {
    const [, setUploadedFiles] = useState<File[]>([]);

    const handleFileUpload = (files: File[]) => {
        setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Moje pliki</Typography>
            <Typography mt={0.5}>W tej zakładce znajdziesz...</Typography>

            <Paper sx={{ mt: 2, p: 2 }}>
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        Dopuszczalny format plików: pdf
                    </Typography>
                    <Typography>
                        Maksymalny dopuszczalny rozmiar plika: 10MB
                    </Typography>
                    <Typography>
                        Maksymalnie możesz dodać: 15 plików
                    </Typography>
                </Alert>

                <Box sx={{ width: "100%", height: 280, mt: 2 }}>
                    <FileUploadArea onFileUpload={handleFileUpload} />
                </Box>

                <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Dodane pliki</Typography>

                <TableContainer component={Paper} sx={{ mt: 1.7, maxWidth: "fit-content" }}>
                    <Table sx={{ tableLayout: "auto", maxWidth: "fit-content" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nazwa</TableCell>
                                <TableCell>Rozmiar</TableCell>
                                <TableCell>Data dodania</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>CV_Michał_Kowalski_2.pdf</TableCell>
                                <TableCell>2.03MB</TableCell>
                                <TableCell>12.12.2024 22:14</TableCell>
                                <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<Edit />}
                                    >
                                        Edytuj nazwę
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        sx={{ ml: 2.5 }}
                                        startIcon={<Download />}
                                    >
                                        Pobierz
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        sx={{ ml: 2.5 }}
                                        startIcon={<Delete />}
                                    >
                                        Usuń
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </>
    );
}
