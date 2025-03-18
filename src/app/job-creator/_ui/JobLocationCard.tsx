"use client";

import {Box, MenuItem, Paper, TextField, Typography} from "@mui/material";
import React from "react";
import ReactCountryFlag from "react-country-flag";


const countries = [
    { code: "PL", label: "Polska" },
    { code: "FR", label: "Francja" },
    { code: "DE", label: "Niemcy" }
];


export default function JobLocationCard() {
    return(
        <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Lokalizacja</Typography>
            <Box display="flex" flexDirection="column" gap={1.5} mt={1.9} sx={{ maxWidth: "500px" }}>
                <TextField
                    id="select-country"
                    select
                    required
                    disabled
                    label="Kraj"
                    defaultValue="PL"
                    sx={{ minWidth: "320px", maxWidth: "400px" }}
                >
                    {countries.map((item, index) => (
                        <MenuItem key={index} value={item.code} sx={{ display: "flex", flexDirection: "row" }}>
                            <ReactCountryFlag countryCode={item.code} style={{ marginRight: 8 }} />
                            {item.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField required label="Miejscowość" variant="outlined" sx={{ maxWidth: "500px" }} />
            </Box>
        </Paper>
    );
}