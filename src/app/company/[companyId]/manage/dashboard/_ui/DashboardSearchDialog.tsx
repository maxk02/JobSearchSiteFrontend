"use client";

import {
    Avatar,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Close} from "@mui/icons-material";



const getRandomColor = () => {
    const colors = ["#2A6376", "#8B3A62", "#C49A3A", "#6A8D73", "#4C6FA5"];
    return colors[Math.floor(Math.random() * colors.length)];
};


interface DashboardSearchDialogItem {
    id: number;
    title: string;
    subtitle?: string;
}

interface DashboardSearchDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    data: DashboardSearchDialogItem[];
    listItemIcon: React.ReactNode;
}

export default function DashboardSearchDialog({ title, open, onClose, data, listItemIcon }: DashboardSearchDialogProps) {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredResults = data.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpen = () => setSearchQuery("");
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        setSearchQuery("");
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            TransitionProps={{ onEntered: () => document.getElementById("search-input")?.focus() }}
            onTransitionEnter={handleOpen}
            scroll="paper"
        >
            <DialogTitle sx={{ pb: 1, pr: 1.5 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <IconButton onClick={() => handleClose({}, "")}>
                        <Close />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent sx={{ height: "500px" }}>
                <TextField
                    id="manage-company-dashboard-job-search-input"
                    sx={{ mt: 0.5 }}
                    placeholder="Szukaj..."
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                />
                <List disablePadding sx={{ py: 1, px: 0.3 }}>
                    {filteredResults.length > 0 ? (
                        filteredResults.map((item) => (
                            <ListItem
                                key={item.id}
                                component="a"
                                href={`/job/${item.id}/manage/`}
                                disableGutters
                                sx={{
                                    ...(item.subtitle && { py: 0.8 }),
                                    ...(!item.subtitle && { py: 1.2 })
                                }}
                            >
                                <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                    <Avatar variant="rounded" sx={{ backgroundColor: getRandomColor() }}>
                                        {listItemIcon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={item.subtitle}
                                    slotProps={{
                                        primary: { color: "black" }
                                    }}
                                />
                            </ListItem>
                        ))
                    ) : (
                        <Typography color="text.secondary" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
                            Brak wyników.
                        </Typography>
                    )}
                </List>
            </DialogContent>
        </Dialog>
    );
}