"use client";

import {Box, IconButton, List, ListItem, Typography} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import React, {useState} from "react";


export interface ListItemType {
    id: number;
    text: string;
}

interface EditableListProps {
    initialItems: ListItemType[];
}

export default function EditableList({initialItems}: EditableListProps) {

    const [items, setItems] = useState<ListItemType[]>(initialItems);
    // const [newItem, setNewItem] = useState<string>('');
    const [, setEditText] = useState<string>('');


    const handleEditStart = (item: ListItemType): void => {
        setEditText(item.text);
    };


    const handleDelete = (id: number): void => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <>
            {items.length > 0 && <Box sx={{ maxWidth: "650px", mt: 2 }}>
                <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>
                    Dodano 4 obiekty
                </Typography>

                <List sx={{ mt: 1, p: 0, '& > :last-child': { pb: 0 } }}>
                    {items.map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.5, display: "flex", flexDirection: "row", lineHeight: 1 }}>
                            <Typography>
                                {item.text}
                            </Typography>
                            <Box sx={{ ml: 1, display: "flex", flexDirection: "row",  gap: 1.4 }}>
                                <IconButton
                                    edge="end"
                                    aria-label="edit"
                                    onClick={() => handleEditStart(item)}
                                    size="small"
                                >
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handleDelete(item.id)}
                                    size="small"
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>}
        </>
    );
}