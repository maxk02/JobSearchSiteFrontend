"use client";

import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {Folder} from "@mui/icons-material";
import {JobFolderMinimalDto} from "@/lib/api/jobFolders/jobFoldersApiDtos";
import {usePathname, useRouter} from "next/navigation";

// const navItems = [
//     { text: "Some folder 1", icon: <Folder /> },
//     { text: "Some folder 2", icon: <Folder /> },
//     { text: "Some folder 3", icon: <Folder /> },
//     { text: "Some folder 4", icon: <Folder /> },
//     { text: "Some folder 5", icon: <Folder /> },
//     { text: "Some folder 6", icon: <Folder /> },
//     { text: "Some folder 7", icon: <Folder /> },
//     { text: "Some folder 8", icon: <Folder /> },
//     { text: "Some folder 9", icon: <Folder /> },
//     { text: "Some folder 10", icon: <Folder /> },
//     { text: "Some folder 11", icon: <Folder /> },
//     { text: "Some folder 12", icon: <Folder /> },
//     { text: "Some folder 13", icon: <Folder /> },
//     { text: "Some folder 14", icon: <Folder /> },
// ];

interface JobFolderChildrenNavigationCardProps {
    folders: JobFolderMinimalDto[];
}

export default function JobFolderChildrenNavigationCard({ folders }: JobFolderChildrenNavigationCardProps) {

    const router = useRouter();
    const pathname = usePathname();

    const handleChangeId = (newId: number) => {
        const parts = pathname.split('/');

        if (parts.length >= 4) {
            parts[2] = newId.toString();
            const newPath = parts.join('/');
            router.push(newPath);
        }
    };


    return (
        <Paper sx={{ px: 0, pt: 0, pb: 0, overflowY: "auto", flex: "1 1 auto" }}>
            <List sx={{ p: 0 }}>
                {folders.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{ pl: 1.5, py: 1.2, pr: 3 }}
                            onClick={() => handleChangeId(item.id)}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <Folder />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}