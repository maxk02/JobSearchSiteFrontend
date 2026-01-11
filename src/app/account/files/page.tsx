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
import {Delete, Download, Info} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import FileUploadArea from "@/app/_ui/FileUploadArea";
import {FileRejection} from "react-dropzone";
import {deleteFile, getDownloadLink, uploadFile} from "@/lib/api/personalFiles/personalFilesApi";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import downloadFileFromCloud from "@/lib/api/downloadFileFromCloud";
import { getPersonalFiles } from "@/lib/api/userProfiles/userProfilesApi";
import { GetPersonalFilesRequest } from "@/lib/api/userProfiles/userProfilesApiInterfaces";


const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return formatter.format(date);
};

const formatRandomDate = (): string => {
    const start = new Date('2025-12-25T00:00:00');
    const end = new Date('2026-01-09T23:59:59');

    const randomTimestamp =
        start.getTime() + Math.random() * (end.getTime() - start.getTime());

    const randomDate = new Date(randomTimestamp);

    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    return formatter.format(randomDate);
};


export default function AccountFilesPage() {
    const [uploadedFiles, setUploadedFiles] = useState<PersonalFileInfoDto[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const fetchFiles = async () => {

        const request: GetPersonalFilesRequest = {
            page: 1,
            size: 15
        };

        const result = await getPersonalFiles(request);
        if (result.success) {
            setUploadedFiles(result.data.personalFileInfos);
        }
        else {
            console.log("User personal files fetching error");
        }
    }

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleFilesChange = async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        setErrorMessage(null);

        if (rejectedFiles.length > 0) {
            const errorMessages = rejectedFiles.map((file: FileRejection) => {
                const reasons = file.errors.map((e) => {
                    if (e.code === "file-too-large") {
                        return `Nie można dodać pliku \"${file.file.name}\": plik jest za duży (max 10MB).`;
                    }
                    if (e.code === "file-invalid-type") {
                        return `Nie można dodać pliku \"${file.file.name}\": niedozwolony format (tylko PDF).`;
                    }
                    if (e.code === "too-many-files") {
                        return `Nie można dodać pliku \"${file.file.name}\": nrzekroczono limit plików (max 15).`;
                    }
                    return `${file.file.name}: ${e.message}`;
                });
                return reasons.join(", ");
            });
            setErrorMessage(errorMessages.join("; "));
            return;
        }

        for (const file of acceptedFiles) {
            const formData = new FormData();
            formData.append("file", file);

            const response = await uploadFile(formData);

            if (response.success) {

                await fetchFiles();
            }
            else {
                console.log(`Error uploading file: ${file.name} (${response.status})`);
            }
        }
    };

    const handleFileDownload = async (id: number, fullName: string) => {
        const result = await getDownloadLink(id);

        if (result.success) {
            downloadFileFromCloud(result.data.link, fullName);
        }
        else {
            console.error("Failed to obtain link");
        }
    };

    const handleFileDelete = async (id: number) => {

        const result = await deleteFile(id);

        if (result.success) {
            setUploadedFiles((prevUploadedFiles) =>
                prevUploadedFiles.filter(f => f.id !== id));
        }
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Moje pliki</Typography>
            <Typography mt={0.5}>W tej zakładce możesz zarządzać plikami, z którymi będziesz aplikować na oferty.</Typography>

            <Paper sx={{ mt: 2, p: 2, maxWidth: "900px" }}>
                <Alert severity="info" icon={<Info />} sx={{ maxWidth: "500px" }}>
                    <Typography>
                        Dopuszczalny format plików: pdf
                    </Typography>
                    <Typography>
                        Maksymalny rozmiar pliku: 10MB
                    </Typography>
                    <Typography>
                        Maksymalnie możesz dodać: 15 plików
                    </Typography>
                </Alert>

                {errorMessage && (
                    <Alert severity="error" sx={{ mt: 2, maxWidth: "650px" }}>
                        <Typography>
                            {errorMessage}
                        </Typography>
                    </Alert>
                )}

                <Box sx={{ maxWidth: "800px", height: 280, mt: 2 }}>
                    <FileUploadArea
                        onFilesChange={handleFilesChange}
                        accept={{ "application/pdf": [".pdf"] }}
                        maxSize={10 * 1024 * 1024}
                        maxFiles={10}
                        dragMessage="Upuść pliki tutaj..."
                    />
                </Box>

                {uploadedFiles.length > 0 &&
                    <>
                        <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Dodane pliki</Typography>

                        <TableContainer component={Paper} sx={{ mt: 1.7, maxWidth: "800px" }}>
                            <Table sx={{ tableLayout: "auto" }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nazwa</TableCell>
                                        <TableCell>Rozmiar</TableCell>
                                        <TableCell>Data dodania</TableCell>
                                        <TableCell>Akcje</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {uploadedFiles.map((file: PersonalFileInfoDto) => (
                                        <TableRow key={file.id}>
                                            <TableCell>{file.name}.{file.extension}</TableCell>
                                            <TableCell>{(file.size / (1024 * 1024)).toFixed(2)}MB</TableCell>
                                            <TableCell>{formatRandomDate()}</TableCell>
                                            <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    startIcon={<Download />}
                                                    onClick={() => handleFileDownload(file.id, `${file.name}.${file.extension}`)}
                                                >
                                                    Pobierz
                                                </Button>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    sx={{ ml: 2.5 }}
                                                    startIcon={<Delete />}
                                                    onClick={() => handleFileDelete(file.id)}
                                                >
                                                    Usuń
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                }
            </Paper>

        </>
    );
}
