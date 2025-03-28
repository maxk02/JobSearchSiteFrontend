"use client";

import {
    Avatar,
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {Clear} from "@mui/icons-material";
import React, {useState} from "react";


const getRandomColor = () => {
    const colors = ["#2A6376", "#8B3A62", "#C49A3A", "#6A8D73", "#4C6FA5"];
    return colors[Math.floor(Math.random() * colors.length)];
};


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
    listItemAvatarIcon: React.ReactNode;
}


export default function DashboardLastVisitedCard({ cardTitle, initialItems, noItemsPlaceholderText, listItemAvatarIcon }: LastVisitedCardProps) {
    const [items, setItems] = useState(initialItems);

    const clearItems = () => setItems([]);

    const handleDelete = (id: number) => setItems(items.filter(job => job.id !== id));

    return (
        <Paper elevation={3} sx={{ width: "100%", height: "460px", display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ px: 2, pt: 2 }}>
                {cardTitle}
            </Typography>
            {items.length > 0 ? (
                <>
                    <List sx={{ py: 0, px: 2, flexGrow: 1, overflowY: "auto" }}>
                        {items.map((item) => (
                            <Stack direction="row" key={item.id}>
                                <ListItem
                                    key={item.id}
                                    divider
                                    disablePadding
                                    sx={{
                                        justifyContent: "space-between",
                                        py: item.subtitle ? 0.5 : 1.5
                                    }}
                                >
                                    <ListItemButton
                                        href={item.path}
                                        sx={{ flexGrow: 0, py: 0, "&:hover": { backgroundColor: "transparent" } }}
                                        disableRipple
                                        disableTouchRipple
                                        disableGutters
                                    >
                                        <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                            <Avatar variant="rounded" sx={{ backgroundColor: getRandomColor() }}>
                                                {listItemAvatarIcon}
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.title}
                                            secondary={item.subtitle}
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
                    <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, px: 2, pb: 2 }}>
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
                <Typography color="text.secondary" sx={{ pt: 2, pb: 1, px: 2 }}>{noItemsPlaceholderText}</Typography>
            )}
        </Paper>
    );
}