import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography,} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";


interface BasicConfirmationDialogProps {
    title: string;
    text: string;
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function BasicConfirmationDialog({ title, text, open, onClose, onConfirm }: BasicConfirmationDialogProps) {
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    const handleConfirmClick = () => {
        onConfirm();
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
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
            <DialogContent sx={{ height: "500px" }}>
                <Typography>
                    {text}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Stack direction="row" spacing={2}>
                    <Button
                        onClick={() => handleClose(null, '')}
                        sx={{fontSize: "1.1em"}}
                    >
                        Anuluj
                    </Button>
                    <Button
                        onClick={handleConfirmClick}
                        sx={{fontSize: "1.1em"}}
                    >
                        Zatwierdź
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}