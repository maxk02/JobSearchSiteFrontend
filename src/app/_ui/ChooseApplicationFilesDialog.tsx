"use client";

import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Close, Info} from "@mui/icons-material";
import {getPersonalFiles} from "@/lib/api/userProfiles/userProfilesApi";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {addJobApplication, updateJobApplicationFiles} from "@/lib/api/jobApplications/jobApplicationsApi";
import {
    AddJobApplicationRequest,
    UpdateJobApplicationFilesRequest
} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";
import ChooseApplicationFilesTable from "@/app/_ui/ChooseApplicationFilesTable";


const mockFiles: PersonalFileInfoDto[] = [
    {id: 1, name: "File 1 owejfiowejfiojeopfjwop", size: 2000000, extension: "pdf"},
    {id: 2, name: "File 2", size: 2000000, extension: "pdf"},
    {id: 3, name: "File 3", size: 2000000, extension: "pdf"},
    {id: 4, name: "File 4", size: 2000000, extension: "pdf"},
];

interface ChangeApplicationStatusDialogDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    jobId: number;
    currentFileIds: number[];
    applicationId: number | null;
    setApplicationId?: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function ChooseApplicationFilesDialog(props: ChangeApplicationStatusDialogDialogProps) {

    const { title, open, onClose, jobId, applicationId, currentFileIds, setApplicationId } = props;

    const [files, setFiles] = useState<PersonalFileInfoDto[]>(mockFiles);
    const [selectedFileIds, setSelectedFileIds] = useState<number[]>(currentFileIds);
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    useEffect(() => {

        const fetchFiles = async () => {
            const result = await getPersonalFiles();

            if (result.success) {
                setFiles(result.data.personalFileInfos);
            }
        };

        fetchFiles();
    }, []);

    const handleSubmitClick = async () => {

        const addOrUpdateApplication = async () => {

            if (applicationId) {
                const request: UpdateJobApplicationFilesRequest = {
                    personalFileIds: selectedFileIds,
                };

                const result = await updateJobApplicationFiles(applicationId, request);

                if (!result.success) {

                }
            }
            else if (setApplicationId) {
                const request: AddJobApplicationRequest = {
                    jobId: jobId,
                    personalFileIds: selectedFileIds,
                    locationId: 0
                };

                const result = await addJobApplication(request);

                if (result.success) {
                    setApplicationId(() => result.data.id);
                }
            }
        };

        addOrUpdateApplication();

        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="md"
            scroll="paper"
        >
            <DialogTitle sx={{ pb: 1, pr: 1.5 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <IconButton onClick={() => handleClose({}, "")}>
                        <Close />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent sx={{ height: "500px", minHeight: "500px" }}>
                <Stack sx={{ height: "100%", minHeight: "100%" }}>
                    <Alert severity="info" icon={<Info />} sx={{ flex: "0 0 auto", width: "100%" }}>
                        <Typography>Wybierz co najmniej 1 plik, który będzie podpięty do tej aplikacji.</Typography>
                    </Alert>
                    <Alert
                        severity="info"
                        icon={<Info />}
                        sx={{ flex: "0 0 auto", width: "100%", mt: 1.5 }}
                    >
                        <Typography>
                            Dopuszczalny format plików: pdf
                        </Typography>
                        <Typography>
                            Maksymalny rozmiar pliku: 10MB
                        </Typography>
                        <Typography>
                            Maksymalnie możesz dodać: 15 plików
                        </Typography>
                    </Alert>

                    <ChooseApplicationFilesTable
                        files={files}
                        setFiles={setFiles}
                        selectedFileIds={selectedFileIds}
                        setSelectedFileIds={setSelectedFileIds}
                    />
                </Stack>
            </DialogContent>
            <DialogActions sx={{px: 2, pb: 1, pt: 0.5}}>
                <Button
                    onClick={handleSubmitClick}
                    disabled={selectedFileIds.length === 0}
                    sx={{fontSize: "1.1em"}}
                >
                    Zatwierdź
                </Button>
            </DialogActions>
        </Dialog>
    );
}