"use client";

import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {ArrowForward, Business, Dashboard, FileOpen, Policy, Settings} from "@mui/icons-material";
import {useParams, usePathname} from "next/navigation";


function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}

export default function CompanyManagementSideNavbar() {

    const { companyId } = useParams();

    const currentPath = usePathname();

    const navItems = [
        { text: "Pulpit", icon: <Dashboard />, path: `/company/${companyId}/manage/dashboard` },
        { text: "Profil firmy", icon: <Business />, path: `/company/${companyId}/manage/profile` },
        { text: "Zarządzanie uprawnieniami", icon: <Policy />, path: `/company/${companyId}/manage/claims` },
        // { text: "Ustawienia konta firmowego", icon: <Settings />, path: `/company/${companyId}/manage/settings` },
    ];

    return (
        <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
            <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                <Avatar variant="rounded" src="/company2.webp" sx={{ height: 64, width: 64 }} />
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                    Firma1 Sp. z o o
                </Typography>
            </Stack>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={isRouteActive(currentPath, item.path)}
                            href={item.path}
                            sx={{
                                pl: 1.6,
                                py: 1.5,
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
                <Divider sx={{ mt: 2 }} />
                <ListItem key="Zarządzaj ofertami pracy" disablePadding sx={{ mt: 0.5 }}>
                    <ListItemButton sx={{ px: 1.6, py: 1.5 }} href={`/folder/${companyId}/jobs`}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                            <FileOpen />
                        </ListItemIcon>
                        <ListItemText primary="Zarządzaj ofertami pracy" />
                        <ListItemIcon sx={{ minWidth: 24, pl: 3 }}>
                            <ArrowForward />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    );
}