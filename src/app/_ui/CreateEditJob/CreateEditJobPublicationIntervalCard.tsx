"use client";

import {Alert, Box, Button, FormGroup, Icon, List, Paper, Stack, Switch, Typography} from "@mui/material";
import {Add, Info, Refresh, Warning} from "@mui/icons-material";
import {LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import React, {useState} from "react";
import { differenceInCalendarDays, isValid, addDays, isSameDay } from "date-fns";
import {Controller, useFormContext, useWatch} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";


const calculatePrice = (days: number): number => {
    if (days <= 0) return 0;
    if (days <= 5) return 35;
    if (days <= 30) return 60;
    if (days <= 60) return 90;
    if (days <= 90) return 120;
    return 120; // Default cap
};

interface CreateEditJobPublicationIntervalCardProps {
    dateTimePublishedUtc?: Date;
    maxDateTimeExpiringUtcEverSet?: Date;
}

export default function CreateEditJobPublicationIntervalCard({ dateTimePublishedUtc, maxDateTimeExpiringUtcEverSet } : CreateEditJobPublicationIntervalCardProps) {

    const { control, formState: { errors } } = useFormContext<CreateEditJobFormData>();

    const watchedExpiryDate = useWatch({
        control,
        name: "dateTimeExpiringUtc",
    });

    const currentDateTime = new Date();

    const isValidDate = watchedExpiryDate && isValid(new Date(watchedExpiryDate));

    let durationInDays = 0;

    if (maxDateTimeExpiringUtcEverSet) {
        durationInDays = isValidDate ? differenceInCalendarDays(new Date(watchedExpiryDate), maxDateTimeExpiringUtcEverSet) : 0;
    } else {
        durationInDays = isValidDate ? differenceInCalendarDays(new Date(watchedExpiryDate), currentDateTime) : 0;
    }

    const estimatedPrice = calculatePrice(durationInDays);

    const currentBalance = 100;
    const isBalanceSufficient = currentBalance >= estimatedPrice;

    // date picker locking
    const minDateTime = dateTimePublishedUtc ?? new Date();
    const maxDateTime = addDays(minDateTime, 90); // 90 days from now

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

                <Stack direction="row" gap={2} sx={{ alignItems: "center", mt: 1.8 }}>
                    <Stack direction="column">

                        <Typography sx={{ fontSize: "1.05em", fontWeight: "500", lineHeight: 1 }}>
                            Stan konta dla wybranej daty:
                        </Typography>
                        <Typography
                            color="primary"
                            sx={{
                                fontSize: "1.2em",
                                fontWeight: "bold",
                                color: isBalanceSufficient ? "green" : "error.main"
                            }}
                        >
                            {isBalanceSufficient ? "wystarczający" : "niewystarczający"}
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

                    {estimatedPrice > 0 && 
                        <Stack direction="row" sx={{ alignItems: "center", ml: 2.2 }}>

                            <Icon color="warning" sx={{ mb: 1, p: 0 }}>
                                <Warning />
                            </Icon>

                            <Stack direction="column" sx={{ ml: 1.6 }}>

                                <Typography sx={{ fontSize: "1.05em", fontWeight: "500", lineHeight: 1 }}>
                                    Zmiana przedziału czasowego:
                                </Typography>
                                <Typography color="warning" sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                    dopłata {estimatedPrice} PLN
                                </Typography>

                            </Stack>

                        </Stack>
                    }

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
                                            minDate={minDateTime}
                                            maxDate={maxDateTime}
                                        />
                                        <TimePicker
                                            label="Wybierz czas"
                                            value={field.value}
                                            onChange={(newValue) => field.onChange(newValue)}
                                            sx={{ flex: "1 1 auto" }}
                                            minTime={
                                                field.value && isSameDay(field.value, minDateTime)
                                                    ? minDateTime
                                                    : undefined
                                            }
                                            // If the selected date is the Max Date (90th day), block future hours/minutes
                                            maxTime={
                                                field.value && isSameDay(field.value, maxDateTime)
                                                    ? maxDateTime
                                                    : undefined
                                            }
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