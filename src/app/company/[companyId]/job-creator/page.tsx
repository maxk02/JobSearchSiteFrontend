"use client";

import {
    Alert,
    Box,
    Button,
    Checkbox, FormGroup,
    IconButton, List, ListItem,
    MenuItem, Paper,
    Stack, Switch,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {Add, Delete, Edit, Info} from "@mui/icons-material";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

const expiryOptions = [
    { title: "0-4 dni", description: "Wartość: 10 kredytów" },
    { title: "5-30 dni", description: "Wartość: 20 kredytów" },
    { title: "31-60 dni", description: "Wartość: 30 kredytów" },
    { title: "61-90 dni", description: "Wartość: 40 kredytów" },
];

const employmentTypeOptions = [
    "W biurze",
    "Zdalnie",
    "Hybrydowo (w biurze/zdalnie)",
    "Z wyjazdami",
    "Pełny etat",
    "Częściowy etat"
];

const contractOptions = [
    "Umowa zlecenie",
    "Umowa o dzieło",
    "Umowa o pracę",
    "Kontrakt B2B",
];

const timeUnits = [
    "na godzinę (/godz.)",
    "miesięcznie (/mies.)",
    "za projekt (/projekt)",
];

const wageUnits = [
    "netto",
    "brutto",
];

// Define the item interface
interface ListItemType {
    id: number;
    text: string;
}

const initialItems: ListItemType[] = [
    { id: 1, text: "interakcja z klientami" },
    { id: 2, text: "interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami" },
    { id: 3, text: "składanie zamówień" },
    { id: 4, text: "interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami interakcja z klientami" },
];

export default function CreateJobPage() {
    const [dateValue, setDateValue] = useState<Date | null>(new Date());
    const [timeValue, setTimeValue] = useState<Date | null>(new Date());
    const [customDateTimeEnabled, setCustomDateTimeEnabled] = useState<boolean>(false);

    const handleCustomDateTimeSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;
        setCustomDateTimeEnabled(newValue);
    };


    const [items, setItems] = useState<ListItemType[]>(initialItems);
    // const [newItem, setNewItem] = useState<string>('');
    const [, setEditText] = useState<string>('');

    // Add new item
    // const handleAdd = (): void => {
    //     if (newItem.trim()) {
    //         setItems([...items, { id: Date.now(), text: newItem.trim() }]);
    //         setNewItem('');
    //     }
    // };

    // Start editing an item
    const handleEditStart = (item: ListItemType): void => {
        setEditText(item.text);
    };

    // // Save edited item
    // const handleEditSave = (id: number): void => {
    //     setItems(items.map(item =>
    //         item.id === id ? { ...item, text: editText } : item
    //     ));
    //     setEditText('');
    // };

    // Delete item
    const handleDelete = (id: number): void => {
        setItems(items.filter(item => item.id !== id));
    };


    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
            <Typography mt={1}>O</Typography>


            <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
                <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Tytuł i opis</Typography>
                <Box display="flex" flexDirection="column" gap={1.5} mt={1.5}>
                    <TextField required label="Tytuł" variant="outlined" sx={{ maxWidth: "500px" }} />
                    <TextField multiline rows={5} label="Krótki opis" variant="outlined" sx={{ maxWidth: "650px" }} />
                </Box>
            </Paper>

            <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
                <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Przedział czasowy</Typography>
                <Box mt={1.5} display="flex" flexDirection="column">
                    <Alert
                        severity="info"
                        icon={<Info />}
                        sx={{ maxWidth: "500px" }}
                    >
                        <Typography>
                            Możesz również ustawić wcześniejszą datę i czas wygaśnięcia.
                            W czasie publikacji ogłoszenia konto firmowe musi być zasilone odpowiednią kwotą.
                        </Typography>
                    </Alert>

                    <Box sx={{ pt: 0.4, pb: 0.4, maxWidth: "500px" }}>
                        <FormControl>
                            {/*<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>*/}
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <Stack direction="column" spacing={0.3}>
                                    {expiryOptions.map((item, index) => (
                                        <Stack direction="row" alignItems="center" key={index}>
                                            <FormControlLabel
                                                value="option1"
                                                control={<Radio/>}
                                                label={undefined}
                                                sx={{ mr: 0 }}
                                            />
                                            <Stack direction="row" alignItems="center" flexWrap="wrap">
                                                <Typography sx={{ mr: 0.8 }} lineHeight={1}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" lineHeight={1} sx={{ p: 0 }}>
                                                    {item.description}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box display="flex" flexDirection="column" gap={2} sx={{ maxWidth: "650px", mt: 0.5 }}>
                        <FormGroup>
                            <FormControlLabel control={<Switch defaultChecked={false} onChange={handleCustomDateTimeSwitchChange} />}
                                              label="Ustaw wcześniejszą date i czas"
                            />
                        </FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1.5}>
                                <DatePicker
                                    label="Wybierz datę"
                                    value={dateValue}
                                    onChange={(newValue: Date | null) => setDateValue(newValue)}
                                    sx={{ flex: "1 1 auto" }}
                                    disabled={!customDateTimeEnabled}
                                />
                                <TimePicker
                                    label="Wybierz czas"
                                    value={timeValue}
                                    onChange={(newValue: Date | null) => setTimeValue(newValue)}
                                    sx={{ flex: "1 1 auto" }}
                                    disabled={!customDateTimeEnabled}
                                />
                            </Box>
                        </LocalizationProvider>
                    </Box>
                </Box>
            </Paper>

            <Paper sx={{ mt: 2, pt: 2, pb: 1, px: 1.5 }}>
                <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Rodzaj zatrudnienia</Typography>
                <Box mt={1.5} display="flex" flexDirection="column">
                    <Alert
                        severity="info"
                        icon={<Info />}
                        sx={{ maxWidth: "500px" }}
                    >
                        <Typography>
                            Możesz wybrać jedną lub kilka opcji lub pominąć tę sekcję.
                        </Typography>
                    </Alert>

                    <Box sx={{ mt: 0.4, maxWidth: "500px" }}>
                        <FormControl>
                            <FormGroup>
                                {employmentTypeOptions.map((item, index) => (
                                    <FormControlLabel control={<Checkbox />} key={index} label={item} />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>

            <Paper sx={{ mt: 2, pt: 2, pb: 1, px: 1.5 }}>
                <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Umowa zatrudnienia</Typography>
                <Box mt={1.5} display="flex" flexDirection="column">
                    <Alert
                        severity="info"
                        icon={<Info />}
                        sx={{ maxWidth: "500px" }}
                    >
                        <Typography>
                            Możesz wybrać jedną lub kilka opcji lub pominąć tę sekcję.
                        </Typography>
                    </Alert>

                    <Box sx={{ mt: 0.4, maxWidth: "500px" }}>
                        <FormControl>
                            <FormGroup>
                                {contractOptions.map((item, index) => (
                                    <FormControlLabel control={<Checkbox />} key={index} label={item} />
                                ))}
                            </FormGroup>
                        </FormControl>
                    </Box>
                </Box>
            </Paper>

            <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
                <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Dane o wynagrodzeniu</Typography>
                <Box mt={1.5} display="flex" flexDirection="column">
                    <Alert
                        severity="info"
                        icon={<Info />}
                        sx={{ maxWidth: "500px" }}
                    >
                        <Typography>
                            Ta sekcja jest opcjonalna.
                        </Typography>
                    </Alert>

                    <Box sx={{ mt: 1.5, display: "flex", flexDirection: "row", flexWrap: "wrap",
                        gap: 1.5, maxWidth: "500px" }}>
                        <TextField label="Od" variant="outlined" />
                        <TextField label="Do" variant="outlined" />
                        <TextField
                            id="select-time-unit"
                            select
                            required
                            label="Wybierz jednostkę czasu"
                            defaultValue="na godzinę (/godz.)"
                            sx={{ minWidth: "320px" }}
                        >
                            {timeUnits.map((item, index) => (
                                <MenuItem key={index} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="select-wage-type"
                            select
                            required
                            label="Wybierz wymiar wynagrodzenia"
                            defaultValue="netto"
                            sx={{ minWidth: "320px" }}
                        >
                            {wageUnits.map((item, index) => (
                                <MenuItem key={index} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </Box>
            </Paper>

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
                </Box>
            </Paper>
        </>
    );
}
