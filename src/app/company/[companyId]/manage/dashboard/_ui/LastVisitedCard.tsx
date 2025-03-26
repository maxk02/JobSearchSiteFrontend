"use client";

import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {Clear} from "@mui/icons-material";
import React, {useState} from "react";


interface LastVisitedCardItem {
    id : number;
    title : string;
    subtitle? : string;
    path : string;
}

interface LastVisitedCardProps {
    cardTitle: string;
    initialItems: LastVisitedCardItem[];
    noItemsPlaceholderText: string;
    onDelete: () => void;
    onDeleteAll: () => void;
}

export default function LastVisitedCard({ cardTitle, initialItems, noItemsPlaceholderText }: LastVisitedCardProps) {
    const [items, setItems] = useState(initialItems);

    const clearItems = () => setItems([]);

    const handleDelete = (id: number) => setItems(items.filter(job => job.id !== id));

    return (
        <Paper elevation={3} sx={{ p: 2, width: "100%", height: "380px", display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">
                {cardTitle}
            </Typography>
            {items.length > 0 ? (
                <>
                    <List sx={{ py: 0, flexGrow: 1 }}>
                        {items.map((item) => (
                            <Stack direction="row" spacing={2} key={item.id}>
                                <ListItem key={item.id} divider disablePadding sx={{ justifyContent: "space-between", py: 0.5 }}>
                                    <ListItemButton
                                        href={item.path}
                                        sx={{ flexGrow: 0, py: 0, "&:hover": { backgroundColor: "transparent" } }}
                                        disableRipple
                                        disableTouchRipple
                                        disableGutters
                                    >

                                        <ListItemText
                                            primary={item.title}
                                            secondary={item.subtitle}
                                            slotProps={{
                                                primary: { py: item.subtitle ? 0 : 0.2 }
                                            }}
                                        />
                                    </ListItemButton>
                                    <IconButton disableRipple
                                                sx={{ p: 0 }}
                                                onClick={() => handleDelete(item.id)}>
                                        <Clear />
                                    </IconButton>
                                </ListItem>
                            </Stack>
                        ))}
                    </List>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Clear />}
                            onClick={clearItems}
                        >
                            Wyczyść
                        </Button>
                    </Box>
                </>
            ) : (
                <Typography color="text.secondary" sx={{ mt: 2, mb: 1 }}>{noItemsPlaceholderText}</Typography>
            )}
        </Paper>
    );
}