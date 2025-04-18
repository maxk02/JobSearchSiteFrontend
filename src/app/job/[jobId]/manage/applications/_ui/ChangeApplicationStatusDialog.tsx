import {
    Alert,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {Close, Info} from "@mui/icons-material";
import {managementJobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import FormControl from "@mui/material/FormControl";


interface ChangeApplicationStatusDialogDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    onSubmit: (statusId: number) => void;
    currentStatusId: number;
}

export default function ChangeApplicationStatusDialog({ title, open, onClose, onSubmit, currentStatusId }: ChangeApplicationStatusDialogDialogProps) {

    const [selectedStatusId, setSelectedStatusId] = useState<number>(currentStatusId);

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        const value = event.target.value as number;
        setSelectedStatusId(value);
    };
    
    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        onClose();
    };

    const handleSubmitClick = () => {
        onSubmit(selectedStatusId);
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

                <Alert severity="info" icon={<Info />} sx={{ width: "100%" }}>
                    <Typography>W razie zmiany statusu użytkownik dostanie powiadomienie.</Typography>
                </Alert>

                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id={`select-new-status-label`}>Status</InputLabel>
                    <Select
                        labelId={`select-new-status-label`}
                        id={`select-new-status`}
                        fullWidth
                        value={selectedStatusId}
                        onChange={handleSelectChange}
                        input={<OutlinedInput label="Nowy status" />}
                        variant="outlined"
                        sx={{
                            height: "57px",
                        }}
                    >
                        {managementJobApplicationStatuses
                            .filter(item => item.id > 0)
                            .map((item) => (
                            <MenuItem key={item.id} value={item.id} sx={{px: 1, py: 0.5}}>
                                <ListItemText primary={item.namePl}/>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                
            </DialogContent>
            <DialogActions sx={{px: 2, pb: 1, pt: 0.5}}>
                <Button
                    onClick={handleSubmitClick}
                    disabled={selectedStatusId === currentStatusId}
                    sx={{fontSize: "1.1em"}}
                >
                    Zatwierdź
                </Button>
            </DialogActions>
        </Dialog>
    );
}