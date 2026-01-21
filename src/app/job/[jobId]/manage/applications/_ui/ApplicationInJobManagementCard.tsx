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
import {Add, Approval, Close, Download, InsertInvitation, PlayArrow} from "@mui/icons-material";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import ApplicationTagSearchDialog from "@/app/job/[jobId]/manage/applications/_ui/ApplicationTagSearchDialog";
import React, {useState} from "react";
import {jobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import BasicConfirmationDialog from "@/app/_ui/BasicConfirmationDialog";
import {
    AddJobApplicationTagRequest,
    UpdateJobApplicationStatusRequest
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";
import {
    addJobApplicationTag,
    deleteJobApplicationTag,
    updateJobApplicationStatus
} from "@/lib/api/jobApplications/jobApplicationsApi";
import {getDownloadLink} from "@/lib/api/personalFiles/personalFilesApi";
import downloadFileFromCloud from "@/lib/api/downloadFileFromCloud";


const mockTags = [
    {id: 1, title: "1 etap"},
    {id: 2, title: "2 etap"},
    {id: 3, title: "Do przeglądu 7 lipca"},
];

const formatDate = (dateString: string): string => {
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

interface ApplicationInJobManagementCardProps {
    item: JobApplicationForManagersDto;
    onUpdateTriggered: () => void;
}

export default function ApplicationInJobManagementCard({ item, onUpdateTriggered }: ApplicationInJobManagementCardProps) {

    const theme = useTheme();

    const handleTagAdd = async (tag: string) => {
        const request: AddJobApplicationTagRequest = {
            name: tag,
        };

        const result = await addJobApplicationTag(item.id, request);

        if (result.success) {
            onUpdateTriggered();
        }
    };

    const handleTagDelete = async (tag: string) => {
        const result = await deleteJobApplicationTag(item.id, tag);

        if (result.success) {
            onUpdateTriggered();
        }
    };

    const [addTagSearchDialogOpen, setAddTagSearchDialogOpen] = useState(false);
    const [confirmRejectionDialogOpen, setConfirmRejectionDialogOpen] = useState(false);

    const handleCloseDialogs = () => {
        setAddTagSearchDialogOpen(false);
        setConfirmRejectionDialogOpen(false);
    };

    const handleDownloadFile = async (id: number, fullName: string) => {
        const result = await getDownloadLink(id);

        if (result.success) {
            downloadFileFromCloud(result.data.link, fullName);
        }
        else {
            console.error("Failed to obtain link");
        }
    };

    const handleRejectApplication = async () => {
        const request: UpdateJobApplicationStatusRequest = {
            statusId: 3,
        };

        const result = await updateJobApplicationStatus(item.id, request);

        if (result.success) {
            onUpdateTriggered();
        }
    };

    return (
        <>
            <Paper sx={{ width: "100%", textAlign: "left" }}>
                <Stack direction="row">
                    <Box py={2.1} pl={3} pr={1}>
                        <Avatar src={item.avatarLink ?? "/avatar2.webp"} sx={{ height: 80, width: 80 }}>
                            {item.avatarLink && <Image src={item.avatarLink} width="80" height="80" alt="" />}
                        </Avatar>
                    </Box>
                    <Stack sx={{ px: 2, pt: 2, pb: 2 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                            {item.userFullName}
                        </Typography>

                        <Typography lineHeight={1} mt={1.3}>
                            {item.email}{item.phone && ` / ${item.phone}`}
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mt: 1.6, alignItems: "center" }}>
                            {item.tags.map(tag => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    variant="filled"
                                    onDelete={() => handleTagDelete(tag)}
                                />
                            ))}
                            <Chip
                                icon={<Add />}
                                label="Dodaj tag"
                                variant="outlined"
                                sx={{ borderStyle: "dashed" }}
                                onClick={() => setAddTagSearchDialogOpen(true)}
                            />
                        </Stack>

                        <List sx={{ mt: 1.3, pl: 0, pb: 0.3, pt: 0.3, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "35px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>
                                    Status: {
                                        jobApplicationStatuses
                                            .find(x => x.id === item.status)?.namePl ?? "N/A"
                                    }
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "35px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>Pliki:</Typography>
                                <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                                    {item.personalFiles.map((file) => (
                                        <Chip
                                            key={file.id}
                                            label={`${file.name}.${file.extension}`}
                                            variant="filled"
                                            onClick={() => handleDownloadFile(file.id,
                                                `${file.name}.${file.extension}`)}
                                        />
                                    ))}
                                </Stack>
                            </ListItem>
                        </List>
                        <Stack direction="row" mt={2} sx={{ justifyContent: "left" }} gap={1.3}>
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<Close />}
                                size="medium"
                                disabled={item.status === 4}
                                onClick={() => setConfirmRejectionDialogOpen(true)}
                            >
                                Odrzuć
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<InsertInvitation />}
                                size="medium"
                                disabled={item.status === 3}
                                onClick={() => setConfirmRejectionDialogOpen(true)}
                            >
                                Zaproś do kolejnych etapów
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<Download />}
                                size="medium"
                            >
                                Pobierz wszystkie pliki
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider />

                <Box sx={{ py: 1, px: 2 }}>
                    <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                        Zaaplikowano: {formatDate(item.dateTimeAppliedUtc)}
                    </Typography>
                </Box>

            </Paper>

            <ApplicationTagSearchDialog
                title="Dodaj tag do aplikacji"
                searchBarPlaceholder="Wyszukaj istniejący lub wprowadź nowy..."
                open={addTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagAdd(tag)}
                data={mockTags}
                mode="searchOrAdd"
                excludeFromSearch={item.tags} //todo
            />

            <BasicConfirmationDialog
                title="Zmiana statusu aplikacji"
                text="Czy potwierdzasz odrzucenie aplikacji?"
                open={confirmRejectionDialogOpen}
                onClose={handleCloseDialogs}
                onConfirm={handleRejectApplication}
            />
        </>
    );
}
