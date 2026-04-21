"use client";

import React, {useEffect, useMemo, useState} from "react";
import {Paper, Stack, Typography} from "@mui/material";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import StatsDateRangePaperButton from "@/app/_ui/StatsDateRangePaperButton";
import {GetCompanyJobManagementCardDtosRequest} from "@/lib/api/companies/companiesApiInterfaces";
import {getCompanyJobManagementCardDtos} from "@/lib/api/companies/companiesApi";
import {parseSearchParams, TypedJobSearchParams} from "@/app/company/[companyId]/manage/jobs/page";
import {
    GetDailyApplicationsForJobForDateRangeRequest,
    GetDailyViewsForJobForDateRangeRequest
} from "@/lib/api/jobs/jobsApiInterfaces";
import {getDailyApplicationsForJobForDateRange, getDailyViewsForJobForDateRange} from "@/lib/api/jobs/jobsApi";


const mockJobViewsData: Record<string, number>[] = [
    { "2026-03-30T00:00:00Z": 200 },
    { "2026-03-31T00:00:00Z": 250 },
    { "2026-04-01T00:00:00Z": 180 },
    { "2026-04-02T00:00:00Z": 300 },
    { "2026-04-03T00:00:00Z": 270 },
    { "2026-04-04T00:00:00Z": 230 },
    { "2026-04-05T00:00:00Z": 210 },
];

const mockApplicationsData: Record<string, number>[] = [
    { "2026-03-30T00:00:00Z": 10 },
    { "2026-03-31T00:00:00Z": 15 },
    { "2026-04-01T00:00:00Z": 8 },
    { "2026-04-02T00:00:00Z": 20 },
    { "2026-04-03T00:00:00Z": 18 },
    { "2026-04-04T00:00:00Z": 15 },
    { "2026-04-05T00:00:00Z": 14 },
];


const timePeriods = [
    "Ostatni tydzień",
    "Ostatni miesiąc",
];

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'numeric',
    });
    return formatter.format(date);
};

export default function JobStatsPage() {

    const [applicationStatsDictionary, setApplicationStatsDictionary] = useState<Record<string, number>[]>(mockApplicationsData);
    const [viewStatsDictionary, setViewStatsDictionary] = useState<Record<string, number>[]>(mockJobViewsData);

    const formattedApplicationsData = useMemo(() => {
        return applicationStatsDictionary.map(item => {
            const dateKey = Object.keys(item)[0];
            return { date: formatDate(dateKey), applications: item[dateKey] };
        });
    }, [applicationStatsDictionary]);

    const formattedViewsData = useMemo(() => {
        return viewStatsDictionary.map(item => {
            const dateKey = Object.keys(item)[0];
            return { date: formatDate(dateKey), views: item[dateKey] };
        });
    }, [viewStatsDictionary]);

    const [timePeriod, setTimePeriod] = useState<"week" | "month">("week");

    useEffect(() => {

        const fetchStats = async () => {

            const now = new Date();
            const someTimeAgo = new Date();

            if (timePeriod === "week") {
                someTimeAgo.setDate(now.getDate() - 7);
            } else {
                someTimeAgo.setDate(now.getDate() - 30);
            }

            const applicationsRequest: GetDailyApplicationsForJobForDateRangeRequest = {
                startDate: someTimeAgo.toISOString(),
                endDate: now.toISOString(),
            };

            const viewsRequest: GetDailyViewsForJobForDateRangeRequest = {
                startDate: someTimeAgo.toISOString(),
                endDate: now.toISOString(),
            };

            const applicationsResult =
                await getDailyApplicationsForJobForDateRange(117, applicationsRequest);

            if (applicationsResult.success) {
                setApplicationStatsDictionary(applicationsResult.data.dailyApplications);
            }

            const viewsResult =
                await getDailyViewsForJobForDateRange(117, viewsRequest);

            if (viewsResult.success) {
                setViewStatsDictionary(viewsResult.data.dailyViews);
            }
        }

        fetchStats();

    }, [timePeriod]);

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
                        <LineChart data={formattedViewsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
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
                        <LineChart data={formattedApplicationsData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
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
