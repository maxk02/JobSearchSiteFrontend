"use client";

import {
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    Paper,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import Image from "next/image";
import {FilePresent, PlayArrow, Undo} from "@mui/icons-material";
import {JobApplicationInUserProfileDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {jobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import {deleteJobApplication} from "@/lib/api/jobApplications/jobApplicationsApi";
import ChooseApplicationFilesDialog from "@/app/_ui/ChooseApplicationFilesDialog";
import React, {useState} from "react";


const formatPolishDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};

const formatPolishDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return formatter.format(date);
};

export interface ApplicationInUserProfileCardProps {
    item: JobApplicationInUserProfileDto;
    onDeletionTriggered: () => void;
}

export default function ApplicationInUserProfileCard({ item, onDeletionTriggered }: ApplicationInUserProfileCardProps) {

    const theme = useTheme();

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleDeleteApplication = async () => {
        const result = await deleteJobApplication(item.id);

        if (result.success) {
            onDeletionTriggered();
        }
    };

    return (
        <>
            <Paper sx={{ width: "100%", textAlign: "left" }}>
                <Box display="flex" flexDirection="row" width="100%">
                    <Box py={2.1} pl={3} pr={1}>
                        <Avatar variant="rounded" sx={{ width: 80, height: 80 }}>
                            {item.companyLogoLink && <Image src={item.companyLogoLink} width="80" height="80" alt="" />}
                        </Avatar>
                    </Box>
                    <Stack sx={{ px: 2, py: 2, flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                            {item.jobTitle}
                        </Typography>
                        {item.salaryInfo &&
                            <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                                {formatSalaryInfoText(item.salaryInfo)}
                            </Typography>
                        }
                        <Typography fontWeight="600" lineHeight={1} mt={1.3}>
                            {item.companyName}
                        </Typography>

                        {item.locations.length === 1 ? (
                            <Typography lineHeight={1} mt={1.3}>
                                {item.locations[0].name}
                            </Typography>
                        ) : (
                            <Typography lineHeight={1}>
                                Dostępna w {item.locations.length} lokalizacjach
                            </Typography>
                        )}

                        <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row" }}>
                            <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto",
                                "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}
                            >
                                {item.employmentOptionIds?.map((item) => (
                                    <Typography key={item} lineHeight={1} color="textSecondary">
                                        {employmentOptions
                                            .filter(eo => eo.id === item)
                                            .map(eo => eo.namePl).join(",")}
                                    </Typography>
                                ))}
                            </ListItem>
                            <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto" }}>
                                {item.contractTypeIds?.map((item) => (
                                    <Typography key={item} lineHeight={1} color="textSecondary">
                                        {jobContractTypes
                                            .filter(jct => jct.id === item)
                                            .map(jct => jct.namePl).join(",")}
                                    </Typography>
                                ))}
                            </ListItem>
                        </List>

                        <List sx={{ mt: 1.6, pl: 0, pb: 0.3, pt: 0.3, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>
                                    Status: {jobApplicationStatuses.find(s => s.id === item.statusId)?.namePl}
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>Pliki:</Typography>
                                {item.personalFiles.length > 0 ?
                                    <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                                        {item.personalFiles.map((file) => (
                                            <Chip key={file.id} label={file.name} variant="filled" />
                                        ))}
                                    </Stack> :
                                    <Typography lineHeight={1} color="textSecondary">
                                        Brak plików
                                    </Typography>
                                }
                            </ListItem>
                        </List>

                        <Stack direction="row" mt={2} gap={1.3}>
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<Undo />}
                                size="medium"
                                onClick={handleDeleteApplication}
                            >
                                Wycofaj aplikację
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<FilePresent />}
                                size="medium"
                                onClick={() => setDialogOpen(true)}
                            >
                                Edytuj pliki
                            </Button>
                        </Stack>
                    </Stack>
                </Box>

                <Divider />

                <Box display="flex" flexDirection="column" py={1} px={2} gap={0.7}>
                    <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                        Opublikowana: {formatPolishDate(item.dateTimePublishedUtc)}
                    </Typography>
                    <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                        Zaaplikowano: {formatPolishDateTime(item.dateTimeAppliedUtc)}
                    </Typography>
                </Box>

            </Paper>

            <ChooseApplicationFilesDialog
                title="Wybierz pliki do aplikowania"
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                currentFileIds={[]}
                jobId={item.id}
                applicationId={item.id}
            />
        </>
    );
}
