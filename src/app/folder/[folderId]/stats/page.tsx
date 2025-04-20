"use client";

import {Box, Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {useCurrentJobFolderStore} from "@/lib/stores/currentJobFolderStore";
import StatsDateRangePaperButton from "@/app/_ui/StatsDateRangePaperButton";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";


const mockJobViewsData = [
    { month: "Listopad", views: 200 },
    { month: "Grudzień", views: 250 },
    { month: "Styczeń", views: 180 },
    { month: "Luty", views: 300 },
    { month: "Marzec", views: 270 },
];

const mockApplicationsData = [
    { month: "Listopad", applications: 10 },
    { month: "Grudzień", applications: 15 },
    { month: "Styczeń", applications: 8 },
    { month: "Luty", applications: 20 },
    { month: "Marzec", applications: 18 },
];


const timePeriods = [
    "Ostatni dzień",
    "Ostatni tydzień",
    "Ostatni miesiąc",
    "Ostatni rok",
];


export default function FolderStatsPage() {

    const { currentJobFolderState } = useCurrentJobFolderStore();

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">
                {currentJobFolderState?.name}
            </Typography>

            <Typography variant="body1" mt={1}>
                {currentJobFolderState?.description}
            </Typography>

            <Box sx={{ pt: 0.5, pb: 2, px: 2.1 }}>
                <Stack sx={{ maxWidth: 800, mt: 2 }}>
                    <StatsDateRangePaperButton options={timePeriods} />

                    <Paper sx={{ p: 2, mt: 2, maxWidth: "800px" }}>
                        <Typography variant="h6" gutterBottom>
                            Wyświetlenia ofert
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockJobViewsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="views" stroke="#8884d8" name="Wyświetlenia" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>

                    <Paper sx={{ p: 2, mt: 2, maxWidth: "800px" }}>
                        <Typography variant="h6" gutterBottom>
                            Aplikacje
                        </Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={mockApplicationsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="applications" stroke="#82ca9d" name="Aplikacje" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Stack>
            </Box>
        </>
    );
}
