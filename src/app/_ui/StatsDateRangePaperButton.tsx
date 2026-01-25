import {Button, Menu, MenuItem, Paper, useTheme} from "@mui/material";
import {KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import React, {useRef} from "react";


interface StatsDateRangePaperButtonProps {
    options: string[];
    defaultOption?: string;
}

export default function StatsDateRangePaperButton({ options, defaultOption } : StatsDateRangePaperButtonProps) {

    const [timePeriod, setTimePeriod] = React.useState<string>(defaultOption ?? options[0]);

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
    const handleSelect = (selected: string) => {
        setTimePeriod(selected);
        handleClose();
    };


    return (
        <Paper sx={{ width: "fit-content" }}>
            <Button
                ref={buttonRef}
                size="large"
                variant="text"
                id="stats-date-range-menu-button"
                aria-controls={open ? "stats-date-range-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                sx={{
                    color: theme.palette.primary.main,
                    "& .MuiButton-endIcon": {
                        marginLeft: 0.3,
                    },
                    "& .MuiButton-startIcon": {
                        fontSize: 26,
                    },
                    px: 2.075
                }}
            >
                {timePeriod}
            </Button>
            <Menu
                id="stats-date-range-menu"
                aria-labelledby="stats-date-range-menu-button"
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
                {options.map((item) => (
                    <MenuItem key={item} onClick={() => handleSelect(item)}
                              sx={{ py: 2, pr: 4, pl: 2 }}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </Paper>
    );
}