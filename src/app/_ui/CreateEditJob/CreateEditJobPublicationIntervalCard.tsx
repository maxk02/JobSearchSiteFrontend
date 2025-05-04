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
import {Controller, useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";


const expiryOptions = [
    { id: 1, title: "0-7 dni", description: "Wartość: 10 kredytów" },
    { id: 2, title: "8-30 dni", description: "Wartość: 20 kredytów" },
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
                        <Controller
                            name="timeRangeOption"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    aria-labelledby="time-range-options"
                                    value={field.value}
                                    onChange={(e) => field.onChange(Number(e.target.value))}
                                >
                                    <Stack direction="column" spacing={0.3}>
                                        {expiryOptions.map((item) => (
                                            <Stack direction="row" alignItems="center" key={item.id}>
                                                <FormControlLabel
                                                    value={item.id}
                                                    control={<Radio />}
                                                    label={undefined}
                                                    sx={{ mr: 0 }}
                                                />
                                                <Stack direction="row" alignItems="center" flexWrap="wrap">
                                                    <Typography sx={{ mr: 0.8 }} lineHeight={1}>
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" lineHeight={1}>
                                                        {item.description}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </RadioGroup>
                            )}
                        />
                    </FormControl>
                    {errors.timeRangeOption && (
                        <Typography color="error" variant="caption" sx={{ mt: 1 }}>
                            {errors.timeRangeOption.message}
                        </Typography>
                    )}
                </Box>

                <Box display="flex" flexDirection="column" gap={2} sx={{ maxWidth: "650px", mt: 0.5 }}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={customDateTimeEnabled}
                                    onChange={handleCustomDateTimeSwitchChange}
                                />
                            }
                            label="Ustaw wcześniejszą datę i czas"
                        />
                    </FormGroup>
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
                                            disabled={!customDateTimeEnabled}
                                        />
                                        <TimePicker
                                            label="Wybierz czas"
                                            value={field.value}
                                            onChange={(newValue) => field.onChange(newValue)}
                                            sx={{ flex: "1 1 auto" }}
                                            disabled={!customDateTimeEnabled}
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
            </Box>
        </Paper>
    );
}