"use client";

import {Button, IconButton, Menu, MenuItem, Paper, Stack, Typography, useTheme} from "@mui/material";
import {ArrowBack, ArrowForward, KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import React, {useRef} from "react";

export default function MyDefaultSortingCard() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Paper elevation={3} sx={{ px: "7px", py: 1.5 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Button
                    ref={buttonRef}
                    size="large"
                    variant="text"
                    id="application-sorting-menu-button"
                    aria-controls={open ? "application-sorting-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
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
                    Sortuj: Najnowsze
                </Button>
                <Menu
                    id="application-sorting-menu"
                    aria-labelledby="application-sorting-menu-button"
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
                                marginTop: 1,
                                width: buttonRef.current?.offsetWidth
                            },
                        }
                    }}
                    MenuListProps={{
                        sx: { p: 0 }
                    }}
                >
                    <MenuItem onClick={handleClose} sx={{ py: 2, pr: 4, pl: 2 }}>
                        Najnowsze
                    </MenuItem>
                </Menu>

                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <IconButton color="primary">
                        <ArrowBack />
                    </IconButton>

                    <Typography sx={{ ml: 0.5 }}>1</Typography>
                    <Typography sx={{ ml: 1 }}>z</Typography>
                    <Typography sx={{ ml: 1 }}>2</Typography>

                    <IconButton color="primary" sx={{ ml: 0.5 }}>
                        <ArrowForward />
                    </IconButton>
                </Stack>
            </Stack>
        </Paper>
    );
}
