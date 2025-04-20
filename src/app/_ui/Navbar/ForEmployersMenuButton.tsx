"use client";

import {Avatar, Box, Button, Divider, Menu, MenuItem, useTheme} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp, Work} from "@mui/icons-material";
import React from "react";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";

export default function MyAccountMenuButton() {

    const theme = useTheme();

    const { currentUser } = useCurrentUserStore();

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
                id="navbar-for-employers-menu-button"
                aria-controls={open ? 'navbar-for-employers-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<Work />}
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
                Dla pracodawców
            </Button>
            <Menu
                id="navbar-for-employers-menu"
                aria-labelledby="navbar-for-employers-menu-button"
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
                    sx: { py: 0 }
                }}
            >
                {currentUser?.companiesManaged?.map((item) => (
                    <MenuItem key={item.id} onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                        <Avatar src={item.logoLink ?? ""} variant="rounded" sx={{ height: 35, width: 35, mr: 1.5 }} />
                        {item.name}
                    </MenuItem>
                ))}
                {currentUser?.companiesManaged?.length &&
                    <Divider style={{ marginTop: 0, marginBottom: 0 }} />
                }
                <MenuItem
                    onClick={handleClose}
                    sx={{ py: 2, pr: 4, pl: 2 }}
                >
                    <Avatar variant="rounded" sx={{ height: 35, width: 35, mr: 1.5 }}>
                        +
                    </Avatar>
                    Zarejestruj firmę
                </MenuItem>
            </Menu>
        </Box>
    );
}