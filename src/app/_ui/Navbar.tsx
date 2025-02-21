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
    useTheme, Avatar, Divider,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import {
    AccountCircle, ContactPage,
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
                        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
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
                                    mx: 3,
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
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                slotProps={{
                                    paper: {
                                        style: {
                                            marginTop: 8
                                        },
                                    }
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
