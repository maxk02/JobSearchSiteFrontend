import {Stack, TextField, Typography} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CompanyFormData } from '@/lib/schemas/companySchema';
import React from "react";

export default function BasicInfoStep() {
    const { control, formState: { errors } } = useFormContext<CompanyFormData>();

    return (
        <>
            <Typography variant="h4">Podstawowe informacje</Typography>
            <Stack gap={2} sx={{ mt: 3.5 }}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Nazwa"
                            fullWidth
                            required
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />
                <Controller
                    name="nip"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Numer NIP"
                            fullWidth
                            required
                            slotProps={{
                                htmlInput: { maxLength: 10 }
                            }}
                            error={!!errors.nip}
                            helperText={errors.nip?.message}
                        />
                    )}
                />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Publiczny opis firmy"
                            fullWidth
                            multiline
                            rows={5}
                        />
                    )}
                />
            </Stack>
        </>
    );
}