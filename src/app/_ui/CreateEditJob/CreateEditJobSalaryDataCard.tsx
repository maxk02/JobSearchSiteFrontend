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
    {value: 1, label: "netto"},
    {value: 0, label: "brutto"}
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
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Od"
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />
                        )}
                    />

                    <Controller
                        name="salaryInfo.maxWage"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                label="Do"
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />
                        )}
                    />

                    <Controller
                        name="salaryInfo.wageTimeUnit"
                        control={control}
                        render={({field}) => (
                            <TextField
                                {...field}
                                select
                                required
                                label="Jednostka czasu"
                                sx={{minWidth: "320px"}}
                                error={!!errors.title}
                                helperText={errors.title?.message}
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
                        render={({field}) => (
                            <TextField
                                {...field}
                                select
                                required
                                label="Wymiar wynagrodzenia"
                                sx={{minWidth: "320px"}}
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            >
                                {wageUnits.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>
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