"use client";

import React, {useState} from "react";
import {Alert, Button, Container, Link, Paper, Stack, TextField, Typography} from "@mui/material";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";
import {useRouter, useSearchParams} from "next/navigation";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateAccountRequest, ResetForgottenPasswordRequest} from "@/lib/api/account/accountApiInterfaces";
import {createAccount, resetForgottenPassword} from "@/lib/api/account/accountApi";
import {AccountDataDto} from "@/lib/api/account/accountDtos";
import {CreateAccountFormData, createAccountSchema} from "@/lib/schemas/createAccountSchema";
import {SetNewPasswordWithLinkFormData, setNewPasswordWithLinkSchema} from "@/lib/schemas/setNewPasswordWithLinkSchema";
import {CheckCircle} from "@mui/icons-material";

export default function SetNewPasswordPage() {

    const { setCurrentUser } = useCurrentUserStore();

    const router = useRouter();

    const [isSetSuccessfully, setIsSetSuccessfully] = useState<boolean | null>(null);

    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    if (!token)
    {
        router.push("/");
        return;
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SetNewPasswordWithLinkFormData>({
        resolver: zodResolver(setNewPasswordWithLinkSchema),
        defaultValues: {
            newPassword: '',
            confirmNewPassword: '',
        },
    });

    const onSubmit = async (data: SetNewPasswordWithLinkFormData) => {
        const request: ResetForgottenPasswordRequest = {
            token: token,
            newPassword: data.newPassword
        };

        const result = await resetForgottenPassword(request);

        if (result.success) {
            setIsSetSuccessfully(true);
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
                        Ustaw nowe hasło
                    </Typography>

                    {isSetSuccessfully &&
                        <Alert severity="success" icon={<CheckCircle />} sx={{ mt: 3 }}>
                            <Typography>
                                Pomyślnie ustawiono nowe hasło. Możesz już zalogować się z nim na swoje konto.
                            </Typography>
                        </Alert>
                    }

                    <form
                        noValidate
                        onSubmit={handleSubmit(
                            onSubmit,
                            (errors) => console.log("FORM ERRORS", errors)
                        )}
                        style={{ width: "100%" }}
                    >
                        <Stack sx={{ mt: 2.5, gap: 2, width: "100%", alignItems: "center" }}>
                            <Controller
                                name="newPassword"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Nowe hasło"
                                        fullWidth
                                        required
                                        type="password"
                                        error={!!errors.newPassword}
                                        helperText={errors.newPassword?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="confirmNewPassword"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Powtórz nowe hasło"
                                        fullWidth
                                        required
                                        type="password"
                                        error={!!errors.confirmNewPassword}
                                        helperText={errors.confirmNewPassword?.message}
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
                                Ustaw hasło
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </Container>
    );
}
