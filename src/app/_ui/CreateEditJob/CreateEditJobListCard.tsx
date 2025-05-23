"use client";

import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { Add, Delete, Edit, Info } from "@mui/icons-material";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { CreateEditJobFormData } from "@/lib/schemas/createEditJobSchema";

interface CreateEditJobListCardProps {
    cardTitle: string;
    fieldName: keyof CreateEditJobFormData;
}

export default function CreateEditJobListCard({ cardTitle, fieldName }: CreateEditJobListCardProps) {
    const { watch, setValue, formState: { errors } } = useFormContext<CreateEditJobFormData>();
    const items = watch(fieldName) as string[] || [];

    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [newText, setNewText] = useState("");

    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editText, setEditText] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

    const handleAddStart = () => {
        setAddDialogOpen(true);
        setNewText("");
    };

    const handleAddSave = () => {
        if (items.length >= 10) return;
        setValue(fieldName, [...items, newText], { shouldValidate: true });
        setAddDialogOpen(false);
        setNewText("");
    };

    const handleEditStart = (item: string, index: number) => {
        setEditText(item);
        setEditIndex(index);
        setEditDialogOpen(true);
    };

    const handleEditSave = () => {
        if (editIndex === null) return;
        const updatedItems = items.map((item, idx) => (idx === editIndex ? editText : item));
        setValue(fieldName, updatedItems, { shouldValidate: true });
        setEditDialogOpen(false);
        setEditIndex(null);
        setEditText("");
    };

    const handleDeleteStart = (index: number) => {
        setDeleteIndex(index);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (deleteIndex === null) return;
        const updatedItems = items.filter((_, idx) => idx !== deleteIndex);
        setValue(fieldName, updatedItems, { shouldValidate: true });
        setDeleteDialogOpen(false);
        setDeleteIndex(null);
    };

    const handleDialogClose = () => {
        setAddDialogOpen(false);
        setEditDialogOpen(false);
        setDeleteDialogOpen(false);
        setEditIndex(null);
        setDeleteIndex(null);
        setEditText("");
        setNewText("");
    };

    return (
        <Paper sx={{ mt: 2, pt: 2, pb: items.length > 0 ? 1.5 : 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">
                {cardTitle}
            </Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert severity="info" icon={<Info />} sx={{ maxWidth: "500px" }}>
                    <Typography>Ta sekcja jest opcjonalna. Możesz dodać do 10 elementów.</Typography>
                </Alert>

                {errors[fieldName] && (
                    <Typography color="error" sx={{ mt: 1 }}>
                        {errors[fieldName].message}
                    </Typography>
                )}

                <Box sx={{ maxWidth: "650px", mt: 1.7 }}>
                    <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>
                        {items.length > 0 ? `Dodano elementów: ${items.length}` : `Brak elementów`}
                    </Typography>

                    {items.length > 0 && (
                        <List sx={{ mt: 1, p: 0, "& > :last-child": { pb: 0 } }}>
                            {items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    sx={{ px: 0, py: 0.5, display: "flex", flexDirection: "row", lineHeight: 1 }}
                                >
                                    <Typography>{item}</Typography>
                                    <Box sx={{ ml: 1, display: "flex", flexDirection: "row", gap: 1.4 }}>
                                        <IconButton
                                            edge="end"
                                            aria-label="edit"
                                            onClick={() => handleEditStart(item, index)}
                                            size="small"
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                            onClick={() => handleDeleteStart(index)}
                                            size="small"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Add />}
                        onClick={handleAddStart}
                        disabled={items.length >= 10}
                        sx={{ borderRadius: "50px", width: "fit-content", mt: 1.7 }}
                    >
                        Dodaj
                    </Button>
                </Box>
            </Box>

            <Dialog open={addDialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                <DialogTitle>Dodaj nowy obiekt</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label=""
                        fullWidth
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Anuluj</Button>
                    <Button onClick={handleAddSave} variant="contained" disabled={!newText.trim()}>
                        Dodaj
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={editDialogOpen} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                <DialogTitle>Edytuj obiekt</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label=""
                        fullWidth
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Anuluj</Button>
                    <Button onClick={handleEditSave} variant="contained" disabled={!editText.trim()}>
                        Zapisz
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={deleteDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Potwierdź usunięcie</DialogTitle>
                <DialogContent>
                    <Typography>
                        Czy naprawdę chcesz usunąć {deleteIndex !== null ? items[deleteIndex] : ""}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} color="error" variant="contained">
                        Usuń
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}