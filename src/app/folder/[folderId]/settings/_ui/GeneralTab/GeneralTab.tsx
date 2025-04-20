"use client";

import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import React from "react";


export default function GeneralTab() {
    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Typography variant="h5" fontWeight={600} color="primary">Edycja informacji</Typography>
            <Stack gap={1.5} mt={1}>
                <TextField required label="Nazwa" variant="outlined" sx={{ width: 450 }} />
                <TextField multiline rows={4} label="Opis" variant="outlined" sx={{ width: 450 }} />
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
            <Typography variant="h5" fontWeight={600} mt={2} color="primary">Usunięcie folderu</Typography>
            <Typography mt={0.7} sx={{ width: "500px" }}>Usuwając folder, stracisz wszystkie dane w nim i zawartych folderach,
                m.in. ogłoszenia, aplikacje i uprawnienia użytkowników.</Typography>
            <Button
                variant="text"
                color="error"
                sx={{mt: 1.7, p: 0}}
                // onClick={handleAccountDeletion}
            >
                Usuń folder
            </Button>
        </Box>
    );
}