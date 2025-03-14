"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CreateNewFolder, NoteAdd} from "@mui/icons-material";

const navItems = [
    { text: "Utwórz subfolder", icon: <CreateNewFolder /> },
    { text: "Dodaj ofertę pracy", icon: <NoteAdd /> },
];

export default function JobFolderActionsCard() {
    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
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