import {
    Avatar,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Close, Tag} from "@mui/icons-material";
import {getItemColor} from "@/lib/functions/listItemColors";


interface ApplicationTagSearchDialogItem {
    id: number;
    title: string;
    // subtitle?: string;
}

interface ApplicationTagSearchDialogProps {
    title: string;
    searchBarPlaceholder: string;
    open: boolean;
    onClose: () => void;
    onSubmit: (tag: string) => void;
    data: ApplicationTagSearchDialogItem[];
    mode: "search" | "searchOrAdd";
    excludeFromSearch: string[];
}

export default function ApplicationTagSearchDialog({ title, searchBarPlaceholder: searchBarTitle, open, onClose, onSubmit, data }: ApplicationTagSearchDialogProps) {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredResults = data.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase())
        // item.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
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

    const handleChooseTag = (tag: string) => {
        onClose();
        onSubmit(tag);
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
                    placeholder={searchBarTitle}
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
                                disableGutters
                                sx={{ p: 0 }}
                            >
                                <ListItemButton
                                    disableGutters
                                    sx={{ py: 1.2 }}
                                    onClick={() => handleChooseTag(item.title)}
                                >
                                    <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                        <Avatar variant="rounded" sx={{ backgroundColor: getItemColor(item.id) }}>
                                            <Tag />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        slotProps={{
                                            primary: { color: "black" }
                                        }}
                                    />
                                </ListItemButton>
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