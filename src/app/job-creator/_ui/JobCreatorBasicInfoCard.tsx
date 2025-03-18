"use client";

import {Box, Paper, TextField, Typography} from "@mui/material";
import React from "react";

export default function JobCreatorBasicInfoCard() {
    return(
        <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Tytuł i opis</Typography>
            <Box display="flex" flexDirection="column" gap={1.5} mt={1.5}>
                <TextField required label="Tytuł" variant="outlined" sx={{ maxWidth: "500px" }} />
                <TextField multiline rows={5} label="Krótki opis" variant="outlined" sx={{ maxWidth: "650px" }} />
            </Box>
        </Paper>
    );
}