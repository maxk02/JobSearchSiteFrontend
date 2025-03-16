"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {ArrowUpward, Home} from "@mui/icons-material";

const navItems = [
    { id: 1, text: "Powrót do góry hierarchii", icon: <Home /> },
    { id: 2, text: "Folder rodzicielski", icon: <ArrowUpward /> },
];

interface JobFolderParentsNavigationCardProps {
    rootFolderId: string | null;
    parentFolderId: string | null;
}

export default function JobFolderParentsNavigationCard(
    { rootFolderId, parentFolderId }: JobFolderParentsNavigationCardProps) {
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