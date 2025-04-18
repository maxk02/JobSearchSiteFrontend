import {Button, IconButton, Menu, MenuItem, Paper, Stack, Typography, useTheme} from "@mui/material";
import {ArrowBack, ArrowForward, KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import React, {useRef, useState} from "react";


interface MyDefaultSortingCardProps<T extends string> {
    pxValue: number | string;
    sortModes: { value: T, label: string }[];
    defaultMode: { value: T, label: string };
    onSortChange: (newMode: T) => void;
    currentPage: number;
    totalPages: number;
}


export default function MyDefaultSortingCard<T extends string>(props: MyDefaultSortingCardProps<T>) {

    const {pxValue, sortModes, defaultMode, onSortChange, currentPage, totalPages} = props;

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const open = Boolean(anchorEl);

    const [currentSortOption, setCurrentSortOption] = useState<{ value: T, label: string }>(defaultMode);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChooseOption = (newOption: { value: T, label: string }) => {
        setCurrentSortOption(newOption);
        onSortChange(newOption.value);
        handleClose();
    };

    return (
        <Paper elevation={3} sx={{ px: pxValue, py: 1.5 }}>
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
                    Sortuj: {currentSortOption.label}
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
                    {sortModes.map((sortMode) => (
                        <MenuItem
                            key={sortMode.value}
                            onClick={() => handleChooseOption(sortMode)}
                            sx={{ py: 2, pr: 4, pl: 2 }}
                        >
                            {sortMode.label}
                        </MenuItem>
                    ))}
                </Menu>

                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <IconButton color="primary" disabled={currentPage < 2}>
                        <ArrowBack />
                    </IconButton>

                    <Typography sx={{ ml: 0.5 }}>{currentPage}</Typography>
                    <Typography sx={{ ml: 1 }}>z</Typography>
                    <Typography sx={{ ml: 1 }}>{totalPages}</Typography>

                    <IconButton color="primary" sx={{ ml: 0.5 }} disabled={currentPage > totalPages - 1}>
                        <ArrowForward />
                    </IconButton>
                </Stack>
            </Stack>
        </Paper>
    );
}
