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
import ChooseApplicationFilesTable from "@/app/dummy-job/_ui/ChooseApplicationFilesTable";
import {getPersonalFiles} from "@/lib/api/userProfiles/userProfilesApi";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import {updateJobApplicationFiles} from "@/lib/api/jobApplications/jobApplicationsApi";
import {UpdateJobApplicationFilesRequestDto} from "@/lib/api/jobApplications/jobApplicationsApiInterfaces";




interface ChangeApplicationStatusDialogDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    // onSubmit: (fileIds: number[]) => void;
    id: number;
    currentFileIds: number[];
}

export default function ChooseApplicationFilesDialog({ title, open, onClose, id, currentFileIds }: ChangeApplicationStatusDialogDialogProps) {

    const [files, setFiles] = useState<PersonalFileInfoDto[]>([]);
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
    });

    const handleSubmitClick = async () => {

        const updateFiles = async () => {

            const request: UpdateJobApplicationFilesRequestDto = {
                personalFileIds: selectedFileIds,
            };

            const result = await updateJobApplicationFiles(id, request);

            if (!result.success) {

            }
        };

        updateFiles();

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
            <DialogContent>

                <Alert severity="info" icon={<Info />} sx={{ width: "100%" }}>
                    <Typography>Wybierz co najmniej 1 plik, który będzie podpięty do tej aplikacji.</Typography>
                </Alert>

                <ChooseApplicationFilesTable
                    files={files}
                    selectedFileIds={currentFileIds}
                    setSelectedFileIds={setSelectedFileIds} />
                
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