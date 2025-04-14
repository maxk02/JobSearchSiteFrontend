"use client";

import {Alert, Avatar, Box, Button, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserProfileFormData, userProfileSchema} from "@/lib/schemas/userProfileSchema";
import {UpdateUserProfileRequestDto} from "@/lib/api/userProfiles/userProfilesApiInterfaces";
import {getUserProfile, updateUserProfile, uploadAvatar} from "@/lib/api/userProfiles/userProfilesApi";
import Image from "next/image";
import {Info} from "@mui/icons-material";
import FileUploadArea from "@/app/_ui/FileUploadArea";
import {FileRejection} from "react-dropzone";

export default function AccountProfilePage() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [avatarLink, setAvatarLink] = useState<string | null>(null);

    const {handleSubmit, control, reset, formState: {errors}} = useForm<UserProfileFormData>({
        resolver: zodResolver(userProfileSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
        },
        mode: 'onChange'
    });

    const onBasicDataSubmit = async (data: UserProfileFormData) => {

        const request: UpdateUserProfileRequestDto = {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone
        };

        const result = await updateUserProfile(request);

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

        const response = await uploadAvatar(formData);

        if (response.success) {
            setAvatarLink(response.data.link);
        }
        else {
            console.log(`Error uploading avatar: ${file.name} (${response.status})`);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUserProfile();
            if (result.success) {
                setAvatarLink(result.data.avatarLink);

                reset({
                    firstName: result.data.firstName,
                    lastName: result.data.lastName,
                    phone: result.data.phone,
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
            <Typography variant="h4" fontWeight={600} color="primary">Mój profil</Typography>
            <Typography mt={1}>Tutaj możesz zmienić podstawowe informacje, które będą widoczne w aplikacjach.</Typography>

            <Paper sx={{ mt: 2, px: 2, pt: 1.5, pb: 2.5, maxWidth: "900px" }}>
                <Typography variant="h6" fontWeight={600} color="primary">Zdjęcie profilowe</Typography>
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
                <Stack direction="row" sx={{ mt: 1.5, gap: 2 }}>
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
                        <Avatar sx={{ width: 128, height: 128, m: 0 }}>
                            <Image src={avatarLink ?? "/avatar2.webp"} width={128} height={128} alt="User's avatar" />
                        </Avatar>
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
                <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Podstawowe dane</Typography>
                <form onSubmit={handleSubmit(onBasicDataSubmit)}>
                    <Stack sx={{ gap: 1.5, mt: 1, width: 350 }}>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Imię"
                                    fullWidth
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />
                            )}
                        />
                        <Controller
                            name="lastName"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Nazwisko"
                                    fullWidth
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message}
                                />
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Numer telefonu"
                                    fullWidth
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
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
            </Paper>
        </>
    );
}
