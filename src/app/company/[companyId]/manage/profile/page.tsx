"use client";

import {Alert, Avatar, Box, Button, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import FileUploadArea from "@/app/_ui/FileUploadArea";
import {Info} from "@mui/icons-material";
import {FileRejection} from "react-dropzone";
import {getCompanyById, updateCompany, uploadAvatar} from "@/lib/api/companies/companiesApi";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CompanyFormData, companySchema} from "@/lib/schemas/companySchema";
import {UpdateCompanyRequestDto} from "@/lib/api/companies/companiesApiInterfaces";
import {useParams} from "next/navigation";

export default function CompanySettingsPage() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [logoLink, setLogoLink] = useState<string | null>(null);

    const params = useParams();
    const companyId = parseInt(params.companyId as string, 10);

    const {handleSubmit, control, reset, formState: {errors}} = useForm<CompanyFormData>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            name: '',
            nip: '',
            description: '',
        },
        mode: 'onChange'
    });

    const onSubmit = async (data: CompanyFormData) => {

        const request: UpdateCompanyRequestDto = {
            name: data.name,
            description: data.description,
        };

        const result = await updateCompany(companyId, request);

        if (result.success) {

        }
    };

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

        const formData = new FormData();
        formData.append("file", file);

        const response = await uploadAvatar(companyId, formData);

        if (response.success) {
            setLogoLink(response.data.link);
        }
        else {
            console.log(`Error uploading avatar: ${file.name} (${response.status})`);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getCompanyById(companyId);
            if (result.success) {
                setLogoLink(result.data.company.logoLink);

                reset({
                    name: result.data.company.name,
                    nip: result.data.company.nip,
                    description: result.data.company.description,
                });
            }
            else {
                console.log("Profile fetching error");
            }
        }

        fetchData();
    });

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Profil i ustawienia</Typography>
            <Typography mt={1}>Tutaj możesz zmienić informacje o firmie i zarządzać kontem.</Typography>

            <Paper sx={{ mt: 2, px: 2, pt: 1.5, pb: 2.5, maxWidth: "900px" }}>
                <Typography variant="h5" fontWeight={600} color="primary">Zdjęcie profilowe</Typography>
                <Alert severity="info" icon={<Info />} sx={{ mt: 0.7, maxWidth: "500px" }}>
                    <Typography>
                        Dopuszczalne formaty pliku: jpg, png, gif, webp
                    </Typography>
                    <Typography>
                        Maksymalny rozmiar pliku: 5MB
                    </Typography>
                </Alert>
                {errorMessage && (
                    <Alert severity="error" sx={{ mt: 2, maxWidth: "650px" }}>
                        <Typography>
                            {errorMessage}
                        </Typography>
                    </Alert>
                )}
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
                        <Avatar variant="rounded" src={logoLink ?? "/company2.webp"} sx={{ width: 128, height: 128, m: 0 }} />
                        <Typography textAlign="center">Obecne zdjęcie</Typography>
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
                <Typography variant="h5" fontWeight={600} color="primary" mt={2}>Podstawowe dane</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={{ gap: 1.5, mt: 1, width: 500 }}>
                        <Controller
                            name="name"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Nazwa"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                        <Controller
                            name="nip"
                            control={control}
                            disabled={true}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="NIP"
                                    fullWidth
                                    error={!!errors.nip}
                                    helperText={errors.nip?.message}
                                />
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    multiline
                                    rows={5}
                                    label="Krótki opis"
                                    fullWidth
                                    error={!!errors.description}
                                    helperText={errors.description?.message}
                                />
                            )}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            sx={{ borderRadius: "50px", width: "125px" }}
                        >
                            Zaktualizuj
                        </Button>
                    </Stack>
                </form>
                <Typography variant="h5" fontWeight={600} mt={2} color="primary">Usunięcie firmy</Typography>
                <Typography mt={0.7} sx={{ width: "500px" }}>Usuwając konto firmy, stracisz wszystkie powiązane z nim dane,
                    m.in. ogłoszenia, aplikacje i uprawnienia użytkowników.</Typography>
                <Button
                    variant="text"
                    color="error"
                    sx={{mt: 1.7, p: 0}}
                    // onClick={handleAccountDeletion}
                >
                    Usuń konto
                </Button>
            </Paper>
        </>
    );
}
