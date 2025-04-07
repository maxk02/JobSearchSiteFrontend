"use client";

import {Alert, Box, Checkbox, FormGroup, Paper, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";
import {employmentOptions} from "@/lib/seededData/employmentOptions";



export default function CreateEditJobEmploymentOptionCard() {

    const { control, formState: { errors } } = useFormContext<CreateEditJobFormData>();

    return (
        <Paper sx={{ mt: 2, pt: 2, pb: 1, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Rodzaj zatrudnienia</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        Możesz wybrać jedną lub kilka opcji lub pominąć tę sekcję.
                    </Typography>
                </Alert>

                <Box sx={{ mt: 0.4, maxWidth: "500px" }}>
                    <FormControl>
                        <FormGroup>
                            <Controller
                                name="employmentOptions"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        {employmentOptions.map((item) => (
                                            <FormControlLabel
                                                key={item.id}
                                                control={
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id) || false}
                                                        onChange={(e) => {
                                                            const newValue = e.target.checked
                                                                ? [...(field.value || []), item.id]
                                                                : (field.value || []).filter((id) => id !== item.id);
                                                            field.onChange(newValue);
                                                        }}
                                                    />
                                                }
                                                label={item.namePl}
                                            />
                                        ))}
                                    </>
                                )}
                            />
                        </FormGroup>
                    </FormControl>
                    {errors.employmentOptions && (
                        <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                            {errors.employmentOptions.message}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Paper>
    );
}