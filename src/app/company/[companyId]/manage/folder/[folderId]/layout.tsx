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
    ArrowBack,
    ArrowUpward,
    CreateNewFolder,
    Description,
    Folder,
    Home,
    NoteAdd,
    Settings
} from "@mui/icons-material";

const navItems0 = [
    { text: "Powrót do zarządzania firmą", icon: <ArrowBack /> },
];

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
    { text: "Some folder 16", icon: <Folder /> },
    { text: "Some folder 17", icon: <Folder /> },
    { text: "Some folder 18", icon: <Folder /> },
];

const navItems2 = [
    { text: "Zarządzanie ogłoszeniami", icon: <Description /> },
    { text: "Ustawienia folderu", icon: <Settings /> },
];

const navItems3 = [
    { text: "Utwórz subfolder", icon: <CreateNewFolder /> },
    { text: "Dodaj ofertę pracy", icon: <NoteAdd /> },
];

const navItems4 = [
    { text: "Powrót do góry hierarchii", icon: <Home /> },
    { text: "Folder rodzicielski", icon: <ArrowUpward /> },
];

export default function ManageCompanyLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 4, lg: 3.7, xl: 3 }}>
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
                                                    pr: 3
                                                }}
                                    >
                                        Widoki
                                    </Typography>
                                    {navItems2.map((item) => (
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
                                    {navItems3.map((item) => (
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
                                    {navItems4.map((item) => (
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
                        <Card sx={{ px: 0, pt: 0, pb: 0, overflowY: "auto", flex: "1 1 auto" }}>
                            <CardContent sx={{ p: 0, '&:last-child': { paddingBottom: 0 } }}>
                                <List sx={{ p: 0 }}>
                                    {navItems.map((item) => (
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
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 8, lg: 8.3, xl: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}
