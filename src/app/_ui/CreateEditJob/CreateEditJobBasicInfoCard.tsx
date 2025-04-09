"use client";

import {Box, FormControlLabel, FormGroup, MenuItem, Paper, Switch, TextField, Typography} from "@mui/material";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";
import {jobCategories} from "@/lib/seededData/jobCategories";


export default function CreateEditJobBasicInfoCard() {

    const { control, formState: { errors } } = useFormContext<CreateEditJobFormData>();

    return(
        <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Informacje podstawowe</Typography>
            <Box display="flex" flexDirection="column" gap={1.5} mt={1.5}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Tytuł"
                            required
                            error={!!errors.title}
                            helperText={errors.title?.message}
                            sx={{ width: "500px", maxWidth: "500px" }}
                        />
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            select
                            required
                            label="Kategoria"
                            // defaultValue={jobCategories[0].id}
                            sx={{ minWidth: "320px", maxWidth: "400px" }}
                        >
                            {jobCategories.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.namePl}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />
                <FormGroup>
                    <Controller
                        name="isPublic"
                        control={control}
                        render={({ field }) => (
                            <FormControlLabel
                                control={
                                    <Switch
                                        {...field}
                                        checked={field.value}
                                        onChange={(e) => field.onChange(e.target.checked)}
                                    />
                                }
                                label="Widoczność po utworzeniu"
                            />
                        )}
                    />
                </FormGroup>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            multiline
                            rows={5}
                            label="Krótki opis"
                            error={!!errors.description}
                            helperText={errors.description?.message}
                            sx={{ width: "650px", maxWidth: "650px" }}
                        />
                    )}
                />
            </Box>
        </Paper>
    );
}