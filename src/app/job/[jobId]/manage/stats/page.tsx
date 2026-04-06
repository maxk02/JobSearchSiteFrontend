"use client";

import React from "react";
import {Paper, Stack, Typography} from "@mui/material";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import StatsDateRangePaperButton from "@/app/_ui/StatsDateRangePaperButton";


const mockJobViewsData = [
    { month: "30.03", views: 200 },
    { month: "31.03", views: 250 },
    { month: "01.04", views: 180 },
    { month: "02.04", views: 300 },
    { month: "03.04", views: 270 },
    { month: "04.04", views: 230 },
    { month: "05.04", views: 210 },
];

const mockApplicationsData = [
    { month: "30.03", applications: 10 },
    { month: "31.03", applications: 15 },
    { month: "01.04", applications: 8 },
    { month: "02.04", applications: 20 },
    { month: "03.04", applications: 18 },
    { month: "04.04", applications: 15 },
    { month: "05.04", applications: 14 },
];


const timePeriods = [
    "Ostatni dzień",
    "Ostatni tydzień",
    "Ostatni miesiąc",
];


export default function JobStatsPage() {


    return (
        <>
            <Stack direction="row" sx={{ justifyContent: "space-between", maxWidth: 800 }}>
                <Typography variant="h4" fontWeight={600} color="primary">Statystyki</Typography>
                <StatsDateRangePaperButton options={timePeriods} defaultOption="Ostatni tydzień" />
            </Stack>

            <Typography variant="h5" fontWeight={600} mt={0.5}>Magazynier z uprawnieniami UDT</Typography>

            {/*<Typography mt={1}>Tutaj możesz obejrzeć statystyki tego ogłoszenia pracy.</Typography>*/}

            <Stack sx={{ maxWidth: 800 }}>
                <Paper sx={{ p: 2, mt: 2, maxWidth: "800px" }}>
                    <Typography variant="h6" gutterBottom>
                        Wyświetlenia
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
        </>
    );
}
