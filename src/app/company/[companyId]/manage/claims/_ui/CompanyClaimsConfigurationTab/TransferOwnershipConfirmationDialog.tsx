import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormLabel,
    IconButton,
    Stack, TextField,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Close, ScreenSearchDesktop} from "@mui/icons-material";


interface TransferOwnershipConfirmationDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userFullName: string;
    userEmail: string;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function TransferOwnershipConfirmationDialog(props: TransferOwnershipConfirmationDialogProps) {

    const { open, onClose, onConfirm, userFullName, userEmail, password, setPassword } = props;

    const title = "Przekazanie uprawnień właściciela";

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
            <DialogContent>
                <Typography>
                    Czy rzeczywiście chcesz przekazać uprawnienia właściciela użytkownikowi <strong>{userFullName}</strong> o adresie mailowym <strong>{userEmail}</strong>? Użytkownik docelowy uzyska pełną kontrolę nad kontem firmy, a na tym koncie zostaną wszystkie uprawnienia oprócz uprawnień właściciela.
                </Typography>
                <Stack direction="row" sx={{ alignItems: "center" }} mt={2}>
                    <FormLabel>Wprowadź hasło:</FormLabel>
                    <TextField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ ml: 1.1, width: "400px" }}
                    />
                </Stack>
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
                        disabled={password.length < 8}
                    >
                        Zatwierdź
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}