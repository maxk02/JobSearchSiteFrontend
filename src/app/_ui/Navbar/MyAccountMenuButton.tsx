"use client";

import {Avatar, Box, Button, Divider, ListItemIcon, Menu, MenuItem, Typography, useTheme} from "@mui/material";
import {
    AccountCircle,
    ContactPage,
    Description, ExitToApp,
    History,
    KeyboardArrowDown,
    KeyboardArrowUp, Settings,
    Star
} from "@mui/icons-material";
import React from "react";

export default function MyAccountMenuButton() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
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
                    // mx: 3,
                    pr: 2,
                    "& .MuiButton-endIcon": {
                        marginLeft: 0.3,
                    },
                    "& .MuiButton-startIcon": {
                        fontSize: 26,
                    }
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
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                slotProps={{
                    paper: {
                        style: {
                            marginTop: 8
                        },
                    }
                }}
                MenuListProps={{
                    sx: { paddingBottom: 0 }
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", p: 2, pt: 1 }}>
                    <Avatar sx={{ height: 50, width: 50, mr: 1.5 }} />
                    <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                        example@example.com
                    </Typography>
                </Box>
                <Divider />
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <ContactPage />
                    </ListItemIcon>
                    Mój profil
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <Star />
                    </ListItemIcon>
                    Zapisane
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <Description />
                    </ListItemIcon>
                    Moje pliki
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <History />
                    </ListItemIcon>
                    Historia aplikacji
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    Ustawienia konta
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                    <ListItemIcon>
                        <ExitToApp />
                    </ListItemIcon>
                    Wyloguj
                </MenuItem>
            </Menu>
        </Box>
    );
}