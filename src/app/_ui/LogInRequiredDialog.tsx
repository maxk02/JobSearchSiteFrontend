import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography,} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";


interface LogInRequiredDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    height?: string;
}

export default function LogInRequiredDialog({ open, onClose, onConfirm, height }: LogInRequiredDialogProps) {
    
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

    const text = `Dla wykonania tej czynności musisz być zalogowany. Czy chcesz przejść do strony logowania lub rejestracji?`;

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
                        Wymagane jest logowanie
                    </Typography>
                    <IconButton onClick={() => handleClose({}, "")} sx={{ color: "slategray" }}>
                        <Close />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent sx={{ height: height }}>
                <Typography>
                    {text}
                </Typography>
            </DialogContent>
            <DialogActions sx={{ pr: 2.5 }}>
                <Stack direction="row" spacing={3}>
                    <Button
                        onClick={() => handleClose(null, '')}
                        sx={{fontSize: "1.1em", color: "slategray"}}
                    >
                        Anuluj
                    </Button>
                    <Button
                        onClick={handleConfirmClick}
                        sx={{fontSize: "1.1em"}}
                    >
                        Zarejestruj się
                    </Button>
                    <Button
                        onClick={handleConfirmClick}
                        sx={{fontSize: "1.1em"}}
                    >
                        Zaloguj się
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}