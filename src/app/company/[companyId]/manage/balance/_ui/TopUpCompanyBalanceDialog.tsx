import React, { useEffect } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography,
    TextField,
    InputAdornment,
    Chip,
    FormHelperText
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

// 1. Define the Form Data Interface
interface TopUpFormValues {
    amount: number | string; // string allows empty state before typing
}

interface TopUpCompanyBalanceDialogProps {
    open: boolean;
    onClose: () => void;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
    onSubmit?: (data: number) => void; // Optional callback for parent
}

const PRESET_AMOUNTS = [50, 100, 250, 500];

export default function TopUpCompanyBalanceDialog({ open, onClose, maxWidth, onSubmit }: TopUpCompanyBalanceDialogProps) {
    
    // 2. Setup React Hook Form
    const { 
        control, 
        handleSubmit, 
        setValue, 
        watch, 
        reset,
        formState: { errors, isValid } 
    } = useForm<TopUpFormValues>({
        defaultValues: { amount: '' },
        mode: 'onChange'
    });

    // Watch the value to highlight the correct chip visually
    const currentAmount = watch("amount");

    // Reset form when dialog opens/closes
    useEffect(() => {
        if (open) reset({ amount: '' });
    }, [open, reset]);

    const handleClose = (_event: unknown, reason: string) => {
        if (reason === "backdropClick") return;
        onClose();
    };

    // 3. Submit Handler
    const onFormSubmit: SubmitHandler<TopUpFormValues> = (data) => {
        const finalAmount = Number(data.amount);
        console.log("Submitting amount:", finalAmount);
        
        if (onSubmit) {
            onSubmit(finalAmount);
        }
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth={maxWidth || "sm"}
            scroll="paper"
        >
            {/* Wrap in form to allow Enter key submission */}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <DialogTitle sx={{ pb: 1, pr: 1.5 }}>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5">
                            Doładowanie konta firmy
                        </Typography>
                        <IconButton onClick={() => handleClose({}, "")}>
                            <Close />
                        </IconButton>
                    </Stack>
                </DialogTitle>

                <DialogContent dividers>
                    <Stack spacing={3} sx={{ mt: 1 }}>
                        <Typography>
                            Wybierz lub wpisz kwotę doładowania:
                        </Typography>

                        {/* Preset Buttons Grid */}
                        <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                            {PRESET_AMOUNTS.map((amount) => {
                                const isSelected = Number(currentAmount) === amount;
                                return (
                                    <Chip
                                        key={amount}
                                        label={`${amount} PLN`}
                                        onClick={() => setValue("amount", amount, { shouldValidate: true })}
                                        color={isSelected ? "primary" : "default"}
                                        variant={isSelected ? "filled" : "outlined"}
                                        clickable
                                        sx={{ 
                                            borderRadius: 6, 
                                            minWidth: '80px',
                                            fontWeight: isSelected ? 'bold' : 'normal',
                                            border: isSelected ? undefined : '1px solid #e0e0e0'
                                        }}
                                    />
                                );
                            })}
                        </Stack>

                        {/* Controlled Input Field */}
                        <Controller
                            name="amount"
                            control={control}
                            rules={{ 
                                required: "Kwota jest wymagana", 
                                min: { value: 1, message: "Minimalna kwota to 1 PLN" }
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Inna kwota"
                                    type="number"
                                    fullWidth
                                    error={!!errors.amount}
                                    helperText={errors.amount?.message}
                                    placeholder="Wpisz kwotę..."
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">PLN</InputAdornment>,
                                    }}
                                    // Ensure value is handled as a number for logic, but string for input
                                    onChange={(e) => field.onChange(e.target.value)} 
                                />
                            )}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => handleClose(null, '')} color="inherit">
                        Anuluj
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={!isValid}
                        sx={{ fontSize: "1.0em", px: 4 }}
                    >
                        Zapłać {currentAmount ? `${currentAmount} PLN` : ''}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}