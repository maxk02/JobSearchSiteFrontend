import {
    Avatar, Button,
    Dialog, DialogActions,
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
import React, {useEffect, useState} from "react";
import {Close, Tag} from "@mui/icons-material";
import {getItemColor} from "@/lib/functions/listItemColors";
import {getJobApplicationTags} from "@/lib/api/companies/companiesApi";
import {GetJobApplicationTagsRequest} from "@/lib/api/companies/companiesApiInterfaces";


interface ApplicationTagSearchDialogProps {
    companyId: number;
    title: string;
    searchBarPlaceholder: string;
    open: boolean;
    onClose: () => void;
    onSubmit: (tag: string) => void;
    excludeFromSearch: string[];
    mode?: "searchOrAdd";
}

export default function ApplicationTagSearchDialog({ companyId, title, searchBarPlaceholder, open, onClose, onSubmit, excludeFromSearch, mode }: ApplicationTagSearchDialogProps) {

    const [searchQuery, setSearchQuery] = useState("");

    const [searchResults, setSearchResults] = useState<string[]>([]);

    useEffect(() => {

        const fetchData = async () => {

            const request: GetJobApplicationTagsRequest = {
                searchQuery: searchQuery ?? null,
                size: 10
            };

            const result = await getJobApplicationTags(companyId, request);

            if (result.success) {
                setSearchResults(result.data.tags);
            }
            else {
                console.log("Job application tags fetching error");
            }
        }

        fetchData();

    }, [searchQuery]);

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
                    placeholder={searchBarPlaceholder}
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                />
                <List disablePadding sx={{ py: 1, px: 0.3 }}>
                    {searchResults.length > 0 ? (
                        searchResults.filter(res => !excludeFromSearch.includes(res)).map((item, idx) => (
                            <ListItem
                                key={idx}
                                disableGutters
                                sx={{ p: 0 }}
                            >
                                <ListItemButton
                                    disableGutters
                                    sx={{ py: 1.2 }}
                                    onClick={() => handleChooseTag(item)}
                                >
                                    <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                        <Avatar variant="rounded" sx={{ backgroundColor: getItemColor(idx) }}>
                                            <Tag />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item}
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
            { mode === "searchOrAdd" &&
                <DialogActions sx={{ px: 2, pb: 1, pt: 0.5 }}>
                    <Stack direction="row" spacing={2}>
                        <Button color="primary" variant="text" onClick={onClose} sx={{ fontSize: "1.1em" }}>
                            Anuluj
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => onSubmit(searchQuery)} sx={{ fontSize: "1.1em" }}
                            disabled={searchQuery.length === 0 || excludeFromSearch.includes(searchQuery)}
                        >
                            Dodaj
                        </Button>
                    </Stack>
                </DialogActions>
            }
        </Dialog>
    );
}