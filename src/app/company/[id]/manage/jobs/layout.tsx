"use client";

import {
    Container,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Box, Avatar, Typography
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
    Add,
    Description,
    Edit, Folder,
    KeyboardReturn, Policy
} from "@mui/icons-material";

const navItems = [
    { text: "Some folder 1", icon: <Folder /> },
    { text: "Some folder 2", icon: <Folder /> },
    { text: "Some folder 3", icon: <Folder /> },
    { text: "Some folder 4", icon: <Folder /> },
    { text: "Some folder 5", icon: <Folder /> },
    { text: "Some folder 6", icon: <Folder /> },
    { text: "Some folder 7", icon: <Folder /> },
    { text: "Some folder 8", icon: <Folder /> },
    { text: "Some folder 9", icon: <Folder /> },
    { text: "Some folder 10", icon: <Folder /> },
    { text: "Some folder 11", icon: <Folder /> },
    { text: "Some folder 12", icon: <Folder /> },
    { text: "Some folder 13", icon: <Folder /> },
    { text: "Some folder 14", icon: <Folder /> },
    { text: "Some folder 15", icon: <Folder /> },
];

const navItems2 = [
    { text: "Zarządzanie ogłoszeniami", icon: <Description /> },
    { text: "Zarządzanie uprawnieniami", icon: <Policy /> },
    { text: "Edycja danych folderu", icon: <Edit /> },
    { text: "Utwórz subfolder", icon: <Add /> },
];

export default function ManageCompanyLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
                    <Box display="flex" flexDirection="column" gap={2} sx={{ position: "sticky", top: 20, zIndex: 1, maxHeight: "87.5vh", flex: 1 }}>
                        <Card sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
                            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                                <List sx={{ p: 0 }}>
                                    <Box sx={{
                                        mt: 1,
                                        mb: 0.5,
                                        display: "flex",
                                        flexDirection: "row",
                                        // alignItems: "center"
                                    }}
                                    >
                                        <ListItem sx={{ pl: 1.5, pr: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                                            <Avatar variant="rounded" src="/company2.webp" sx={{ height: 40, width: 40 }} />
                                        </ListItem>
                                        <ListItem sx={{ pl: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                                            <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                                        sx={{ flex: "none" }}
                                            >
                                                Firma1 Sp. z o o
                                            </Typography>
                                        </ListItem>
                                    </Box>
                                    {navItems2.map((item) => (
                                        <ListItem key={item.text} disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    pl: 1.5,
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
                                </List>
                            </CardContent>
                        </Card>
                        <Card sx={{ px: 0, pt: 0, pb: 0, overflowY: "auto", flex: "1 1 auto" }}>
                            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                                <List sx={{ p: 0 }}>
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            sx={{
                                                pl: 1.5,
                                                py: 1.5,
                                                pr: 3
                                            }}
                                        >
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <KeyboardReturn />
                                            </ListItemIcon>
                                            <ListItemText primary="Folder rodzicielski" />

                                        </ListItemButton>
                                    </ListItem>
                                    {navItems.map((item) => (
                                        <ListItem key={item.text} disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    pl: 1.5,
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
                                </List>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
