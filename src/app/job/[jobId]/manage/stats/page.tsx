"use client";

import React from "react";
import {Paper, Stack, Typography} from "@mui/material";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import StatsDateRangePaperButton from "@/app/_ui/StatsDateRangePaperButton";


const mockJobViewsData = [
    { month: "12 sty", views: 200 },
    { month: "13 sty", views: 250 },
    { month: "14 sty", views: 180 },
    { month: "15 sty", views: 300 },
    { month: "16 sty", views: 270 },
    { month: "17 sty", views: 230 },
    { month: "18 sty", views: 210 },
];

const mockApplicationsData = [
    { month: "12 sty", applications: 10 },
    { month: "13 sty", applications: 15 },
    { month: "14 sty", applications: 8 },
    { month: "15 sty", applications: 20 },
    { month: "16 sty", applications: 18 },
    { month: "17 sty", applications: 15 },
    { month: "18 sty", applications: 14 },
];


const timePeriods = [
    "Ostatni dzień",
    "Ostatni tydzień",
    "Ostatni miesiąc",
    "Ostatni rok",
];


export default function JobStatsPage() {


    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Statystyki</Typography>
            {/*<Typography mt={1}>Tutaj możesz obejrzeć statystyki tego ogłoszenia pracy.</Typography>*/}

            <Stack sx={{ maxWidth: 800, mt: 1.5 }}>
                <StatsDateRangePaperButton options={timePeriods} defaultOption="Ostatni tydzień" />

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
