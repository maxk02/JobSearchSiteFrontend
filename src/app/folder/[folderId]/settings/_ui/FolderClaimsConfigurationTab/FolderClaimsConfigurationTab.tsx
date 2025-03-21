"use client";

import {Avatar, Box, Button, FormLabel, Paper, Stack, TextField, Typography} from "@mui/material";
import React from "react";
import {Refresh} from "@mui/icons-material";
import FolderClaimsConfigurationTable
    from "@/app/folder/[folderId]/settings/_ui/FolderClaimsConfigurationTab/FolderClaimsConfigurationTable";

export default function FolderClaimsConfigurationTab() {
    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                <FormLabel>Wybierz użytkownika:</FormLabel>
                <TextField label="Imię/nazwisko/email" variant="outlined" sx={{ ml: 1.3, width: 400 }} />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Refresh />}
                    // component={Link}
                    sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                >
                    Odśwież
                </Button>
            </Box>

            <Stack gap={0.8} sx={{ mt: 1.5 }}>
                <Typography variant="h6">
                    Wybrany użytkownik
                </Typography>
                <Paper sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    width: "fit-content",
                    border: "2px dashed lightgray",
                }}
                >
                    <Avatar variant="circular" src="/avatar2.webp" sx={{ height: 50, width: 50 }} />

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                    >
                        <Typography variant="body1" fontWeight={600} gutterBottom m={0}
                                    sx={{ flex: "none" }}
                        >
                            Jan Kowalski
                        </Typography>
                        <Typography variant="body1" gutterBottom m={0}
                                    sx={{ flex: "none" }}
                        >
                            jankowalski9226@gmail.com
                        </Typography>
                    </Box>

                </Paper>
            </Stack>

            <Box sx={{ mt: 2 }}>
                <FolderClaimsConfigurationTable />
            </Box>
        </Box>
    );
}