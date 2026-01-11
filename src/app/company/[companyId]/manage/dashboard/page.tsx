"use client";

import {Button, Paper, Typography} from "@mui/material";
import {Add, Search, Work} from "@mui/icons-material";
import {useParams, useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import React, {useCallback, useEffect, useState} from "react";
import DashboardLastVisitedCard, {
    LastVisitedCardItem
} from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardLastVisitedCard";
import DashboardSearchDialog, {
    DashboardSearchDialogItem
} from "@/app/company/[companyId]/manage/dashboard/_ui/DashboardSearchDialog";
import {
    removeCompanyAllLastVisitedJobs,
    removeCompanyLastVisitedJob,
    searchCompanySharedJobs,
    getCompanyLastVisitedJobs
} from "@/lib/api/companies/companiesApi";
import { SearchCompanySharedJobsRequest } from "@/lib/api/companies/companiesApiInterfaces";


const mockCounters = {
    jobViewsToday: 12,
    jobViewsLastWeek: 12,
    applicationsToday: 53,
    applicationsLastWeek: 53,
};


export default function CompanyDashboard() {
    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const router = useRouter();

    const [jobSearchDialogOpen, setJobSearchDialogOpen] = useState(false);

    const [lastJobs, setLastJobs] = useState<LastVisitedCardItem[]>([]);

    const fetchLastJobs = useCallback(async () => {
        const result = await getCompanyLastVisitedJobs(companyId);

        if (result.success) {
            const mappedItems = result.data.jobs
                .map((j): LastVisitedCardItem => (
                    { id: j.id, title: j.title })
                );

            setLastJobs(mappedItems);
        }
    }, [companyId]);

    useEffect(() => {
        fetchLastJobs();
    }, [fetchLastJobs]);

    const handleDeleteLastJob = async (jobId: number) => {
        const result = await removeCompanyLastVisitedJob(companyId, jobId);

        if (result.success) {
            await fetchLastJobs();
        }
    };

    const handleDeleteAllJobs = async () => {
        const result = await removeCompanyAllLastVisitedJobs(companyId);

        if (result.success) {
            setLastJobs(() => []);
        }
    };

    const handleOpenJobSearchDialog = () => {
        setJobSearchDialogOpen(true);
    };

    const handleSearchJobDialogSubmit = (jobId: number) => {
        router.push(`/job/${encodeURIComponent(jobId)}/manage/applications`);
    };

    const [jobSearchDialogQuery, setJobSearchDialogQuery] = useState<string>("");
    const [jobSearchResults, setJobSearchResults] = useState<DashboardSearchDialogItem[]>([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const request: SearchCompanySharedJobsRequest = {
                query: jobSearchDialogQuery,
            };

            const result = await searchCompanySharedJobs(companyId, request);

            if (result.success) {
                const mappedJobs = result.data.jobs
                    .map((j): DashboardSearchDialogItem => ({ id: j.id, title: j.title }));
                setJobSearchResults(mappedJobs);
            }
        };

        if (jobSearchDialogQuery) {
            fetchJobs();
        }

    }, [companyId, jobSearchDialogQuery]);

    const handleCloseDialogs = () => {
        setJobSearchDialogOpen(false);
    };

    return (
        <>
            <Grid container spacing={3} sx={{mb: 4}}>
                <Grid size={{xs: 12, sm: 4}}>
                    <Button
                        variant="text"
                        startIcon={<Add />}
                        onClick={() => router.push(`/company/${companyId}/create-job`)}
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
                        constructPath={(id: number) => `/job/${id}/manage`}
                        onDelete={(id: number) => handleDeleteLastJob(id)}
                        onDeleteAll={handleDeleteAllJobs}
                        listItemAvatarIcon={<Work />}
                    />
                </Grid>
            </Grid>

            <DashboardSearchDialog
                title="Wyszukiwanie ogłoszeń"
                open={jobSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(id: number) => handleSearchJobDialogSubmit(id)}
                searchQuery={jobSearchDialogQuery}
                setSearchQuery={setJobSearchDialogQuery}
                searchResults={jobSearchResults}
                listItemIcon={<Work />}
            />
        </>
    );
}