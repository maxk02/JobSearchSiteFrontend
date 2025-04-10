import {List, ListItem, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";
import React from "react";
import {Description, Settings} from "@mui/icons-material";


const navItems = [
    { text: "Informacje podstawowe", icon: <Description /> },
    { text: "Przedział czasowy", icon: <Settings /> },
    { text: "Rodzaj zatrudnienia", icon: <Settings /> },
    { text: "Umowa zatrudnienia", icon: <Settings /> },
    { text: "Dane o wynagrodzeniu", icon: <Settings /> },
    { text: "Obowiązki", icon: <Settings /> },
    { text: "Wymogi", icon: <Settings /> },
    { text: "Mile widziane", icon: <Settings /> },
];


export default function CreateEditJobAnchorCard() {
    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
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
                {navItems.map((item) => (
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
        </Paper>
    );
}