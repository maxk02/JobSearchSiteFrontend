"use client";

import {Button, Paper, Typography} from "@mui/material";
import {Add, Search} from "@mui/icons-material";
import {useParams} from "next/navigation";
import Grid from "@mui/material/Grid2";
import React from "react";
import LastVisitedCard from "@/app/company/[companyId]/manage/dashboard/_ui/LastVisitedCard";


const mockCounters = {
    jobViewsToday: 15,
    jobViewsLastWeek: 120,
    applicationsToday: 3,
    applicationsLastWeek: 25,
};


const initialJobs = [
    {id: 1, title: "Programista Java", subtitle: "Poznań, Wielkopolskie", path: "/job/1/manage"},
    {id: 2, title: "Kierownik projektu", subtitle: "Warszawa, Mazowieckie", path: "/job/1/manage"},
    {id: 3, title: "Analityk danych", subtitle: "Gdańsk, Pomorskie", path: "/job/1/manage"},
];


const initialFolders = [
    {id: 1, title: "Warszawa", path: "/folder/1/jobs" },
    {id: 2, title: "Dział IT", path: "/folder/1/jobs" },
    {id: 3, title: "Katowice", path: "/folder/1/jobs" },
];


export default function CompanyDashboard() {
    const { companyId } = useParams();


    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Add />}
                        href={`/company/${companyId}/create-job`}
                        sx={{ py: 1.5, fontSize: "1.05em", boxShadow: 3, backgroundColor: 'white' }}
                        fullWidth
                    >
                        Nowa oferta pracy
                    </Button>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Search />}
                        onClick={() => {}}
                        sx={{ py: 1.5, fontSize: "1.05em", boxShadow: 3, backgroundColor: 'white' }}
                        fullWidth
                    >
                        Wyszukaj ofertę pracy
                    </Button>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Search />}
                        href={`/company/${companyId}/manage/employees`}
                        sx={{ py: 1.5, fontSize: "1.05em", boxShadow: 3, backgroundColor: 'white' }}
                        fullWidth
                    >
                        Wyszukaj folder
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid size={{xs: 12, sm: 6, md: 3}}>
                    <Paper elevation={3} sx={{p: 2, textAlign: "center"}}>
                        <Typography variant="h6">Wyświetlenia ofert</Typography>
                        <Typography variant="h6">(dzisiaj)</Typography>
                        <Typography variant="h4"
                                    sx={{mt: 1, fontWeight: "500"}}>{mockCounters.jobViewsToday}</Typography>
                    </Paper>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 3}}>
                    <Paper elevation={3} sx={{p: 2, textAlign: "center"}}>
                        <Typography variant="h6">Wyświetlenia ofert</Typography>
                        <Typography variant="h6">(ostatni tydzień)</Typography>
                        <Typography variant="h4"
                                    sx={{mt: 1, fontWeight: "500"}}>{mockCounters.jobViewsLastWeek}</Typography>
                    </Paper>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 3}}>
                    <Paper elevation={3} sx={{p: 2, textAlign: "center"}}>
                        <Typography variant="h6">Nowe aplikacje</Typography>
                        <Typography variant="h6">(dzisiaj)</Typography>
                        <Typography variant="h4"
                                    sx={{mt: 1, fontWeight: "500"}}>{mockCounters.applicationsToday}</Typography>
                    </Paper>
                </Grid>
                <Grid size={{xs: 12, sm: 6, md: 3}}>
                    <Paper elevation={3} sx={{p: 2, textAlign: "center"}}>
                        <Typography variant="h6">Nowe aplikacje</Typography>
                        <Typography variant="h6">(ostatni tydzień)</Typography>
                        <Typography variant="h4"
                                    sx={{mt: 1, fontWeight: "500"}}>{mockCounters.applicationsLastWeek}</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 6}}>
                    <LastVisitedCard
                        cardTitle="Ostatnio odwiedzane ogłoszenia"
                        initialItems={initialJobs}
                        noItemsPlaceholderText="Brak ogłoszeń do wyświetlenia"
                        onDelete={() => {}}
                        onDeleteAll={() => {}}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <LastVisitedCard
                        cardTitle="Ostatnio odwiedzane foldery"
                        initialItems={initialFolders}
                        noItemsPlaceholderText="Brak folderów do wyświetlenia"
                        onDelete={() => {}}
                        onDeleteAll={() => {}}
                    />
                </Grid>
            </Grid>
        </>
    );
}