"use client";

import {
    Avatar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {ContactPage, Description, History, Settings, Star} from "@mui/icons-material";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {getUserProfile} from "@/lib/api/userProfiles/userProfilesApi";
import Image from "next/image";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";


const navItems = [
    { text: "Mój profil", icon: <ContactPage />, path: "/account/profile" },
    { text: "Zapisane", icon: <Star />, path: "/account/bookmarks" },
    { text: "Moje pliki", icon: <Description />, path: "/account/files" },
    { text: "Historia aplikacji", icon: <History />, path: "/account/applications" },
    { text: "Ustawienia konta", icon: <Settings />, path: "/account/settings" },
];

function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}


export default function AccountSideNavbar() {

    const currentPath = usePathname();

    // const [userName, setUserName] = useState<string | null>(null);
    // const [avatarLink, setAvatarLink] = useState<string | null>(null);

    const { currentUser } = useCurrentUserStore();

    // useEffect(() => {
    //     const fetchAccountData = async () => {
    //
    //         const result = await getUserProfile();
    //
    //         if (result.success) {
    //             setUserName(`${result.data.firstName} ${result.data.lastName}`);
    //             setAvatarLink(result.data.avatarLink);
    //         }
    //
    //     };
    //
    //     fetchAccountData();
    // });

    return (
        <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
            <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                <Avatar src={currentUser?.avatarLink ?? ''} sx={{ height: 64, width: 64 }} />
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                    {currentUser?.fullName}
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
            </List>
        </Paper>
    );
}