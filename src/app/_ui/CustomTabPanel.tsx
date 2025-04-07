import {Box} from "@mui/material";
import React from "react";
import TabPanelProps from "@/app/_ui/_lib/_components/tab/tabPanelProps";

export default function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, sx, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            sx={{ ...sx }}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </Box>
    );
}