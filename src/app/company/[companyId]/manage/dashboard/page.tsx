"use client";

import {Button, Paper, Typography} from "@mui/material";
import {Add, Folder, Search, Work} from "@mui/icons-material";
import {useParams, useRouter} from "next/navigation";
import Grid from "@mui/material/Grid2";
import React, {useCallback, useEffect, useState} from "react";
import DashboardLastVisitedCard, {
    LastVisitedCardItem
} from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardLastVisitedCard";
import DashboardSearchDialog from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardSearchDialog";
import ChooseFolderDialog from "@/app/_ui/ChooseFolderDialog";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import {
    deleteAllLastFolders,
    deleteAllLastJobs,
    deleteLastFolder,
    deleteLastJob,
    getLastFolders,
    getLastJobs
} from "@/lib/api/companies/companiesApi";


const mockCounters = {
    jobViewsToday: 15,
    jobViewsLastWeek: 120,
    applicationsToday: 3,
    applicationsLastWeek: 25,
};


// const initialJobs = [
//     {id: 1, title: "Programista Java", subtitle: "Poznań > Dział IT", path: "/job/1/manage"},
//     {id: 2, title: "Kierownik projektu", subtitle: "Warszawa > Dział IT", path: "/job/1/manage"},
//     {id: 3, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
//     {id: 4, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
//     {id: 5, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
//     {id: 6, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
//     {id: 7, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT", path: "/job/1/manage"},
// ];
//
//
// const initialFolders = [
//     {id: 1, title: "Poznań > Dział IT", path: "/folder/1/jobs" },
//     {id: 2, title: "Warszawa > Dział IT", path: "/folder/1/jobs" },
//     {id: 3, title: "Trójmiasto > Dział IT", path: "/folder/1/jobs" },
// ];
//
//
// const mockJobs = [
//     {id: 1, title: "Programista Java", subtitle: "Poznań > Dział IT"},
//     {id: 2, title: "Kierownik projektu", subtitle: "Warszawa > Dział IT"},
//     {id: 3, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
//     {id: 4, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
//     {id: 5, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
//     {id: 6, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
//     {id: 7, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
//     {id: 8, title: "Analityk danych", subtitle: "Trójmiasto > Dział IT"},
// ];
//
//
// const mockFolders = [
//     {id: 1, title: "Poznań > Dział IT"},
//     {id: 2, title: "Warszawa > Dział IT"},
//     {id: 3, title: "Trójmiasto > Dział IT"},
// ];


export default function CompanyDashboard() {
    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const router = useRouter();

    const [jobSearchDialogOpen, setJobSearchDialogOpen] = useState(false);
    const [folderSearchDialogOpen, setFolderSearchDialogOpen] = useState(false);
    const [chooseFolderDialogOpen, setChooseFolderDialogOpen] = useState(false);

    const [chooseFolderDialogMode, setChooseFolderDialogMode] = useState<"createJob" | "folder">("createJob");

    const { setCreateEditJobState } = useCreateEditJobStateStore();

    const [lastJobs, setLastJobs] = useState<LastVisitedCardItem[]>([]);
    const [lastFolders, setLastFolders] = useState<LastVisitedCardItem[]>([]);

    const fetchLastJobs = useCallback(async () => {
        const result = await getLastJobs(companyId);

        if (result.success) {

            const mappedItems = result.data.jobs
                .map((j): LastVisitedCardItem => (
                    { id: j.id, title: j.name, subtitle: j.folderName })
                );

            setLastJobs(mappedItems);
        }
    }, [companyId]);

    const fetchLastFolders = useCallback(async () => {
        const result = await getLastFolders(companyId);

        if (result.success) {
            const mappedItems = result.data.folders
                .map((j): LastVisitedCardItem => (
                    { id: j.id, title: j.name })
                );

            setLastFolders(mappedItems);
        }
    }, [companyId]);

    useEffect(() => {
        fetchLastJobs();
        fetchLastFolders();
    }, [fetchLastFolders, fetchLastJobs])

    const handleDeleteLastJob = async (jobId: number) => {
        const result = await deleteLastJob(companyId, jobId);

        if (result.success) {
            await fetchLastJobs();
        }
    };

    const handleDeleteAllJobs = async () => {
        const result = await deleteAllLastJobs(companyId);

        if (result.success) {
            setLastJobs(() => []);
        }
    };

    const handleDeleteLastFolder = async (folderId: number) => {
        const result = await deleteLastFolder(companyId, folderId);

        if (result.success) {
            await fetchLastFolders();
        }
    };

    const handleDeleteAllFolders = async () => {
        const result = await deleteAllLastFolders(companyId);

        if (result.success) {
            setLastFolders(() => []);
        }
    };

    const handleOpenJobSearchDialog = () => {
        setJobSearchDialogOpen(true);
    };

    const handleOpenFolderSearchDialog = () => {
        setFolderSearchDialogOpen(true);
    };

    const handleSearchDialogSubmit = (dest: "job" | "folder", id: number) => {
        switch (dest) {
            case "job":
                setCreateEditJobState("company");
                router.push(`/job/${encodeURIComponent(id)}/manage/stats`);
                break;
            case "folder":
                router.push(`/folder/${encodeURIComponent(id)}/manage/jobs`);
                break;
        }
    };

    const handleChooseFolderDialogSubmit = (dest: "createJob" | "folder", id: number, name: string) => {
        switch (dest) {
            case "createJob":
                setCreateEditJobState("folder", { id: id, name: name });
                router.push(`/company/${companyId}/create-job`);
                break;
            case "folder":
                router.push(`/folder/${encodeURIComponent(id)}/manage/jobs`);
                break;
        }
    };

    const handleOpenChooseFolderDialog = (mode: "createJob" | "folder") => {
        setChooseFolderDialogMode(mode);
        setChooseFolderDialogOpen(true);
    };

    const handleCloseDialogs = () => {
        setJobSearchDialogOpen(false);
        setFolderSearchDialogOpen(false);
        setChooseFolderDialogOpen(false);
    };

    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Add />}
                        onClick={() => handleOpenChooseFolderDialog("createJob")}
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
                        items={lastJobs}
                        noItemsPlaceholderText="Brak ogłoszeń do wyświetlenia"
                        constructPath={(id: number) => `/jobs/${id}/manage`}
                        onDelete={(id: number) => handleDeleteLastJob(id)}
                        onDeleteAll={handleDeleteAllJobs}
                        listItemAvatarIcon={<Work />}
                    />
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <DashboardLastVisitedCard
                        cardTitle="Ostatnio odwiedzane foldery"
                        items={lastFolders}
                        noItemsPlaceholderText="Brak folderów do wyświetlenia"
                        constructPath={(id: number) => `/folders/${id}/jobs`}
                        onDelete={(id: number) => handleDeleteLastFolder(id)}
                        onDeleteAll={handleDeleteAllFolders}
                        listItemAvatarIcon={<Folder />}
                    />
                </Grid>
            </Grid>

            <DashboardSearchDialog
                title="Wyszukiwanie ogłoszeń"
                open={jobSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(id: number) => handleSearchDialogSubmit("job", id)}
                data={lastJobs}
                listItemIcon={<Work />}
            />

            <DashboardSearchDialog
                title="Wyszukiwanie folderów"
                open={folderSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(id: number) => handleSearchDialogSubmit("folder", id)}
                data={lastFolders}
                listItemIcon={<Folder />}
            />

            <ChooseFolderDialog
                title="Wybierz folder"
                open={chooseFolderDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(id: number, name: string) => handleChooseFolderDialogSubmit(chooseFolderDialogMode, id, name)}
            />
        </>
    );
}