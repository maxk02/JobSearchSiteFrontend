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
import {Add, Download, Edit, PlayArrow} from "@mui/icons-material";
import {JobApplicationForManagersDto} from "@/lib/api/jobApplications/jobApplicationsApiDtos";
import ApplicationTagSearchDialog from "@/app/job/[jobId]/manage/applications/_ui/ApplicationTagSearchDialog";
import React, {useState} from "react";
import {managementJobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import ChangeApplicationStatusDialog from "@/app/job/[jobId]/manage/applications/_ui/ChangeApplicationStatusDialog";
import {
    AddJobApplicationTagRequest,
    UpdateJobApplicationStatusRequest
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";
import {
    addJobApplicationTag,
    deleteJobApplicationTag,
    updateJobApplicationStatus
} from "@/lib/api/jobApplications/jobApplicationsApi";


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
    setRefetchTrigger: React.Dispatch<React.SetStateAction<number>>;
}

export default function ApplicationInJobManagementCard({ item, setRefetchTrigger }: ApplicationInJobManagementCardProps) {

    const theme = useTheme();

    const handleTagAdd = async (tag: string) => {
        const request: AddJobApplicationTagRequest = {
            name: tag,
        };

        const result = await addJobApplicationTag(item.id, request);

        if (result.success) {
            setRefetchTrigger(prev => prev + 1);
        }
    };

    const handleTagDelete = async (tag: string) => {
        const result = await deleteJobApplicationTag(item.id, tag);

        if (result.success) {
            setRefetchTrigger(prev => prev + 1);
        }
    };

    const [addTagSearchDialogOpen, setAddTagSearchDialogOpen] = useState(false);
    const [changeStatusDialogOpen, setChangeStatusDialogOpen] = useState(false);

    const handleCloseDialogs = () => {
        setAddTagSearchDialogOpen(false);
        setChangeStatusDialogOpen(false);
    };

    const handleDownloadFile = async (id: number) => {

    };

    const handleStatusChange = async (newStatusId: number) => {
        const request: UpdateJobApplicationStatusRequest = {
            statusId: newStatusId,
        };

        const result = await updateJobApplicationStatus(item.id, request);
    };

    return (
        <>
            <Paper sx={{ width: "100%", textAlign: "left" }}>
                <Stack direction="row">
                    <Box py={2.1} pl={3} pr={1}>
                        <Avatar src="/avatar2.webp" sx={{ height: 80, width: 80 }} />
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
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                                <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                    <PlayArrow sx={{ fontSize: "1rem" }} />
                                </ListItemIcon>
                                <Typography lineHeight={1}>
                                    Status: {
                                        managementJobApplicationStatuses
                                            .find(x => x.id === item.statusId)?.namePl ?? "N/A"
                                    }
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
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
                                            onClick={() => handleDownloadFile(file.id)}
                                        />
                                    ))}
                                </Stack>
                            </ListItem>
                        </List>
                        <Stack direction="row" mt={2} sx={{ justifyContent: "left" }} gap={1.3}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<Edit />}
                                size="medium"
                                onClick={() => setChangeStatusDialogOpen(true)}
                            >
                                Zmień status
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<Download />}
                                size="medium"

                            >
                                Pobierz pliki jako archiwum
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
                title="Wyszukiwanie tagów do dodania"
                open={addTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagAdd(tag)}
                data={mockTags}
            />

            <ChangeApplicationStatusDialog
                title="Zmiana statusu aplikacji"
                open={changeStatusDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(newStatusId: number) => handleStatusChange(newStatusId)}
                currentStatusId={item.statusId}
            />
        </>
    );
}
