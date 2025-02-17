"use client";

import {
    Box,
    Button, Card,
    CardContent,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    Typography
} from "@mui/material";
import {Delete, Download, Edit} from "@mui/icons-material";
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

            <Card sx={{ mt: 2.5 }}>
                <CardContent sx={{ px: 2.5, pt: 2, '&:last-child': { pb: 0 } }}>

                    <Box sx={{ width: "100%", height: 280 }}>
                        <FileUploadArea onFileUpload={handleFileUpload} />
                    </Box>

                    <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Dodane pliki</Typography>

                    <TableContainer component={Paper} sx={{ mt: 2, mb: 2, maxWidth: "fit-content" }}>
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

                </CardContent>
            </Card>

        </>
    );
}
