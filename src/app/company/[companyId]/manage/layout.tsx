"use client";

import { useState } from "react";
import {
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    ListItemIcon,
    Avatar,
    Divider,
    Paper,
    Stack
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Settings, Business, Dashboard, FileOpen, Policy, ArrowForward} from "@mui/icons-material";

const navItems = [
    { text: "Pulpit", icon: <Dashboard /> },
    { text: "Profil firmy", icon: <Business /> },
    { text: "Zarządzanie uprawnieniami", icon: <Policy /> },
    { text: "Ustawienia konta firmowego", icon: <Settings /> },
];

export default function ManageCompanyLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const [selected, setSelected] = useState("Profil firmy");

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
                    <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
                        <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                            <Avatar variant="rounded" src="/company2.webp" sx={{ height: 64, width: 64 }} />
                            <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                                Firma1 Sp. z o o
                            </Typography>
                        </Stack>
                        <List>
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
                            <ListItem key="Zarządzaj ofertami pracy" disablePadding sx={{ mt: 0.5 }}>
                                <ListItemButton sx={{ px: 1.6, py: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <FileOpen />
                                    </ListItemIcon>
                                    <ListItemText primary="Zarządzaj ofertami pracy" />
                                    <ListItemIcon sx={{ minWidth: 24, pl: 3 }}>
                                        <ArrowForward />
                                    </ListItemIcon>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
