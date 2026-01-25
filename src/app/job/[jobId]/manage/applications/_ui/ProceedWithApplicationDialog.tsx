import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, Stack, TextField, Typography,} from "@mui/material";
import React, { useState } from "react";
import {Close} from "@mui/icons-material";
import {companyClaims} from "@/lib/seededData/companyClaims";


interface ProceedWithApplicationDialogProps {
    open: boolean;
    onClose: () => void;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export default function ProceedWithApplicationDialog({ open, onClose, maxWidth }: ProceedWithApplicationDialogProps) {
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    const text =
        `Wpisz tekst do wysłania kandydatowi w celu zaproszenia do uczestnictwa w rekrutacji.`;

    const [messageText, setMessageText] = useState<string>("");

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={maxWidth ?? "md"}
            scroll="paper"
        >
            <DialogTitle sx={{ pb: 1, pr: 1.5 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5">
                        Zaproszenie do dalszej rekrutacji
                    </Typography>
                    <IconButton onClick={() => handleClose({}, "")}>
                        <Close />
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <Typography>
                    {text}
                </Typography>
                <TextField
                    multiline
                    rows={7}
                    label="Tekst"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={messageText}
                />
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
                        onClick={() => handleClose(null, '')}
                        sx={{fontSize: "1.1em"}}
                    >
                        Zatwierdź
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}