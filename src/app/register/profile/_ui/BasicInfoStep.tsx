import {Stack, TextField, Typography} from '@mui/material';
import {Controller, useFormContext} from 'react-hook-form';
import React from "react";
import {CreateUserProfileFormData} from "@/lib/schemas/createUserProfileSchema";

export default function BasicInfoStep() {
    const { control, formState: { errors } } = useFormContext<CreateUserProfileFormData>();

    return (
        <>
            <Typography variant="h4">Podstawowe dane</Typography>
            <Stack gap={2} sx={{ mt: 2, maxWidth: "500px" }}>
                <Typography>
                    Prosimy o wypełnienie danych profilu, które będą widoczne dla pracodawców do których złożyłeś aplikacje.
                </Typography>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Imię"
                            fullWidth
                            required
                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />
                    )}
                />
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Nazwisko"
                            fullWidth
                            required
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Numer telefonu"
                            fullWidth
                            slotProps={{
                                htmlInput: { maxLength: 12 }
                            }}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                    )}
                />
            </Stack>
        </>
    );
}