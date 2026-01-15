import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, Stack, Typography,} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";
import {companyClaims} from "@/lib/seededData/companyClaims";


interface ClaimConfigurationErrorInfoDialogProps {
    open: boolean;
    onClose: () => void;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    lackingClaimIds: number[];
}

export default function ClaimConfigurationErrorInfoDialog({ open, onClose, maxWidth, lackingClaimIds }: ClaimConfigurationErrorInfoDialogProps) {
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    const text =
        `Po operacji z uprawnieniami lista końcowa nie zawierałaby zależności uprawnień pozostawionych
         we włączonym stanie. W proponowanej konfiguracji brakuje uprawnień:`;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={maxWidth}
            scroll="paper"
        >
            <DialogTitle sx={{ pb: 1, pr: 1.5 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant="h5">
                        Operacja z uprawnieniami nie może zostać przeprowadzona
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
                <List sx={{ listStyleType: "disc", pl: 4 }}>
                    {companyClaims.filter(c => lackingClaimIds.includes(c.id)).map((claim) => (
                        <ListItem key={claim.id} sx={{ display: "list-item" }}>
                            {`${claim.namePl} (id=${claim.id})`}
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Stack direction="row" spacing={2}>
                    <Button
                        onClick={() => handleClose(null, '')}
                        sx={{fontSize: "1.1em"}}
                    >
                        OK
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}