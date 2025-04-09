"use client";

import {Alert, Box, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";
import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";
import {UnitOfTime} from "@/lib/seededData/unitsOfTime";


const timeUnits: { value: UnitOfTime, label: string }[] = [
    { value: "Hour", label: "na godzinę (/h)" },
    { value: "Day", label: "dziennie (/dzień)" },
    { value: "Week", label: "tygodniowo (/tyg.)" },
    { value: "Month", label: "miesięcznie (/mies.)" },
    { value: "Semester", label: "za semestr (/semestr)" },
    { value: "Year", label: "na rok (/rok)" },
];

//isAfterTaxes
const wageUnits = [
    {value: true, label: "netto"},
    {value: false, label: "brutto"}
];


export default function CreateEditJobSalaryDataCard() {

    const {control, formState: {errors}} = useFormContext<CreateEditJobFormData>();

    return (
        <Paper sx={{mt: 2, py: 2, px: 1.5}}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Dane o wynagrodzeniu</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert
                    severity="info"
                    icon={<Info/>}
                    sx={{maxWidth: "500px"}}
                >
                    <Typography>
                        Ta sekcja jest opcjonalna.
                    </Typography>
                </Alert>

                <Box sx={{
                    mt: 1.5, display: "flex", flexDirection: "row", flexWrap: "wrap",
                    gap: 1.5, maxWidth: "500px"
                }}>
                    <Controller
                        name="salaryInfo.minWage"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                                label="Od"
                                error={!!errors.salaryInfo?.minWage}
                                helperText={errors.salaryInfo?.minWage?.message}
                            />
                        )}
                    />

                    <Controller
                        name="salaryInfo.maxWage"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                type="number"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                                label="Do"
                                error={!!errors.salaryInfo?.maxWage}
                                helperText={errors.salaryInfo?.maxWage?.message}
                            />
                        )}
                    />

                    <Controller
                        name="salaryInfo.wageTimeUnit"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Jednostka czasu"
                                value={field.value ?? ""}
                                onChange={(e) => field.onChange(e.target.value || undefined)}
                                sx={{ minWidth: "320px" }}
                                error={!!errors.salaryInfo?.wageTimeUnit}
                                helperText={errors.salaryInfo?.wageTimeUnit?.message}
                            >
                                {timeUnits.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />

                    <Controller
                        name="salaryInfo.isAfterTaxes"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                select
                                label="Wymiar wynagrodzenia"
                                value={field.value === undefined ? "" : field.value.toString()}
                                onChange={(e) => field.onChange(e.target.value === "true")}
                                sx={{ minWidth: "320px" }}
                                error={!!errors.salaryInfo?.isAfterTaxes}
                                helperText={errors.salaryInfo?.isAfterTaxes?.message}
                            >
                                {wageUnits.map((item) => (
                                    <MenuItem key={item.value.toString()} value={item.value.toString()}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                </Box>
            </Box>
        </Paper>
    );
}