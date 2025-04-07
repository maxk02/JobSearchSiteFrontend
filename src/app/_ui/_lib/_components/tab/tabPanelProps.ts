import React from "react";
import {BoxProps} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    sx?: BoxProps["sx"];
}

export default TabPanelProps;