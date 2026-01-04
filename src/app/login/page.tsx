"use client";

import React from "react";
import {Button, Checkbox, Container, FormControlLabel, Link, Paper, Stack, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LogInFormData, logInSchema} from "@/lib/schemas/logInSchema";
import {logIn} from "@/lib/api/account/accountApi";
import {LogInRequest} from "@/lib/api/account/accountApiInterfaces";
import {useCurrentUserStore} from "@/lib/stores/currentUserStore";
import {useRouter} from "next/navigation";


export default function LoginPage() {
    const { setCurrentUser } = useCurrentUserStore();

    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormData>({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const onSubmit = async (data: LogInFormData) => {
        const logInRequest: LogInRequest = {
            email: data.email,
            password: data.password,
        };

        const logInResult = await logIn(logInRequest);

        if (logInResult.success) {
            setCurrentUser(logInResult.data.accountData);
            router.push("/");
        }
        else {
            console.log(`Failed (${logInResult.status})`)
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper sx={{ width: "100%", px: 9, pt: 6, pb: 8 }}>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <Typography variant="h4" mb={1.5} sx={{ textAlign: "center" }}>
                        Logowanie
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
                        <Typography>
                            Zapomniałeś hasła?
                        </Typography>
                        <Link href="#" variant="body1">
                            Zresetuj hasło
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
                            {/* <Controller
                                name="rememberMe"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field}
                                                checked={field.value}
                                                onChange={(e) => field.onChange(e.target.checked)}
                                            />
                                        }
                                        label="Zapamiętaj konto"
                                    />
                                )}
                            /> */}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 0.5, py: 1.5, width: "75%", fontSize: "1.02rem" }}
                                size="large"
                            >
                                Zaloguj się
                            </Button>
                        </Stack>
                    </form>
                </Stack>
            </Paper>
        </Container>
    );
}
