"use client";

import React, {useState} from "react";
import {
    Alert,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Link,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LogInFormData, logInSchema} from "@/lib/schemas/logInSchema";
import {logIn, sendPasswordResetLink} from "@/lib/api/account/accountApi";
import {LogInRequest, SendPasswordResetLinkRequest} from "@/lib/api/account/accountApiInterfaces";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";
import {useRouter} from "next/navigation";
import {CheckCircle, Info} from "@mui/icons-material";
import {ResetPasswordFormData, resetPasswordSchema} from "@/lib/schemas/resetPasswordSchema";


export default function ResetPasswordPage() {
    const { setCurrentUser } = useCurrentUserStore();

    const router = useRouter();

    const [isSentSuccessfully, setIsSentSuccessfully] = useState<boolean | null>(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        const request: SendPasswordResetLinkRequest = {
            email: data.email,
        };

        const result = await sendPasswordResetLink(request);

        if (result.success) {
            setIsSentSuccessfully(true);
        }
        else {
            console.log(`Failed (${result.status})`)
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper sx={{ width: "100%", px: 9, pt: 6, pb: 8 }}>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <Typography variant="h4" mb={1.5} sx={{ textAlign: "center" }}>
                        Resetowanie hasła
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
                        <Typography>
                            Nie potrzebujesz resetowania hasła?
                        </Typography>
                        <Link href="#" variant="body1">
                            Zaloguj się
                        </Link>
                    </Stack>

                    {isSentSuccessfully &&
                        <Alert severity="success" icon={<CheckCircle />} sx={{ mt: 3 }}>
                            <Typography>
                                Link do ustawienia nowego hasła wysłano pomyślnie. Skorzystaj z niego w ciągu 15 minut.
                            </Typography>
                        </Alert>
                    }

                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                        <Stack sx={{ mt: 3.5, gap: 2, width: "100%", alignItems: "center" }}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Email"
                                        fullWidth
                                        required
                                        error={!!errors.email}
                                        helperText={errors.email?.message}
                                    />
                                )}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2, py: 1.5, width: "75%", fontSize: "1.02rem" }}
                                size="large"
                            >
                                Wyślij link
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </Container>
    );
}
