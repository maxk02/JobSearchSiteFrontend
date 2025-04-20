"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CreateNewFolder, NoteAdd} from "@mui/icons-material";
import {useMemo} from "react";


interface JobFolderActionsCardProps {
    claimIds: number[];
}

export default function JobFolderActionsCard({ claimIds }: JobFolderActionsCardProps) {

    const navItems = useMemo(() => [
        { text: "Utwórz subfolder", icon: <CreateNewFolder />, isAllowed: claimIds.includes(4) },
        { text: "Dodaj ofertę pracy", icon: <NoteAdd />, isAllowed: claimIds.includes(4) },
    ], [claimIds]);

    return (navItems.filter(n => n.isAllowed).length > 0 &&
        <Paper sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
            <List sx={{ p: 0 }}>
                {navItems.filter(n => n.isAllowed).map((item) => (
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