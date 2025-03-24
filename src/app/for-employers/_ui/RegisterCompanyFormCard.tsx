"use client";

import {Box, Paper, TextField} from "@mui/material";
import React from "react";

export default function RegisterCompanyFormCard() {
    return(
        <Paper sx={{ mt: 3, py: 2, px: 1.5, maxWidth: 700 }}>
            <Box display="flex" flexDirection="column" gap={1.5}>
                <TextField fullWidth required label="Nazwa" variant="outlined" />
                <TextField fullWidth multiline rows={6} label="Krótki opis" variant="outlined" />
                <TextField fullWidth required label="NIP" variant="outlined" />
            </Box>
        </Paper>
    );
}