"use client";

import {
    Container,
    Typography,
    Box,
    Card,
    CardContent, ListItem, Avatar, ListItemButton, ListItemIcon, ListItemText, List
} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";

export default function LoginPage() {
    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Card sx={{ boxShadow: 1.5, p: 4 }}>
                <CardContent>
                    <Container maxWidth="xs">
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="h4" gutterBottom>
                                Zarządzanie firmami
                            </Typography>
                            <List sx={{ width: 350 }}>
                                <ListItem key="Firma1 Sp. z o o" disablePadding>
                                    <ListItemButton
                                        sx={{
                                            px: 1.5,
                                            py: 1.5,
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                        disableGutters
                                    >
                                        <Avatar variant="rounded" src="/company2.webp" sx={{ width: 50, height: 50 }} />
                                        <ListItemText sx={{ mx: 2, lineHeight: 1 }} primary="qopdfopSSS" />
                                        <ListItemIcon sx={{ minWidth: 24, lineHeight: 1 }}>
                                            <ArrowForward />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem key="Utworz nową firmę" disablePadding>
                                    <ListItemButton
                                        sx={{
                                            px: 1.5,
                                            py: 1.5,
                                            display: "flex",
                                            flexDirection: "row",
                                        }}
                                        disableGutters
                                    >
                                        <Avatar variant="rounded" sx={{ width: 50, height: 50 }}>
                                            +
                                        </Avatar>
                                        <ListItemText sx={{ mx: 2, lineHeight: 1 }} primary="Utworz nową firmę" />
                                        <ListItemIcon sx={{ minWidth: 24, lineHeight: 1 }}>
                                            <ArrowForward />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}
