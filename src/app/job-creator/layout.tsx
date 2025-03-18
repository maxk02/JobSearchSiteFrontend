"use client";

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {ArrowBack, Description, Preview, Save, Settings} from "@mui/icons-material";
import React from "react";

const navItems0 = [
    { text: "Powrót do folderu", icon: <ArrowBack /> },
];

const navItems2 = [
    { text: "Tytuł i opis", icon: <Description /> },
    { text: "Przedział czasowy", icon: <Settings /> },
    { text: "Rodzaj zatrudnienia", icon: <Settings /> },
    { text: "Umowa zatrudnienia", icon: <Settings /> },
    { text: "Dane o wynagrodzeniu", icon: <Settings /> },
    { text: "Obowiązki", icon: <Settings /> },
    { text: "Wymogi", icon: <Settings /> },
    { text: "Mile widziane", icon: <Settings /> },
];

export default function CreateJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <Grid container spacing={3.5}>
                <Grid size={{ xs: 12, md: 12, lg: 3.3 }}>
                    <Box display="flex" flexDirection="column" gap={2}
                         sx={{
                             position: "sticky", top: 20, zIndex: 1,
                             maxHeight: "calc(100vh - 40px)", flex: 1
                        }}
                    >
                        <Card sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
                            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                                <Box sx={{
                                    mt: 1,
                                    mb: 0.5,
                                    display: "flex",
                                    flexDirection: "row",
                                    // alignItems: "center"
                                }}
                                >
                                    <ListItem sx={{ pl: 1.5, pr: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                                        <Avatar variant="rounded" src="/company2.webp" sx={{ height: 35, width: 35 }} />
                                    </ListItem>
                                    <ListItem sx={{ pl: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                                        <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                                    sx={{ flex: "none" }}
                                        >
                                            Firma1 Sp. z o o
                                        </Typography>
                                    </ListItem>
                                </Box>
                                <List sx={{ p: 0 }}>
                                    {navItems0.map((item) => (
                                        <ListItem key={item.text} disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    pl: 1.5,
                                                    py: 1.2,
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
                                </List>
                            </CardContent>
                        </Card>
                        <Card sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
                            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                                <List sx={{ p: 0 }}>
                                    <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                                sx={{
                                                    pl: 1.5,
                                                    pt: 1,
                                                    pb: 0.5,
                                                    pr: 1.5
                                                }}
                                    >
                                        Nawigacja
                                    </Typography>
                                    {navItems2.map((item) => (
                                        <ListItem key={item.text} disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    pl: 1.5,
                                                    py: 0.7,
                                                    pr: 1.5
                                                }}
                                            >
                                                {/*<ListItemIcon sx={{ minWidth: 36 }}>*/}
                                                {/*    {item.icon}*/}
                                                {/*</ListItemIcon>*/}
                                                <ListItemText primary={item.text} />

                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<Preview />}
                            sx={{
                                borderRadius: "50px",
                                alignSelf: "center",
                                width: "150px",
                            }}
                        >
                            Podgląd
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<Save />}
                            sx={{
                                borderRadius: "50px",
                                alignSelf: "center",
                                width: "150px",
                            }}
                        >
                            Zapisz
                        </Button>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 12, lg: 8.7 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
