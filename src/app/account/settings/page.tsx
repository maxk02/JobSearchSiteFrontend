"use client";

import {
    Alert,
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ChangePasswordFormData, changePasswordSchema} from "@/lib/schemas/changePasswordSchema";
import {changePassword, deleteAccount} from "@/lib/api/account/accountApi";
import {ChangePasswordRequest} from "@/lib/api/account/accountApiInterfaces";
import {useRouter} from "next/navigation";
import {getUserProfile, updateUserProfile} from "@/lib/api/userProfiles/userProfilesApi";
import {UpdateUserProfileRequest} from "@/lib/api/userProfiles/userProfilesApiInterfaces";
import {Info} from "@mui/icons-material";

export default function AccountSettingsPage() {

    // const [userSessions, setUserSessions] = useState<UserSessionDto[]>([]);
    const [isReceivingApplicationStatusUpdates, setIsReceivingApplicationStatusUpdates] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        const fetchUserProfile = async () => {
            const result = await getUserProfile();

            if (result.success) {
                setIsReceivingApplicationStatusUpdates(result.data.isReceivingApplicationStatusUpdates);
            }
        };

        fetchUserProfile();
    });

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

    };

    // const handleTerminateSession = async (token: string, isCurrent: boolean) => {
    //     const result = await terminateSession(token);
    //
    //     if (!result.success) {
    //         console.log("Failed to terminate session");
    //         return;
    //     }
    //
    //     if (isCurrent) {
    //         router.push("/");
    //     }
    //     else {
    //         setUserSessions(prevSessions => prevSessions.filter(s => s.token !== token));
    //     }
    // };

    const handleToggleApplicationStatusUpdates = async (currentVal: boolean) => {

        const request: UpdateUserProfileRequest = {
            firstName: null,
            lastName: null,
            phone: null,
            isReceivingApplicationStatusUpdates: !currentVal,

        };

        const result = await updateUserProfile(request);

        if (result.success) {
            setIsReceivingApplicationStatusUpdates(!currentVal);
        }

    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Ustawienia konta</Typography>
            <Typography mt={1}>Tutaj możesz zmienić dane konta i edytować ustawienia prywatności oraz
                powiadomień.</Typography>


            <Paper sx={{mt: 2, maxWidth: "900px"}}>
                <Box sx={{px: 2, py: 1.5, pb: 2}}>

                    <Typography variant="h5" fontWeight={600} color="primary">Powiadomienia</Typography>
                    <FormGroup>
                        <FormControlLabel
                            sx={{my: 0.5}}
                            control={<Switch defaultChecked/>}
                            label="Chcę otrzymywać powiadomienia o statusie aplikacji"
                            value={isReceivingApplicationStatusUpdates}
                            onChange={(_, checked) => handleToggleApplicationStatusUpdates(checked)}
                        />
                    </FormGroup>

                    <Typography variant="h5" fontWeight={600} mt={1.5} color="primary">Zmiana hasła</Typography>
                    <Alert severity="info" icon={<Info />} sx={{ maxWidth: "450px", mt: 0.5 }}>
                        <Typography>
                            Po zmianie hasła zostaniesz wylogowany ze wszystkich pozostałych urządzeń.
                        </Typography>
                    </Alert>
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
                                        sx={{width: 450}}
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
                                        sx={{width: 450}}
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

                    {/*<Typography variant="h5" fontWeight={600} color="primary" mt={2}>Aktywne sesje</Typography>*/}
                    {/*<Typography mt={0.7}>Tutaj możesz przejrzeć aktywne sesje i zakończyć sesje z podejrzanych lub starych urządzeń.</Typography>*/}
                    {/*<TableContainer component={Paper} sx={{mt: 1.7, width: "750px", maxWidth: "750px"}}>*/}
                    {/*    <Table sx={{tableLayout: "auto", width: "750px", maxWidth: "750px"}}>*/}
                    {/*        <TableHead>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell>Data pierwszego logowania</TableCell>*/}
                    {/*                <TableCell>Klient</TableCell>*/}
                    {/*                <TableCell></TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*        </TableHead>*/}
                    {/*        <TableBody>*/}
                    {/*            {userSessions.map((item) => (*/}
                    {/*                <TableRow key={item.token}>*/}
                    {/*                    <TableCell>{item.firstTimeIssuedUtc}</TableCell>*/}
                    {/*                    <TableCell>*/}
                    {/*                        {[item.clientDeviceName, item.clientOs, item.clientBrowser].join(',')}*/}
                    {/*                    </TableCell>*/}
                    {/*                    <TableCell sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>*/}
                    {/*                        <Button*/}
                    {/*                            variant="outlined"*/}
                    {/*                            color="error"*/}
                    {/*                            onClick={() => handleTerminateSession(item.token, item.isCurrent)}*/}
                    {/*                        >*/}
                    {/*                            Zakończ*/}
                    {/*                        </Button>*/}
                    {/*                    </TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*            ))}*/}
                    {/*        </TableBody>*/}
                    {/*    </Table>*/}
                    {/*</TableContainer>*/}

                    <Typography variant="h5" fontWeight={600} mt={2} color="primary">Usunięcie konta</Typography>
                    <Typography mt={0.7} sx={{ width: "500px" }}>Usuwając konto, stracisz wszystkie zapisane na nim dane, m.in. historię
                        aplikowań i ulubione oferty.</Typography>
                    <Button
                        variant="text"
                        color="error"
                        sx={{mt: 1.7, p: 0}}
                        onClick={handleAccountDeletion}
                    >
                        Usuń konto
                    </Button>
                </Box>
            </Paper>
        </>
    );
}
