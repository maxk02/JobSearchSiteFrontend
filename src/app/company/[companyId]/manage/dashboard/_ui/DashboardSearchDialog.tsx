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
import React from "react";
import {Close} from "@mui/icons-material";
import {getItemColor} from "@/lib/functions/listItemColors";


export interface DashboardSearchDialogItem {
    id: number;
    title: string;
    subtitle?: string;
}

export interface DashboardSearchDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    onSubmit: (id: number) => void;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    searchResults: DashboardSearchDialogItem[];
    listItemIcon: React.ReactNode;
}

export default function DashboardSearchDialog(props: DashboardSearchDialogProps) {

    const { title, open, onClose, onSubmit, searchQuery, setSearchQuery, searchResults, listItemIcon } = props;

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
            TransitionProps={{ onEntered: () => document.getElementById("manage-company-dashboard-search-input")?.focus() }}
            // onTransitionEnter={handleOpen}
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
                    id="manage-company-dashboard-search-input"
                    sx={{ mt: 0.5 }}
                    placeholder="Szukaj..."
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                />
                <List disablePadding sx={{ py: 1, px: 0.3 }}>
                    {searchResults.length > 0 ? (
                        searchResults.map((item) => (
                            <ListItem
                                key={item.id}
                                disableGutters
                            >
                                <ListItemButton
                                    disableGutters
                                    sx={{
                                        ...(item.subtitle && { py: 0.8 }),
                                        ...(!item.subtitle && { py: 1.2 })
                                    }}
                                    onClick={() => onSubmit(item.id)}
                                >
                                    <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                        <Avatar variant="rounded" sx={{ backgroundColor: getItemColor(item.id) }}>
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