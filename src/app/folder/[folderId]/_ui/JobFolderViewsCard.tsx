"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {Description, QueryStats, Settings} from "@mui/icons-material";
import {useParams, usePathname} from 'next/navigation';
import {useCurrentJobFolderStore} from "@/lib/stores/currentJobFolderStore";


function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}


export default function JobFolderViewsCard() {

    const { folderId } = useParams();

    const { currentJobFolderState } = useCurrentJobFolderStore();

    const navItems = [
        {
            text: "Zarządzanie ogłoszeniami",
            icon: <Description />,
            path: `/folder/${folderId}/jobs`,
            isAccessible: true
        },
        {
            text: "Zarządzanie folderem",
            icon: <Settings />,
            path: `/folder/${folderId}/settings`,
            isAccessible: currentJobFolderState?.claimIds?.includes(4)
        },
        {
            text: "Statystyki",
            icon: <QueryStats />,
            path: `/folder/${folderId}/stats`,
            isAccessible: currentJobFolderState?.claimIds?.includes(3)
        },
    ];

    const currentPath = usePathname();

    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, flexShrink: 0 }}>
            <List sx={{ p: 0 }}>
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                            sx={{ pl: 1.5, pt: 1, pb: 0.5, pr: 3 }}
                >
                    Widoki
                </Typography>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={isRouteActive(currentPath, item.path)}
                            href={item.path}
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