"use client";

import {Alert, Box, Button, FormGroup, List, Paper, Stack, Switch, Typography} from "@mui/material";
import {Add, Info, Refresh} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import React, {useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";


const expiryOptions = [
    { id: 1, title: "0-4 dni", description: "Wartość: 10 kredytów" },
    { id: 2, title: "5-30 dni", description: "Wartość: 20 kredytów" },
    { id: 3, title: "31-60 dni", description: "Wartość: 30 kredytów" },
    { id: 4, title: "61-90 dni", description: "Wartość: 40 kredytów" },
];


export default function CreateEditJobPublicationIntervalCard() {

    const { control, formState: { errors } } = useFormContext<CreateEditJobFormData>();
    const [customDateTimeEnabled, setCustomDateTimeEnabled] = useState<boolean>(false);

    const handleCustomDateTimeSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomDateTimeEnabled(event.target.checked);
    };

    return (
        <Paper sx={{ mt: 2, py: 2, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Data i czas wygaśnięcia</Typography>
            <Stack mt={1.5} direction="column">
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        W czasie publikacji ogłoszenia konto firmowe musi być zasilone kwotą odpowiadającą okresowi publikacji.
                    </Typography>
                    <List>
                        <Typography>
                            — od 1 do 5 dni: 35 zł
                        </Typography>
                        <Typography>
                            — od 6 do 30 dni: 60 zł
                        </Typography>
                        <Typography>
                            — od 31 do 60 dni: 90 zł
                        </Typography>
                        <Typography>
                            — od 61 do 90 dni: 120 zł
                        </Typography>
                    </List>
                </Alert>

                <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1.3 }}>
                    <Stack direction="column">

                        <Typography sx={{ fontSize: "1.05em", fontWeight: "500" }}>
                            Stan konta dla wybranej daty:
                        </Typography>
                        <Typography color="primary" sx={{ fontSize: "1.2em", fontWeight: "bold", color: "green" }}>
                            wystarczający
                        </Typography>

                    </Stack>

                    <Button
                        variant="outlined"
                        color="primary"
                        // size="large"
                        startIcon={<Refresh />}
                        // onClick={() => setIsDialogOpen(true)}
                        // disabled={items.length >= 10}
                        sx={{ borderRadius: "50px", width: "fit-content" }}
                    >
                        Odśwież
                    </Button>

                </Stack>

                <Box display="flex" flexDirection="column" gap={2} sx={{ maxWidth: "650px", mt: 2.3 }}>
                    {/* <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={customDateTimeEnabled}
                                    onChange={handleCustomDateTimeSwitchChange}
                                />
                            }
                            label="Ustaw wcześniejszą datę i czas"
                        />
                    </FormGroup> */}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1.5}>
                            <Controller
                                name="dateTimeExpiringUtc"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <DatePicker
                                            label="Wybierz datę"
                                            value={field.value}
                                            onChange={(newValue) => field.onChange(newValue)}
                                            sx={{ flex: "1 1 auto" }}
                                        />
                                        <TimePicker
                                            label="Wybierz czas"
                                            value={field.value}
                                            onChange={(newValue) => field.onChange(newValue)}
                                            sx={{ flex: "1 1 auto" }}
                                        />
                                    </>
                                )}
                            />
                        </Box>
                    </LocalizationProvider>
                    {errors.dateTimeExpiringUtc && (
                        <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                            {errors.dateTimeExpiringUtc.message}
                        </Typography>
                    )}
                </Box>
            </Stack>

        </Paper>
    );
}