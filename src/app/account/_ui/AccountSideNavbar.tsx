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

const navItems = [
    { text: "Mój profil", icon: <ContactPage />, link: "/account/profile" },
    { text: "Zapisane", icon: <Star />, link: "/account/bookmarks" },
    { text: "Moje pliki", icon: <Description />, link: "/account/files" },
    { text: "Historia aplikacji", icon: <History />, link: "/account/applications" },
    { text: "Ustawienia konta", icon: <Settings />, link: "/account/settings" },
];

function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}

type AccountSideNavbarProps = {
    currentPath: string;
}

export default function AccountSideNavbar({ currentPath }: AccountSideNavbarProps) {
    return (
        <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
            <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                <Avatar src="/avatar2.webp" sx={{ height: 64, width: 64 }} />
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                    example@example.com
                </Typography>
            </Stack>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={isRouteActive(currentPath, item.link)}
                            href={item.link}
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