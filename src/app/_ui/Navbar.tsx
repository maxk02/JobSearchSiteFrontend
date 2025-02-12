"use client";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Menu,
    MenuItem,
    ListItemIcon,
    useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import {
    AccountBox,
    Description, ExitToApp,
    History,
    KeyboardArrowDown,
    KeyboardArrowUp,
    Settings,
    Star
} from "@mui/icons-material";
import SiteLogo from "@/app/_ui/SiteLogo";

export default function Navbar() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ zIndex: 4, backgroundColor: "white", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.08)" }}>
            <Toolbar>
                <Container
                    disableGutters
                    maxWidth="xl"
                    sx={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}
                >
                    <Link href="/" passHref>
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <SiteLogo />
                        </Box>
                    </Link>
                    <Box display="flex" flexDirection="row">
                        <div>
                            <Button
                                size="large"
                                variant="outlined"
                                id="navbar-account-menu-button"
                                aria-controls={open ? 'navbar-account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                startIcon={<AccountBox />}
                                endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                sx={{
                                    color: theme.palette.primary.main,
                                    borderRadius: "40px",
                                    mx: 3,
                                    pr: 2,
                                    "& .MuiButton-endIcon": {
                                        marginLeft: 0.3,
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
                                // anchorOrigin={{
                                //     vertical: 'top',
                                //     horizontal: 'left',
                                // }}
                                // transformOrigin={{
                                //     vertical: 'top',
                                //     horizontal: 'left',
                                // }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <AccountBox />
                                    </ListItemIcon>
                                    Mój profil
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Star />
                                    </ListItemIcon>
                                    Zapisane
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Description />
                                    </ListItemIcon>
                                    Moje pliki
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <History />
                                    </ListItemIcon>
                                    Historia aplikacji
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings />
                                    </ListItemIcon>
                                    Ustawienia konta
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <ExitToApp />
                                    </ListItemIcon>
                                    Wyloguj
                                </MenuItem>
                            </Menu>
                        </div>
                        <Box display="flex" flexDirection="column" alignItems=";eft" justifyContent="center">
                            <Typography fontWeight={450} lineHeight={1.2} fontSize={15} color="textSecondary">DLA PRACODAWCÓW</Typography>
                            <Typography lineHeight={1.2} color="primary" fontSize={15}>Załóż konto firmowe</Typography>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
