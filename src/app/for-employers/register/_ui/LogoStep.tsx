import { Alert, Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material';
import { DeleteForever, Info } from '@mui/icons-material';
import FileUploadArea from '@/app/_ui/FileUploadArea';
import { FileRejection } from 'react-dropzone';
import React, {useState} from "react";

interface LogoStepProps {
    setAvatarFile: (file: File | null) => void;
}

export default function LogoStep({ setAvatarFile }: LogoStepProps) {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleAvatarUpload = async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        setErrorMessage(null);

        if (rejectedFiles.length > 0) {
            const errorMessages = rejectedFiles.map((file: FileRejection) => {
                const reasons = file.errors.map((e) => {
                    if (e.code === "file-too-large") {
                        return `Nie można dodać pliku \"${file.file.name}\": plik jest za duży (max 5MB).`;
                    }
                    if (e.code === "file-invalid-type") {
                        return `Nie można dodać pliku \"${file.file.name}\": niedozwolony format.`;
                    }
                    if (e.code === "too-many-files") {
                        return `Nie można dodać pliku \"${file.file.name}\": nrzekroczono limit plików (max 1).`;
                    }
                    return `${file.file.name}: ${e.message}`;
                });
                return reasons.join(", ");
            });
            setErrorMessage(errorMessages.join("; "));
            return;
        }

        const file = acceptedFiles[0];

        setAvatarFile(file);
    };

    return (
        <>
            <Typography variant="h4">Logo</Typography>
            <Stack sx={{ gap: 2, mt: 2 }}>
                <Typography>
                    Tu możesz dodać logo firmy, które będzie widoczne na ofertach pracy i w innych miejscach.
                </Typography>

                <Alert severity="info" icon={<Info />} sx={{ mt: 0.7, maxWidth: "500px" }}>
                    <Typography>Dopuszczalne formaty pliku: jpg, png, gif, webp</Typography>
                    <Typography>Maksymalny rozmiar pliku: 5MB</Typography>
                </Alert>

                {errorMessage && (
                    <Alert severity="error" sx={{ mt: 2, maxWidth: "650px" }}>
                        <Typography>{errorMessage}</Typography>
                    </Alert>
                )}

                <Stack direction="row" sx={{ gap: 2 }}>
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
                        <Avatar variant="rounded" src="/company2.webp" sx={{ width: 128, height: 128, m: 0 }} />
                        <Typography textAlign="center">Obecne zdjęcie</Typography>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteForever />}
                            sx={{
                                padding: 0,
                                '&:hover': { backgroundColor: 'transparent' },
                                '&:active': { backgroundColor: 'transparent' },
                                '&:focus': { outline: 'none' },
                            }}
                        >
                            Usuń
                        </Button>
                    </Paper>
                    <Box sx={{ width: 270, height: 250 }}>
                        <FileUploadArea
                            onFilesChange={handleAvatarUpload}
                            accept={{
                                "image/jpeg": [".jpg", ".jpeg"],
                                "image/png": [".png"],
                                "image/gif": [".gif"],
                                "image/webp": [".webp"]
                            }}
                            maxSize={5 * 1024 * 1024}
                            maxFiles={1}
                            idleMessage="Kliknij lub przeciągnij zdjęcie do wgrania"
                            dragMessage="Upuść zdjęcie tutaj..."
                        />
                    </Box>
                </Stack>
            </Stack>
        </>
    );
}