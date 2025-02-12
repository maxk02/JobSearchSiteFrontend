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
    ListItemIcon, useTheme, Avatar
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {AccountBox, Description, History, Star, Settings} from "@mui/icons-material";

const navItems = [
    { text: "Mój profil", icon: <AccountBox /> },
    { text: "Zapisane", icon: <Star /> },
    { text: "Moje pliki", icon: <Description /> },
    { text: "Historia aplikacji", icon: <History /> },
    { text: "Ustawienia konta", icon: <Settings /> },
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
                                <ListItem sx={{ pb: 0 }}>
                                    <Avatar sx={{ height: 64, width: 64 }} />
                                </ListItem>
                                <ListItem sx={{ pt: 0.8 }}>
                                    <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                                        example@example.com
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
