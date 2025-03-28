"use client";

import {Button, Paper, Typography} from "@mui/material";
import {Add, Folder, Search, Work} from "@mui/icons-material";
import {useParams} from "next/navigation";
import Grid from "@mui/material/Grid2";
import React, {useState} from "react";
import DashboardLastVisitedCard from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardLastVisitedCard";
import DashboardSearchDialog from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardSearchDialog";
import ChooseFolderDialog from "@/app/company/[companyId]/manage/dashboard/_ui/ChooseFolderDialog";


const mockCounters = {
    jobViewsToday: 15,
    jobViewsLastWeek: 120,
    applicationsToday: 3,
    applicationsLastWeek: 25,
};


const initialJobs = [
    {id: 1, title: "Programista Java", subtitle: "Poznań > Dział IT", path: "/job/1/manage"},
    {id: 2, title: "Kierownik projektu", subtitle: "Warszawa > Dział IT", path: "/job/1/manage"},
    {id: 3, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
    {id: 4, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
    {id: 5, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
    {id: 6, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
    {id: 7, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
];


const initialFolders = [
    {id: 1, title: "Poznań > Dział IT", path: "/folder/1/jobs" },
    {id: 2, title: "Warszawa > Dział IT", path: "/folder/1/jobs" },
    {id: 3, title: "Trójmiasto > Dział IT", path: "/folder/1/jobs" },
];


const mockJobs = [
    {id: 1, title: "Programista Java", subtitle: "Poznań > Dział IT"},
    {id: 2, title: "Kierownik projektu", subtitle: "Warszawa > Dział IT"},
    {id: 3, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
    {id: 4, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
    {id: 5, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
    {id: 6, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
    {id: 7, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
    {id: 8, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
];


const mockFolders = [
    {id: 1, title: "Poznań > Dział IT"},
    {id: 2, title: "Warszawa > Dział IT"},
    {id: 3, title: "Trójmiasto > Dział IT"},
];

const mockFoldersForChooseFolder = [
    {id: 1, title: "Dział IT"},
    {id: 2, title: "Warszawa"},
    {id: 3, title: "Trójmiasto"},
    {id: 4, title: "Trójmiasto"},
    {id: 5, title: "Trójmiasto"},
    {id: 6, title: "Trójmiasto"},
    {id: 7, title: "Trójmiasto"},
    {id: 8, title: "Trójmiasto"},
    {id: 9, title: "Trójmiasto"},
    {id: 10, title: "Trójmiasto"},
];


export default function CompanyDashboard() {
    const { companyId } = useParams();

    const [jobSearchDialogOpen, setJobSearchDialogOpen] = useState(false);
    const [folderSearchDialogOpen, setFolderSearchDialogOpen] = useState(false);
    const [chooseFolderDialogOpen, setChooseFolderDialogOpen] = useState(false);


    const handleOpenJobSearchDialog = () => {
        setJobSearchDialogOpen(true);
    };

    const handleCloseJobSearchDialog = () => {
        setJobSearchDialogOpen(false);
    };

    const handleOpenFolderSearchDialog = () => {
        setFolderSearchDialogOpen(true);
    };

    const handleCloseFolderSearchDialog = () => {
        setFolderSearchDialogOpen(false);
    };

    const handleOpenChooseFolderDialog = () => {
        setChooseFolderDialogOpen(true);
    };

    const handleCloseChooseFolderhDialog = () => {
        setChooseFolderDialogOpen(false);
    };

    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Add />}
                        onClick={handleOpenChooseFolderDialog}
                        // href={`/company/${companyId}/create-job`}
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
                        onClick={handleOpenJobSearchDialog}
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
                        onClick={handleOpenFolderSearchDialog}
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
                    <DashboardLastVisitedCard
                        cardTitle="Ostatnio odwiedzane ogłoszenia"
                        initialItems={initialJobs}
                        noItemsPlaceholderText="Brak ogłoszeń do wyświetlenia"
                        onDelete={() => {}}
                        onDeleteAll={() => {}}
                        listItemAvatarIcon={<Work />}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <DashboardLastVisitedCard
                        cardTitle="Ostatnio odwiedzane foldery"
                        initialItems={initialFolders}
                        noItemsPlaceholderText="Brak folderów do wyświetlenia"
                        onDelete={() => {}}
                        onDeleteAll={() => {}}
                        listItemAvatarIcon={<Folder />}
                    />
                </Grid>
            </Grid>

            <DashboardSearchDialog
                title="Wyszukiwanie ogłoszeń"
                open={jobSearchDialogOpen}
                onClose={handleCloseJobSearchDialog}
                data={mockJobs}
                listItemIcon={<Work />}
            />

            <DashboardSearchDialog
                title="Wyszukiwanie folderów"
                open={folderSearchDialogOpen}
                onClose={handleCloseFolderSearchDialog}
                data={mockFolders}
                listItemIcon={<Folder />}
            />

            <ChooseFolderDialog
                title="Wybierz folder"
                open={chooseFolderDialogOpen}
                onClose={handleCloseChooseFolderhDialog}
                data={mockFoldersForChooseFolder}
                listItemIcon={<Folder />}
            />
        </>
    );
}