"use client";

import {Alert, Box, FormGroup, Paper, Stack, Switch, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFnsV3";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import React, {useState} from "react";


const expiryOptions = [
    { title: "0-4 dni", description: "Wartość: 10 kredytów" },
    { title: "5-30 dni", description: "Wartość: 20 kredytów" },
    { title: "31-60 dni", description: "Wartość: 30 kredytów" },
    { title: "61-90 dni", description: "Wartość: 40 kredytów" },
];


export default function JobPublicationIntervalCard() {
    const [dateValue, setDateValue] = useState<Date | null>(new Date());
    const [timeValue, setTimeValue] = useState<Date | null>(new Date());
    const [customDateTimeEnabled, setCustomDateTimeEnabled] = useState<boolean>(false);

    const handleCustomDateTimeSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;
        setCustomDateTimeEnabled(newValue);
    };

    return (
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
    );
}