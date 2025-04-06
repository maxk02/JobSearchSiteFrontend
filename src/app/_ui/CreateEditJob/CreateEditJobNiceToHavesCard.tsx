"use client";

import {Alert, Box, Button, Paper, Typography} from "@mui/material";
import {Add, Info} from "@mui/icons-material";
import EditableList, {ListItemType} from "@/app/_ui/EditableList";
import React, {useState} from "react";


const initialItems: ListItemType[] = [
    { id: 1, text: "wykształcenie wyższe kierunkowe" },
    { id: 2, text: "wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe" },
    { id: 3, text: "min. 1 rok doświadczenia komercyjnego na podobnym stanowisku" },
    { id: 4, text: "zdolności do myślenia krytycznego" },
];



export default function CreateEditJobNiceToHavesCard() {

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
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Mile widziane</Typography>
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
            </Box>
        </Paper>
    );
}