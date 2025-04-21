"use client";

import React from "react";
import {Button, Container, Link, Paper, Stack, TextField, Typography} from "@mui/material";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";
import {useRouter} from "next/navigation";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateAccountRequest} from "@/lib/api/account/accountApiInterfaces";
import {createAccount} from "@/lib/api/account/accountApi";
import {AccountDataDto} from "@/lib/api/account/accountDtos";
import {CreateAccountFormData, createAccountSchema} from "@/lib/schemas/createAccountSchema";

export default function RegisterPage() {

    const { setCurrentUser } = useCurrentUserStore();

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAccountFormData>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = async (data: CreateAccountFormData) => {
        const request: CreateAccountRequest = {
            email: data.email,
            password: data.password,
        };

        const result = await createAccount(request);

        if (result.success) {
            const newCurrentUser: AccountDataDto = {
                id: result.data.id,
                email: data.email,
                fullName: null,
                avatarLink: null,
                companiesManaged: []
            };

            setCurrentUser(newCurrentUser);
            router.push("/register/profile?step=1");
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
                        Rejestracja
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
                        <Typography>
                            Masz konto?
                        </Typography>
                        <Link href="/login" variant="body1">
                            Zaloguj się
                        </Link>
                    </Stack>
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
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Hasło"
                                        fullWidth
                                        required
                                        error={!!errors.password}
                                        helperText={errors.password?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Powtórz hasło"
                                        fullWidth
                                        required
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword?.message}
                                    />
                                )}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 0.5, py: 1.5, width: "75%", fontSize: "1.02rem" }}
                                size="large"
                            >
                                Zarejestruj się
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </Container>
    );
}
