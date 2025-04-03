"use client";

import { Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Typography, useTheme } from "@mui/material";
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
import { useCurrentUserStore } from "@/lib/stores/currentUserStore";
import Link from "next/link";

export default function MyAccountMenuButton() {
    const { isAuthenticated } = useCurrentUserStore();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuItems = isAuthenticated ? [
        <Box key="user-info" sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, pt: 1 }}>
            <Avatar sx={{ height: 50, width: 50, mr: 1.5 }} />
            <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                example@example.com
            </Typography>
        </Box>,
        <Divider key="divider-1" />,
        <MenuItem key="profile" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><ContactPage /></ListItemIcon>
            Mój profil
        </MenuItem>,
        <MenuItem key="saved" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><Star /></ListItemIcon>
            Zapisane
        </MenuItem>,
        <MenuItem key="files" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><Description /></ListItemIcon>
            Moje pliki
        </MenuItem>,
        <MenuItem key="history" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><History /></ListItemIcon>
            Historia aplikacji
        </MenuItem>,
        <MenuItem key="settings" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><Settings /></ListItemIcon>
            Ustawienia konta
        </MenuItem>,
        <MenuItem key="logout" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
            <ListItemIcon><ExitToApp /></ListItemIcon>
            Wyloguj
        </MenuItem>,
    ] : [
        <Box key="guest-info" sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, pt: 1 }}>
            <Avatar sx={{ height: 50, width: 50, mr: 1.5 }} />
            <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                Zaloguj się lub załóż konto
            </Typography>
        </Box>,
        <Divider key="divider-2" />,
        <Link key="login" href="/login" passHref legacyBehavior>
            <MenuItem key="login" onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                <ListItemIcon><Login /></ListItemIcon>
                <Typography>Zaloguj się</Typography>
            </MenuItem>
        </Link>,
        <Link key="register" href="/register" passHref legacyBehavior>
            <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                <ListItemIcon><HowToReg /></ListItemIcon>
                Załóż konto
            </MenuItem>
        </Link>,
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