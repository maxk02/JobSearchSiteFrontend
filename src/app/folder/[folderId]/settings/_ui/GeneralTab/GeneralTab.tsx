"use client";

import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import React from "react";


export default function GeneralTab() {
    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Typography variant="h6" fontWeight={600} color="primary">Edycja informacji</Typography>
            <Stack gap={1.5} mt={1}>
                <TextField required label="Nazwa" variant="outlined" sx={{ width: 400 }} />
                <TextField multiline rows={4} label="Opis" variant="outlined" sx={{ width: 400 }} />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    // component={Link}
                    sx={{ borderRadius: "50px", width: "125px" }}
                >
                    Zmień
                </Button>
            </Stack>
        </Box>
    );
}