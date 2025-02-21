"use client";

import { useState } from "react";
import {
    Container,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    ListItemIcon,
    Avatar, Box, Divider
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Settings, Business, Dashboard, FileOpen, OpenInNew} from "@mui/icons-material";

const navItems = [
    { text: "Pulpit", icon: <Dashboard /> },
    { text: "Profil firmy", icon: <Business /> },
    { text: "Ustawienia konta firmowego", icon: <Settings /> },
];

export default function ManageCompanyLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const [selected, setSelected] = useState("Profil firmy");

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
                    <Card sx={{ px: 1, pt: 1.5, pb: 1, position: "sticky", top: 20, zIndex: 1 }}>
                        <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                            <List>
                                <Box sx={{
                                        my: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }}
                                >
                                    <ListItem sx={{ pb: 0, pt: 1.3, alignItems: "center" }}>
                                        <Avatar variant="rounded" src="/company2.webp" sx={{ height: 64, width: 64 }} />
                                    </ListItem>
                                    <ListItem sx={{ pt: 0.8, alignItems: "center" }}>
                                        <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                                            Firma1 Sp. z o o
                                        </Typography>
                                    </ListItem>
                                </Box>
                                {navItems.map((item) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton
                                            selected={selected === item.text}
                                            onClick={() => setSelected(item.text)}
                                            sx={{
                                                pl: 1.6,
                                                py: 1.5,
                                                pr: 3
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />

                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <Divider sx={{ mt: 2 }} />
                                <ListItem key="Oferty pracy" disablePadding sx={{ mt: 1 }}>
                                    <ListItemButton
                                        sx={{
                                            pl: 1.6,
                                            py: 1.5,
                                            pr: 3
                                        }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <FileOpen />
                                        </ListItemIcon>
                                        <ListItemText primary="Oferty pracy" />
                                        <ListItemIcon sx={{ minWidth: 24 }}>
                                            <OpenInNew />
                                        </ListItemIcon>

                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
