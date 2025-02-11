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
    ListItemIcon, useTheme
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {AccountBox, Description, History, ExitToApp} from "@mui/icons-material";

const navItems = [
    { text: "Mój profil", icon: <AccountBox /> },
    { text: "Moje pliki", icon: <Description /> },
    { text: "Historia aplikacji", icon: <History /> },
    { text: "Wyloguj", icon: <ExitToApp /> },
];

export default function AccountLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const [selected, setSelected] = useState("Mój profil");

    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                    <Card>
                        <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                            <List>
                                <ListItem>
                                    <Typography variant="h6" fontWeight={800} gutterBottom marginBottom={0}>
                                        ZARZĄDZANIE KONTEM
                                    </Typography>
                                </ListItem>
                                {navItems.map((item) => (
                                    <ListItem key={item.text} disablePadding>
                                        <ListItemButton
                                            selected={selected === item.text}
                                            onClick={() => setSelected(item.text)}
                                            sx={{
                                                borderLeft: selected === item.text ?
                                                    `4px solid ${theme.palette.primary.main}` : "4px solid transparent"
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText primary={item.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                    <Card>
                        <CardContent sx={{ '&:last-child': { paddingBottom: 2 } }}>
                            {children}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
