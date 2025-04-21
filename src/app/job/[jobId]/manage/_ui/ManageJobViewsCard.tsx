"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {Edit, QueryStats, TaskAlt} from "@mui/icons-material";
import {useParams, usePathname, useRouter} from 'next/navigation';
import {useCurrentJobStore} from "@/lib/stores/currentJobStore";


export default function ManageJobViewsCard() {
    const { jobId } = useParams();

    const router = useRouter();
    const pathname = usePathname();

    const { currentJobState } = useCurrentJobStore();

    const navItems = [
        { text: "Statystyki", icon: <QueryStats />, subpage: "stats",
            isAccessible: currentJobState?.claimIds?.includes(3) },
        { text: "Aplikacje", icon: <TaskAlt />, subpage: "applications",
            isAccessible: currentJobState?.claimIds?.includes(6) },
        { text: "Edycja", icon: <Edit />, subpage: "edit",
            isAccessible: currentJobState?.claimIds?.includes(4) },
    ];

    const navigateTo = (subPage: string) => {
        router.push(`/job/${jobId}/manage/${subPage}`);
    };

    const isActive = (subPage: string) => pathname === `/job/${jobId}/manage/${subPage}`;

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
                            onClick={() => navigateTo(item.subpage)}
                            selected={isActive(item.subpage)}
                            sx={{
                                pl: 1.5,
                                py: 1,
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