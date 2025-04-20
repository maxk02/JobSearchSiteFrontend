"use client";

import {Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Typography, useTheme} from "@mui/material";
import {
    AccountCircle,
    ContactPage,
    Description,
    ExitToApp,
    History,
    HowToReg,
    KeyboardArrowDown,
    KeyboardArrowUp,
    Login,
    Settings,
    Star
} from "@mui/icons-material";
import React from "react";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";
import Link from "next/link";
import {logOut} from "@/lib/api/account/accountApi";


export default function MyAccountMenuButton() {

    const { currentUser, clearCurrentUser } = useCurrentUserStore();

    const loggedInItems = [
        { text: "Mój profil", icon: <ContactPage />, path: "/account/profile" },
        { text: "Zapisane", icon: <Star />, path: "/account/bookmarks" },
        { text: "Moje pliki", icon: <Description />, path: "/account/files" },
        { text: "Historia aplikacji", icon: <History />, path: "/account/applications" },
        { text: "Ustawienia konta", icon: <Settings />, path: "/account/settings" },
    ];

    const notLoggedInItems = [
        { text: "Zaloguj się", icon: <Login />, path: "/login" },
        { text: "Załóż konto", icon: <HowToReg />, path: "/register" },
    ];

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = async () => {

        const result = await logOut();

        if (result.success) {
            clearCurrentUser();
            handleClose();
        }
    }

    const menuItems = currentUser ? [
        <Box key="user-info" sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, pt: 1 }}>
            <Avatar src={currentUser.avatarLink ?? ""} sx={{ height: 50, width: 50, mr: 1.5 }} />
            {currentUser?.fullName &&
                <Typography variant="body1" fontWeight={600} gutterBottom>
                    {currentUser?.fullName}
                </Typography>
            }
        </Box>,
        <Divider key="divider-1" />,
        loggedInItems.map((item) => (
            <Link key={item.text} href={item.path} passHref legacyBehavior>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {item.text}
                </MenuItem>
            </Link>
        )),
        <MenuItem key="Wyloguj" onClick={handleLogOut} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><ExitToApp /></ListItemIcon>
            Wyloguj
        </MenuItem>
    ] : [
        <Box key="guest-info" sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, pt: 1 }}>
            <Avatar sx={{ height: 50, width: 50, mr: 1.5 }} />
            <Typography variant="body1" fontWeight={600} gutterBottom>
                Zaloguj się lub załóż konto
            </Typography>
        </Box>,
        <Divider key="divider-2" />,
        notLoggedInItems.map((item) => (
            <Link key={item.text} href={item.path} passHref legacyBehavior>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    {item.text}
                </MenuItem>
            </Link>
        )),
    ];

    return (
        <Box>
            <Button
                size="large"
                variant="outlined"
                id="navbar-account-menu-button"
                aria-controls={open ? 'navbar-account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<AccountCircle />}
                endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                    color: theme.palette.primary.main,
                    borderRadius: "40px",
                    pr: 2,
                    "& .MuiButton-endIcon": { marginLeft: 0.3 },
                    "& .MuiButton-startIcon": { fontSize: 26 },
                }}
            >
                Moje konto
            </Button>
            <Menu
                id="navbar-account-menu"
                aria-labelledby="navbar-account-menu-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                slotProps={{ paper: { style: { marginTop: 8 } } }}
                MenuListProps={{ sx: { paddingBottom: 0 } }}
            >
                {menuItems}
            </Menu>
        </Box>
    );
}