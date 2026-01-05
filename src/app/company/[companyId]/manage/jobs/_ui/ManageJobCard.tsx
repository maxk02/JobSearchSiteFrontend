import {Box, Button, Collapse, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import {
    DeleteForever,
    DocumentScanner,
    Edit,
    ExpandLess,
    ExpandMore,
    QueryStats, WebAsset,
    WebAssetOff
} from "@mui/icons-material";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {useState} from "react";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import {useRouter} from "next/navigation";
import {deleteJob} from "@/lib/api/jobs/jobsApi";
import {useCurrentJobFolderStore} from "@/lib/stores/currentJobFolderStore";
import {JobManagementCardDto} from "@/lib/api/jobs/jobsApiDtos";


const formatPolishDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};

interface ManageJobCardProps {
    item: JobManagementCardDto;
    onUpdateTriggered: () => void;
}

export default function ManageJobCard({ item, onUpdateTriggered }: ManageJobCardProps) {

    const router = useRouter();

    const { setCreateEditJobState } = useCreateEditJobStateStore();

    const { currentJobFolderState } = useCurrentJobFolderStore();

    const [isLocationsExpanded, setIsLocationsExpanded] = useState(false);
    const [isPublic, setIsPublic] = useState<boolean>(item.isPublic);

    const toggleLocations = () => {
        setIsLocationsExpanded(!isLocationsExpanded);
    };

    const handleGoToJobManagement = (mode: "applications" | "stats" | "edit") => {

        if (!currentJobFolderState) {
            return;
        }

        setCreateEditJobState("folder", { id: currentJobFolderState?.id, name: currentJobFolderState?.name });
        router.push(`/job/${item.id}/manage/${mode}`);
    };

    const handleDelete = async () => {
        const result = await deleteJob(item.id);

        if (result.success) {
            onUpdateTriggered();
        }
    };

    return (
        <Paper sx={{ width: "100%", textAlign: "left", opacity: (isPublic ? 1 : 0.5) }}>
            <Stack sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                    {item.title}
                </Typography>
                {item.salaryInfoDto &&
                    <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                        {formatSalaryInfoText(item.salaryInfoDto)}
                    </Typography>
                }
                {item.locations.length === 1 ? (
                    <Typography lineHeight={1} mt={1.3}>
                        {item.locations[0].fullName}
                    </Typography>
                ) : (
                    <>
                        <Box sx={{ display: "flex", alignItems: "center", mt: 1.3, cursor: "pointer" }} onClick={toggleLocations}>
                            <Typography lineHeight={1}>
                                Dostępna w {item.locations.length} lokalizacjach
                            </Typography>
                            <IconButton size="small" sx={{ ml: 0.5, p: 0 }}>
                                {isLocationsExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                            </IconButton>
                        </Box>
                        <Collapse in={isLocationsExpanded}>
                            {item.locations.map((location) => (
                                <Typography key={location.id} lineHeight={1} mt={1.3}>
                                    {location.fullName}
                                </Typography>
                            ))}
                        </Collapse>
                    </>
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
                <Stack direction="row" mt={1} sx={{ justifyContent: "left" }} gap={2}>
                    {currentJobFolderState?.claimIds && currentJobFolderState.claimIds.includes(4) &&
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<Edit />}
                            size="medium"
                            sx={{ pl: 0.7 }}
                            onClick={() => handleGoToJobManagement("edit")}
                        >
                            Edycja
                        </Button>
                    }

                    {currentJobFolderState?.claimIds && currentJobFolderState.claimIds.includes(6) &&
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<DocumentScanner />}
                            size="medium"
                            onClick={() => handleGoToJobManagement("applications")}
                        >
                            Aplikacje
                        </Button>
                    }


                    {currentJobFolderState?.claimIds && currentJobFolderState.claimIds.includes(3) &&
                        <Button
                            variant="text"
                            color="error"
                            startIcon={<QueryStats />}
                            size="medium"
                            onClick={() => handleGoToJobManagement("stats")}
                        >
                            Statystyki
                        </Button>
                    }

                    {currentJobFolderState?.claimIds && currentJobFolderState.claimIds.includes(4) &&
                        <>
                            <Button
                                variant="text"
                                color={isPublic ? "error" : "primary"}
                                startIcon={isPublic ? <WebAssetOff /> : <WebAsset />}
                                size="medium"
                                onClick={() => setIsPublic((prev) => !prev)}
                            >
                                {isPublic ? "Ukryj" : "Opublikuj"}
                            </Button>
                            <Button
                                variant="text"
                                color="error"
                                startIcon={<DeleteForever />}
                                size="medium"
                                onClick={handleDelete}
                            >
                                Usuń
                            </Button>
                        </>
                    }
                </Stack>
            </Stack>
            <Divider />
            <Box sx={{ py: 1, px: 2 }}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Ważna do: {formatPolishDate(item.dateTimeExpiringUtc)}
                </Typography>
            </Box>
        </Paper>
    );
}
