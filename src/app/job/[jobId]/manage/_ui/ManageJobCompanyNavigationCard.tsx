"use client";

import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";

const navItems = [
    { text: "Powrót do zarządzania firmą", icon: <ArrowBack /> },
];

export default function ManageJobCompanyNavigationCard() {
    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
            <Box sx={{
                mt: 1,
                mb: 0.5,
                display: "flex",
                flexDirection: "row",
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
        </Paper>
    );
}