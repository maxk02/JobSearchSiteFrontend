"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {ArrowUpward, Home} from "@mui/icons-material";
import {usePathname, useRouter} from "next/navigation";


interface JobFolderParentsNavigationCardProps {
    rootFolderId: number | null;
    parentFolderId: number | null;
}

export default function JobFolderParentsNavigationCard(props: JobFolderParentsNavigationCardProps) {

    const { rootFolderId, parentFolderId } = props;

    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { id: 1, text: "Powrót do góry hierarchii", icon: <Home />, folderId: rootFolderId },
        { id: 2, text: "Folder rodzicielski", icon: <ArrowUpward />, folderId: parentFolderId },
    ];

    const handleChangeId = (newId: number | null) => {

        if (!newId) {
            return;
        }

        const parts = pathname.split('/');

        if (parts.length >= 4) {
            parts[2] = newId.toString();
            const newPath = parts.join('/');
            router.push(newPath);
        }
    };

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
                            disabled={!item.folderId}
                            onClick={() => handleChangeId(item.folderId)}
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