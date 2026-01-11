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
    ListItemAvatar,
    ListItemText,
    Paper,
    TextField,
    Typography,
    InputAdornment,
    CircularProgress,
    Avatar,
    MenuItem, ListItemButton,
} from "@mui/material";
import {Add, Close, Delete, Info, LocationOn} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CreateEditJobFormData } from "@/lib/schemas/createEditJobSchema";
import ReactCountryFlag from "react-country-flag";
import { getItemColor } from "@/lib/functions/listItemColors";
import { GetLocationsRequest } from "@/lib/api/locations/locationsApiInterfaces";
import { getLocations } from "@/lib/api/locations/locationsApi";
import { LocationDto } from "@/lib/api/locations/locationsApiDtos";

const countries = [
    { id: 1, code: "PL", label: "Polska" },
];

interface CreateEditJobLocationCardProps
{
    locations: LocationDto[];
}

export default function CreateEditJobLocationCard({ locations }: CreateEditJobLocationCardProps) {
    const { watch, setValue, formState: { errors } } = useFormContext<CreateEditJobFormData>();
    const locationIds = watch("locationIds") || [];

    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState<LocationDto | null>(null);
    const [searchText, setSearchText] = useState("");
    const [filteredLocations, setFilteredLocations] = useState<LocationDto[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const [listedLocations, setListedLocations] = useState<LocationDto[]>(locations);

    useEffect(() => {
        const fetchLocations = async () => {

            const request: GetLocationsRequest = {
                    countryId: 1,
                    query: searchText,
                    size: 5
                };

            const result = await getLocations(request);

            if (result.success) {
                setFilteredLocations(result.data.locations);
            }
            else {
                setFilteredLocations([]);
                setIsSearching(false);
            }
        };

        if (searchText.length > 0) {
            setIsSearching(true);

            const timeout = setTimeout(() => {
                
                fetchLocations();
                
                setIsSearching(false);

            }, 500);
            return () => clearTimeout(timeout);
        } else {
            setFilteredLocations([]);
            setIsSearching(false);
        }
    }, [searchText]);

    const handleAddStart = () => {
        setAddDialogOpen(true);
        setSearchText("");
    };

    const handleLocationSelect = (location: LocationDto) => {
        if (locationIds.includes(location.id) || locationIds.length >= 5) return;
        setValue("locationIds", [...locationIds, location.id], { shouldValidate: true });
        setAddDialogOpen(false);
        setSearchText("");
    };

    const handleClearSearch = () => {
        setSearchText("");
        setFilteredLocations([]);
    };

    const handleDeleteStart = (location: LocationDto) => {
        setSelectedLocation(location);
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (selectedLocation === null) return;
        const updatedLocations = locationIds.filter(id => id !== selectedLocation.id);
        setValue("locationIds", updatedLocations, { shouldValidate: true });
        setListedLocations(listedLocations => listedLocations.filter(l => l.id != selectedLocation.id));
        setDeleteDialogOpen(false);
        setSelectedLocation(null);
    };

    const handleDialogClose = () => {
        setAddDialogOpen(false);
        setDeleteDialogOpen(false);
        setSelectedLocation(null);
        setSearchText("");
    };

    return (
        <Paper sx={{ mt: 2, pt: 2, pb: (listedLocations.length > 0 ? 1.5 : 2), px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Lokalizacje</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert severity="info" icon={<Info />} sx={{ maxWidth: "500px" }}>
                    <Typography>Możesz dodać maksymalnie 5 lokalizacji.</Typography>
                </Alert>

                <TextField
                    id="select-country"
                    select
                    required
                    disabled
                    label="Kraj"
                    defaultValue="PL"
                    sx={{ minWidth: "320px", maxWidth: "400px", mt: 2 }}
                >
                    {countries.map((item) => (
                        <MenuItem key={item.id} value={item.code} sx={{ display: "flex", flexDirection: "row" }}>
                            <ReactCountryFlag countryCode={item.code} style={{ marginRight: 8 }} />
                            {item.label}
                        </MenuItem>
                    ))}
                </TextField>

                {errors.locationIds && (
                    <Typography color="error" sx={{ mt: 1 }}>
                        {errors.locationIds.message}
                    </Typography>
                )}

                <Box sx={{ maxWidth: "500px", mt: 1.7 }}>
                    <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>
                        {listedLocations.length > 0 ? `Dodano lokalizacji: ${listedLocations.length}` : `Brak lokalizacji`}
                    </Typography>

                    {listedLocations.length > 0 && (
                        <List sx={{ mt: 1, p: 0, '& > :last-child': { pb: 0 } }}>
                            {listedLocations.map((listedLocation) => (
                                <ListItem key={listedLocation.id} sx={{ px: 0, py: 0.5, lineHeight: 1 }}>
                                    <ListItemAvatar sx={{ minWidth: "25px", mr: 1.3 }}>
                                        <Avatar variant="rounded" sx={{ backgroundColor: getItemColor(listedLocation.id) }}>
                                            <LocationOn />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={listedLocation.fullName} />
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        onClick={() => handleDeleteStart(listedLocation)}
                                        size="small"
                                    >
                                        <Delete />
                                    </IconButton>
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
                        disabled={locationIds.length >= 5}
                        sx={{ borderRadius: "50px", width: "fit-content", mt: 1.7 }}
                    >
                        Dodaj lokalizację
                    </Button>
                </Box>
            </Box>

            <Dialog open={addDialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
                <DialogTitle variant="h5" sx={{ pb: 1 }}>Dodaj nową lokalizację</DialogTitle>
                <DialogContent sx={{ height: "524.8px", maxHeight: "524.8px", pb: 1, overflow: "hidden" }}>
                    <TextField
                        id="search-input"
                        sx={{ mt: 1.5 }}
                        placeholder="Szukaj lokalizacji..."
                        variant="outlined"
                        fullWidth
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        autoFocus
                        InputProps={{
                            endAdornment: searchText.length > 0 && (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClearSearch} size="small">
                                        <Close />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: isSearching && (
                                <InputAdornment position="start">
                                    <CircularProgress size={20} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {searchText.length > 0 ? (
                        <>
                            <Typography variant="body2" sx={{ mt: 1.2 }}>
                                Znaleziono elementów: {filteredLocations.length}
                            </Typography>
                            <List sx={{ mt: 0.8, py: 0, px: 0, height: "390px", overflowY: "auto" }}>
                                {filteredLocations.length > 0 ? (
                                    filteredLocations.map((loc) => (
                                        <ListItem
                                            key={loc.id}
                                            disableGutters
                                            sx={{ py: 0 }}
                                        >
                                            <ListItemButton
                                                sx={{py: 1.2}}
                                                disableGutters
                                                onClick={() => handleLocationSelect(loc)}
                                            >
                                                <ListItemAvatar sx={{ minWidth: "40px", mr: 1.3 }}>
                                                    <Avatar variant="rounded" sx={{ backgroundColor: getItemColor(loc.id) }}>
                                                        <LocationOn />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={loc.fullName}
                                                    slotProps={{
                                                        primary: {color: "black"}
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
                        </>
                    ) : (
                        <Typography color="text.secondary" sx={{ mt: 4, mb: 2, textAlign: "center" }}>
                            Brak wyników.
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions sx={{ px: 2, pb: 1, pt: 0.5 }}>
                    <Button onClick={handleDialogClose} sx={{ fontSize: "1.1em" }}>
                        Anuluj
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={deleteDialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Potwierdź usunięcie</DialogTitle>
                <DialogContent>
                    <Typography>
                        Czy na pewno chcesz usunąć lokalizację {selectedLocation?.fullName}?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Anuluj</Button>
                    <Button onClick={handleDeleteConfirm} color="error" variant="contained">
                        Usuń
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
}