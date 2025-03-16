"use client";

import {
    Avatar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";

export default function ForEmployersPage() {
    return (

            <Paper elevation={6}
                   sx={{
                       height: "55vh",
                       minHeight: "55vh",
                       width: "fit-content",
                       mt: "8vh",
                       marginX: "auto",
                       display: "flex",
                       flexDirection: "column",
                       p: 6 }}
            >
                <Stack>
                    <Typography variant="h4" sx={{ ml: 1.5 }}>
                        Zarządzanie firmami
                    </Typography>
                    <List sx={{ width: "450px", mt: 1 }}>
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
                                <ListItemText sx={{ mx: 2, lineHeight: 1 }} primary="Utwórz nową firmę" />
                                <ListItemIcon sx={{ minWidth: 24, lineHeight: 1 }}>
                                    <ArrowForward />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
            </Paper>
    );
}
