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
import {FilePresent, LocationPin, PlayArrow, Undo} from "@mui/icons-material";
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
                            {item.companyAvatarLink && <Image src={item.companyAvatarLink} width="80" height="80" alt="" />}
                        </Avatar>
                    </Box>
                    <Stack sx={{ px: 2, py: 2, flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                            {item.jobTitle}
                        </Typography>
                        {item.jobSalaryInfoDto &&
                            <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                                {formatSalaryInfoText(item.jobSalaryInfoDto)}
                            </Typography>
                        }
                        <Typography fontWeight="600" lineHeight={1} mt={1.3}>
                            {item.companyName}
                        </Typography>

                        <Stack direction="row" gap={0.3} sx={{ alignItems: "center", mt: 1.35 }}>
                            <LocationPin fontSize="small" sx={{ p: 0 }}></LocationPin>
                            <Typography lineHeight={1}>
                                {item.locationDto.fullName}
                            </Typography>
                        </Stack>

                        <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row" }}>

                            {item.employmentOptionIds?.map((item) => (
                                <ListItem key={item} sx={{ m: 0, px: 0, pt: 1.35, pb: 0, width: "auto",
                                    "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}
                                >
                                    <Typography lineHeight={1} color="textSecondary">
                                        {employmentOptions
                                            .filter(eo => eo.id === item)
                                            .map(eo => eo.namePl).join(", ")}
                                    </Typography>
                                </ListItem>
                            ))}

                            <ListItem sx={{ m: 0, px: 0, pt: 1.35, pb: 0, width: "auto", }}>
                                <Typography lineHeight={1} color="textSecondary">
                                    {jobContractTypes
                                        .filter(jct => item.contractTypeIds?.includes(jct.id))
                                        .map(jct => jct.namePl)
                                        .join(", ")
                                    }
                                </Typography>
                            </ListItem>
                        </List>

                        <List sx={{ mt: 1.6, pl: 0, pb: 0.3, pt: 0.3, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>
                                    Status: {jobApplicationStatuses.find(s => s.id === item.status)?.namePl}
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>Pliki:</Typography>
                                {item.personalFileInfoDtos.length > 0 ?
                                    <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                                        {item.personalFileInfoDtos.map((file) => (
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
                                Edytuj aplikację
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
                currentFileIds={item.personalFileInfoDtos.map(pf => pf.id)}
                currentLocationId={1}
                currentLocationName={""}
                jobId={item.id}
                applicationId={item.id}
            />
        </>
    );
}
