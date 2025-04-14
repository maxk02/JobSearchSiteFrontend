"use client";

import {
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ChangePasswordFormData, changePasswordSchema} from "@/lib/schemas/changePasswordSchema";
import {changePassword, deleteAccount} from "@/lib/api/account/accountApi";
import {ChangePasswordRequest} from "@/lib/api/account/accountApiInterfaces";
import {useRouter} from "next/navigation";

export default function AccountSettingsPage() {

    const router = useRouter();

    const {handleSubmit, control, formState: {errors}} = useForm<ChangePasswordFormData>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
        },
        mode: 'onChange'
    });

    const onChangePasswordSubmit = async (data: ChangePasswordFormData) => {

        const request: ChangePasswordRequest = {
            oldPassword: data.currentPassword,
            newPassword: data.newPassword,
        }

        const result = await changePassword(request);

        if (result.success) {

        }
    };

    const handleAccountDeletion = async () => {

        const result = await deleteAccount();

        if (result.success) {
            router.push("/");
        }

    }

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Ustawienia konta</Typography>
            <Typography mt={1}>Tutaj możesz zmienić dane konta i edytować ustawienia prywatności oraz
                powiadomień.</Typography>


            <Paper sx={{mt: 2, maxWidth: "900px"}}>
                <Box sx={{px: 2, py: 1.5, pb: 2}}>

                    <Typography variant="h6" fontWeight={600} color="primary">Powiadomienia</Typography>
                    <FormGroup>
                        <FormControlLabel
                            sx={{my: 0.5}}
                            control={<Switch defaultChecked/>}
                            label="Chcę otrzymywać powiadomienia o statusie aplikacji"
                            onChange={() => {}}
                        />
                        {/*<FormControlLabel*/}
                        {/*    sx={{mt: 0.2}}*/}
                        {/*    control={<Switch defaultChecked/>}*/}
                        {/*    label="Chcę otrzymywać powiadomienia o statusie aplikacji"/>*/}
                    </FormGroup>

                    <Typography variant="h6" fontWeight={600} mt={1.5} color="primary">Zmiana hasła</Typography>
                    <form onSubmit={handleSubmit(onChangePasswordSubmit)}>
                        <Stack sx={{gap: 1.5, mt: 1}}>
                            <Controller
                                name="currentPassword"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Obecne hasło"
                                        fullWidth
                                        sx={{width: 400}}
                                        error={!!errors.currentPassword}
                                        helperText={errors.currentPassword?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="newPassword"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Nowe hasło"
                                        fullWidth
                                        sx={{width: 400}}
                                        error={!!errors.newPassword}
                                        helperText={errors.newPassword?.message}
                                    />
                                )}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type="submit"
                                sx={{borderRadius: "50px", width: "125px"}}
                            >
                                Zmień
                            </Button>

                        </Stack>
                    </form>

                    <Typography variant="h6" fontWeight={600} color="primary" mt={2}>Aktywne sesje</Typography>
                    <Typography mt={0.7}>Tutaj możesz przejrzeć aktywne sesje i zakończyć sesje z podejrzanych lub starych urządzeń.</Typography>
                    <TableContainer component={Paper} sx={{mt: 1.7, width: "750px", maxWidth: "750px"}}>
                        <Table sx={{tableLayout: "auto", width: "750px", maxWidth: "750px"}}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Adres IP</TableCell>
                                    <TableCell>Klient</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{textOverflow: "ellipsis"}}>12.12.2024 23:14</TableCell>
                                    <TableCell>192.168.0.1</TableCell>
                                    <TableCell>Firefox 32.1, Windows 10, IDJIJ43D72</TableCell>
                                    <TableCell sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                        >
                                            Zakończ
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Typography variant="h6" fontWeight={600} mt={2} color="primary">Usunięcie konta</Typography>
                    <Typography mt={0.7}>Usuwając konto, stracisz wszystkie zapisane na nim dane, m.in. historię
                        aplikowań i ulubione oferty.</Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        sx={{mt: 1.7}}
                        onClick={handleAccountDeletion}
                    >
                        Usuń konto
                    </Button>
                </Box>
            </Paper>
        </>
    );
}
