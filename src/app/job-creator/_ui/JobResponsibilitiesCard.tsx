"use client";

import {Alert, Box, Button, Paper, Typography} from "@mui/material";
import {Add, Info} from "@mui/icons-material";
import EditableList, {ListItemType} from "@/app/_ui/EditableList";
import React, {useState} from "react";


const initialItems: ListItemType[] = [
    { id: 1, text: "interakcja z klientami" },
    { id: 2, text: "interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami" },
    { id: 3, text: "składanie zamówień" },
    { id: 4, text: "interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami" },
];



export default function JobResponsibilitiesCard() {

    const [items, setItems] = useState<ListItemType[]>(initialItems);
    // // const [newItem, setNewItem] = useState<string>('');
    // const [, setEditText] = useState<string>('');
    //
    //
    // const handleEditStart = (item: ListItemType): void => {
    //     setEditText(item.text);
    // };
    //
    //
    // const handleDelete = (id: number): void => {
    //     setItems(items.filter(item => item.id !== id));
    // };

    return (
        <Paper sx={{ mt: 2, pt: 2, pb: (items.length > 0 ? 1.5 : 2), px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Obowiązki</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        Ta sekcja jest opcjonalna. Możesz dodać do 10 elementów.
                    </Typography>
                </Alert>

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Add />}
                    sx={{ borderRadius: "50px", width: "fit-content", mt: 1.5 }}
                >
                    Dodaj
                </Button>

                <EditableList initialItems={initialItems} />

                {/*{items.length > 0 && <Box sx={{ maxWidth: "650px", mt: 2 }}>*/}
                {/*    <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>*/}
                {/*        Dodano 4 obiekty*/}
                {/*    </Typography>*/}

                {/*    <List sx={{ mt: 1, p: 0, '& > :last-child': { pb: 0 } }}>*/}
                {/*        {items.map((item, index) => (*/}
                {/*            <ListItem key={index} sx={{ px: 0, py: 0.5, display: "flex", flexDirection: "row", lineHeight: 1 }}>*/}
                {/*                <Typography>*/}
                {/*                    {item.text}*/}
                {/*                </Typography>*/}
                {/*                <Box sx={{ ml: 1, display: "flex", flexDirection: "row",  gap: 1.4 }}>*/}
                {/*                    <IconButton*/}
                {/*                        edge="end"*/}
                {/*                        aria-label="edit"*/}
                {/*                        onClick={() => handleEditStart(item)}*/}
                {/*                        size="small"*/}
                {/*                    >*/}
                {/*                        <Edit />*/}
                {/*                    </IconButton>*/}
                {/*                    <IconButton*/}
                {/*                        edge="end"*/}
                {/*                        aria-label="delete"*/}
                {/*                        onClick={() => handleDelete(item.id)}*/}
                {/*                        size="small"*/}
                {/*                    >*/}
                {/*                        <Delete />*/}
                {/*                    </IconButton>*/}
                {/*                </Box>*/}
                {/*            </ListItem>*/}
                {/*        ))}*/}
                {/*    </List>*/}
                {/*</Box>}*/}
            </Box>
        </Paper>
    );
}