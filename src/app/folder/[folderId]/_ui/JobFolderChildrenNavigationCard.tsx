"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {Folder} from "@mui/icons-material";

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
];

export default function JobFolderChildrenNavigationCard() {
    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, overflowY: "auto", flex: "1 1 auto" }}>
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