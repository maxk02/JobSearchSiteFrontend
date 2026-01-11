import {Avatar, Box, Divider, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {AccessTime, Description, HomeWork, PieChart, PinDrop} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import React from "react";
import {JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {
    employmentMobilityOptionIds,
    employmentMobilityOptions,
    employmentTimeOptionIds, employmentTimeOptions
} from "@/lib/seededData/employmentOptions";


const formatPolishDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};

export interface JobOverviewCardProps {
    job: JobDetailedDto;
}

export default function JobOverviewCard({job} : JobOverviewCardProps) {
    return (
        <Paper>
            <Stack direction="row">
                <Box py={2.1} pl={3} pr={1}>
                    <Avatar variant="rounded" sx={{ height: 80, width: 80 }}>
                        {job.companyAvatarLink && <Image src={job.companyAvatarLink} width="80" height="80" alt="" />}
                    </Avatar>
                </Box>
                <Stack sx={{ py: 2, px: 1.8, flexGrow: 1, justifyContent: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        {job.title}
                    </Typography>
                    <Typography lineHeight={1} mt={1} sx={{ fontSize: "1.02em" }}>
                        {job.companyName}
                    </Typography>
                </Stack>
            </Stack>
            <Divider />
            <List sx={{ m: 0, px: 0, py: 1 }}>
                <Grid container spacing={0}>
                    {job.locations.map(l =>
                        <Grid key={l.id} size={{ xs: 12, md: 12, lg: 6 }}>
                            <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                                <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                    backgroundColor: "#dde2e9" }}>
                                    <PinDrop color="primary" />
                                </Avatar>
                                <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>{l.fullName}</Typography>
                            </ListItem>
                        </Grid>
                    )}
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <AccessTime color="primary" />
                            </Avatar>
                            <Stack gap={0.5}>
                                {/*<Typography lineHeight={1} sx={{ fontSize: "0.95em" }}>ważna jeszcze 10 dni</Typography>*/}
                                <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>
                                    Ważna do: {formatPolishDate(job.dateTimeExpiringUtc)}
                                </Typography>
                            </Stack>
                        </ListItem>
                    </Grid>
                    {job.contractTypeIds && job.contractTypeIds.length > 0 &&
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <Description color="primary" />
                            </Avatar>
                                <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>
                                    {
                                        jobContractTypes
                                            .filter(jct => (job.contractTypeIds ?? []).includes(jct.id))
                                            .map(jct => jct.namePl)
                                            .join(', ')
                                    }
                                </Typography>
                        </ListItem>
                    </Grid>
                    }
                    {
                        employmentMobilityOptionIds.filter(id => (job.employmentOptionIds ?? []).includes(id)) &&
                        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                            <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                                <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                    backgroundColor: "#dde2e9" }}>
                                    <HomeWork color="primary" />
                                </Avatar>
                                <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>
                                    {
                                        employmentMobilityOptions
                                            .filter(eo => (job.employmentOptionIds ?? []).includes(eo.id))
                                            .map(eo => eo.namePl)
                                            .join(', ')
                                    }
                                </Typography>
                            </ListItem>
                        </Grid>
                    }
                    {
                        employmentTimeOptionIds.filter(id => (job.employmentOptionIds ?? []).includes(id)) &&
                        <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                            <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                                <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                    backgroundColor: "#dde2e9" }}>
                                    <PieChart color="primary" />
                                </Avatar>
                                <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>
                                    {
                                        employmentTimeOptions
                                            .filter(eo => (job.employmentOptionIds ?? []).includes(eo.id))
                                            .map(eo => eo.namePl)
                                            .join(', ')
                                    }
                                </Typography>
                            </ListItem>
                        </Grid>
                    }
                </Grid>
            </List>
        </Paper>
    );
}