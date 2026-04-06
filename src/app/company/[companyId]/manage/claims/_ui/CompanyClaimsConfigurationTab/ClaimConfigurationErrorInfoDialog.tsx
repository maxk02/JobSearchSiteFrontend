import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, List, ListItem, Stack, Typography,} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";
import {companyClaims} from "@/lib/seededData/companyClaims";
import {
    LackingClaimDependencies
} from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsConfigurationTab/CompanyClaimsConfigurationTable";


interface ClaimConfigurationErrorInfoDialogProps {
    open: boolean;
    onClose: () => void;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    lackingClaimDependencies: LackingClaimDependencies[];
}

const getClaimName = (id: number): string => {
    const companyClaim = companyClaims.find(c => c.id == id);

    if (!companyClaim) {
        return "";
    }

    return companyClaim.namePl;
};

export default function ClaimConfigurationErrorInfoDialog({ open, onClose, maxWidth, lackingClaimDependencies }: ClaimConfigurationErrorInfoDialogProps) {
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    const text =
        `Po operacji z uprawnieniami nie zostałyby spełnione następujące zależności:`;

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
                <Typography sx={{ mt: 0.5 }}>
                    {text}
                </Typography>
                <List sx={{ listStyleType: "disc", pl: 4, mt: 1 }}>
                    {lackingClaimDependencies.map(lcd =>
                        <ListItem key={lcd.claimId} sx={{ display: "list-item" }}>
                            Dla aktywnego uprawnienia <span style={{ fontWeight: "bold" }}>{getClaimName(lcd.claimId)}</span> (id: {lcd.claimId}):
                            <List sx={{ listStyleType: "disc", pl: 4 }}>
                                {lcd.lackingClaimIds.map(lackingId =>
                                    <ListItem key={lackingId} sx={{ display: "list-item" }}>
                                        {getClaimName(lackingId)} (id: {lackingId})
                                    </ListItem>
                                )}
                            </List>
                        </ListItem>
                    )}
                    {/*{companyClaims.filter(c => lackingClaimIds.includes(c.id)).map((claim) => (*/}
                    {/*    <ListItem key={claim.id} sx={{ display: "list-item" }}>*/}
                    {/*        {`${claim.namePl} (id=${claim.id})`}*/}
                    {/*    </ListItem>*/}
                    {/*))}*/}
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