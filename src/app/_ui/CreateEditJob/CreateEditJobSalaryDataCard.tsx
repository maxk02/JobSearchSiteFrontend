"use client";

import {Alert, Box, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";
import React from "react";


const timeUnits = [
    "na godzinę (/godz.)",
    "miesięcznie (/mies.)",
    "za projekt (/projekt)",
];

const wageUnits = [
    "netto",
    "brutto",
];


export default function CreateEditJobSalaryDataCard() {
    return (
        <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Dane o wynagrodzeniu</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        Ta sekcja jest opcjonalna.
                    </Typography>
                </Alert>

                <Box sx={{ mt: 1.5, display: "flex", flexDirection: "row", flexWrap: "wrap",
                    gap: 1.5, maxWidth: "500px" }}>
                    <TextField label="Od" variant="outlined" />
                    <TextField label="Do" variant="outlined" />
                    <TextField
                        id="select-time-unit"
                        select
                        required
                        label="Wybierz jednostkę czasu"
                        defaultValue="na godzinę (/godz.)"
                        sx={{ minWidth: "320px" }}
                    >
                        {timeUnits.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="select-wage-type"
                        select
                        required
                        label="Wybierz wymiar wynagrodzenia"
                        defaultValue="netto"
                        sx={{ minWidth: "320px" }}
                    >
                        {wageUnits.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </Box>
        </Paper>
    );
}