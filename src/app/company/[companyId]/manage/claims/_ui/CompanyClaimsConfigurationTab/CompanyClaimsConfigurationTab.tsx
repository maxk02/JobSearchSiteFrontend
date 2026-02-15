"use client";

import {
    Alert,
    Autocomplete,
    Avatar,
    Box,
    Button,
    FormControlLabel,
    FormLabel,
    Icon,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {
    CheckCircle,
    Error,
    Help,
    HighlightOff,
    Info,
    Refresh,
    Replay,
    ScreenSearchDesktop,
    Send
} from "@mui/icons-material";
import CompanyClaimsConfigurationTable from "./CompanyClaimsConfigurationTable";
import {useParams} from "next/navigation";
import {getCompanyClaimIdsForUser} from "@/lib/api/companyClaims/companyClaimsApi";
import {
    getCompanyEmployeeInvitation,
    getCompanyEmployees,
    sendCompanyEmployeeInvitation
} from "@/lib/api/companies/companiesApi";
import {
    GetCompanyEmployeeInvitationRequest,
    GetCompanyEmployeesRequest,
    SendCompanyEmployeeInvitationRequest
} from "@/lib/api/companies/companiesApiInterfaces";
import Image from "next/image";
import {CompanyEmployeeDto, CompanyEmployeeInvitationDto} from "@/lib/api/companies/companiesApiDtos";


const formatPolishDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return formatter.format(date);
};

export default function CompanyClaimsConfigurationTab() {

    const params = useParams();
    const companyId = parseInt(params.companyId as string, 10);

    // const [page, setPage] = useState<number>(1);
    // const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [activeCompanyClaimIds, setActiveCompanyClaimIds] = useState<number[]>([]);

    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [refreshButtonCounter, setRefreshButtonCounter] = useState<number>(0);

    const [displayedUser, setDisplayedUser] = useState<CompanyEmployeeDto | null>(null);

    const [findUserOptions, setFindUserOptions] = useState<CompanyEmployeeDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [findUserInputValue, setFindUserInputValue] = useState('');

    const [userMode, setUserMode] = useState<'existing' | 'new'>('existing');
    const [checkedUserEmail, setCheckedUserEmail] = useState('');
    const [invitationSendingError, setInvitationSendingError] = useState<boolean>(false);
    const [companyEmployeeInvitation, setCompanyEmployeeInvitation] = useState<CompanyEmployeeInvitationDto | null | undefined>(undefined);

    useEffect(() => {

        const fetchData = async () => {

            if (!selectedUserId) {
                return;
            }

            const claimIdsResult = await getCompanyClaimIdsForUser(companyId, selectedUserId);

            if (claimIdsResult.success) {
                setActiveCompanyClaimIds(claimIdsResult.data.claimIds);
            }
            else {
                console.error('couldnt fetch claim ids');
            }
        };

        fetchData();

    }, [companyId, refreshButtonCounter, selectedUserId]);

    useEffect(() => {

        const fetchOptions = async (query: string) => {
            if (!query) {
                setFindUserOptions([]);
                return;
            }

            setLoading(true);

            const request: GetCompanyEmployeesRequest = {
                query: query,
                page: 1,
                size: 5
            };

            const result = await getCompanyEmployees(companyId, request);

            if (result.success) {
                setFindUserOptions(() => result.data.employees ?? []);
            }
            else {
                console.error(`couldnt get users, ${result.status}, ${result.error.message}`);
            }

            setLoading(false);
        };

        const timeoutId = setTimeout(() => {
            fetchOptions(findUserInputValue);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [companyId, findUserInputValue]);

    const handleModeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserMode(e.target.value as 'existing' | 'new');
        setDisplayedUser(null);
        setSelectedUserId(null);
        setInvitationSendingError(false);
    };

    const handleCheckUser = async (email: string) => {
        const request: GetCompanyEmployeeInvitationRequest = {
            invitedUserEmail: email,
        };

        const result = await getCompanyEmployeeInvitation(companyId, request);

        if (result.success) {
            setCompanyEmployeeInvitation(result.data.companyEmployeeInvitationDto);
        } else {
            setCompanyEmployeeInvitation(null);
        }
    };

    const handleSendUserInvitation = async (email: string) => {
        const request: SendCompanyEmployeeInvitationRequest = {
            invitedUserEmail: email,
        };

        const result = await sendCompanyEmployeeInvitation(companyId, request);

        if (result.success) {
            setCompanyEmployeeInvitation(result.data.companyEmployeeInvitationDto);
        } else {
            setInvitationSendingError(true);
        }
    };

    const handleDeleteUserInvitation = async (email: string) => {
        setCompanyEmployeeInvitation(null);
        setInvitationSendingError(false);
    };

    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Alert severity="info" icon={<Info />} sx={{ maxWidth: "550px", mt: 0.5 }}>
                <Typography>By zarządzać uprawnieniami, wybierz istniejącego użytkownika z puli Twojej
                    firmy lub wyślij mailowo zaproszenie nowemu użytkownikowi poprzez formularz dodania.</Typography>
            </Alert>
            <RadioGroup
                row
                value={userMode}
                onChange={(e) => {handleModeChange(e)}}
                sx={{ mt: 1 }}
            >
                <FormControlLabel value="existing" control={<Radio />} label="Wybór użytkownika" />
                <FormControlLabel value="new" control={<Radio />} label="Zaproszenie użytkownika" />
            </RadioGroup>

            {userMode === 'existing' ? (
                <Stack direction="row" sx={{ alignItems: "center" }} mt={1.2}>
                    <FormLabel>Wybór użytkownika:</FormLabel>
                    <Autocomplete
                        // multiple
                        forcePopupIcon={false}
                        disableClearable={false}
                        options={findUserOptions}
                        getOptionLabel={(option) => option.email}
                        loading={loading}
                        filterOptions={(x) => x}
                        onChange={(_, newUser) => {
                            setSelectedUserId(newUser?.id ?? null);
                            setDisplayedUser(newUser);
                        }}
                        onInputChange={(_, newInputValue, reason) => {
                            if (reason === 'input') {
                                setFindUserInputValue(newInputValue);
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Imię/nazwisko/email"
                                sx={{
                                    ml: 1.1,
                                    width: "400px",
                                    '& .MuiAutocomplete-clearIndicator': {
                                        visibility: 'visible',
                                    },
                                }}
                            />
                        )}
                        renderOption={(props, option) => {

                            const { key, ...rest } = props;

                            return (
                                <ListItem component="li" key={key} {...rest}>
                                    {option.avatarLink ? (
                                        <ListItemAvatar>
                                            <Avatar sx={{ width: 30, height: 30 }}>
                                                <Image width={30} height={30}
                                                        src={option.avatarLink} alt="User's avatar image"
                                                    />
                                            </Avatar>
                                        </ListItemAvatar>
                                    ) : (
                                        <ListItemAvatar>
                                            <Avatar sx={{ width: 30, height: 30 }} />
                                        </ListItemAvatar>
                                    )}
                                    <ListItemText
                                        primary={option.email}
                                        secondary={option.fullName || ''}
                                    />
                                </ListItem>
                            );
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Refresh />}
                        disabled={!selectedUserId}
                        onClick={() => setRefreshButtonCounter(prevVal => prevVal + 1)}
                        sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                    >
                        Odśwież
                    </Button>
                </Stack>
            ) : (
                <>
                    <Stack direction="row" sx={{ alignItems: "center" }} mt={1.2}>
                        <FormLabel>Wprowadź email:</FormLabel>
                        <TextField
                            // label="Wprowadź email..."
                            value={checkedUserEmail}
                            onChange={(e) => setCheckedUserEmail(e.target.value)}
                            sx={{ ml: 1.1, width: "400px" }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<ScreenSearchDesktop />}
                            disabled={!checkedUserEmail}
                            onClick={() => handleCheckUser(checkedUserEmail)}
                            sx={{ ml: 2.5, borderRadius: "50px" }}
                        >
                            Sprawdź status
                        </Button>
                    </Stack>
                    {companyEmployeeInvitation &&
                        <Stack direction="column" gap={1.2}>
                            <Stack direction="row" gap={1} sx={{ alignItems: "center", mt: 1.8 }}>
                                <Icon color="success" sx={{ mb: 0.8, p: 0 }}>
                                    <CheckCircle />
                                </Icon>

                                <Typography color="success" sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                    Zaproszenie ważne do: {formatPolishDateTime(companyEmployeeInvitation.dateTimeValidUtc)}
                                </Typography>

                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="medium"
                                    startIcon={<Replay />}
                                    onClick={() => handleSendUserInvitation(checkedUserEmail)}
                                    sx={{ ml: 1, mb: 0.2, borderRadius: "50px" }}
                                >
                                    Wyślij ponownie
                                </Button>

                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="medium"
                                    startIcon={<HighlightOff />}
                                    onClick={() => handleDeleteUserInvitation(checkedUserEmail)}
                                    sx={{ ml: 1, mb: 0.2, borderRadius: "50px" }}
                                >
                                    Unieważnij
                                </Button>
                            </Stack>

                            <Typography color="textSecondary">
                                Zaproszenie ma wkrótce dotrzeć do odbiorcy o ile konto jest zarejestrowane na znajdzprace.pl.
                            </Typography>
                        </Stack>
                    }
                    {displayedUser !== undefined && companyEmployeeInvitation === null && !invitationSendingError &&
                        <Stack direction="row" gap={1} sx={{ alignItems: "center", mt: 1.8 }}>
                            <Icon color="info" sx={{ mb: 0.8, p: 0 }}>
                                <Help />
                            </Icon>

                            <Typography color="info" sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Brak zaproszenia
                            </Typography>

                            <Button
                                variant="outlined"
                                color="primary"
                                size="medium"
                                startIcon={<Send />}
                                onClick={() => handleSendUserInvitation(checkedUserEmail)}
                                sx={{ ml: 1, mb: 0.2, borderRadius: "50px" }}
                            >
                                Wyślij
                            </Button>
                        </Stack>
                    }
                    {companyEmployeeInvitation === null && invitationSendingError &&
                        <Stack direction="row" gap={1} sx={{ alignItems: "center", mt: 1.8 }}>
                            <Icon color="error" sx={{ mb: 0.8, p: 0 }}>
                                <Error />
                            </Icon>

                            <Typography color="error" sx={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                Nie udało się wysłać zaproszenia
                            </Typography>

                            <Button
                                variant="outlined"
                                color="primary"
                                size="medium"
                                startIcon={<Replay />}
                                onClick={() => handleSendUserInvitation(checkedUserEmail)}
                                sx={{ ml: 1, mb: 0.2, borderRadius: "50px" }}
                            >
                                Spróbuj ponownie
                            </Button>
                        </Stack>
                    }
                </>
            )}

            {displayedUser &&
                <>
                    <Stack spacing={1} sx={{ mt: 1.5 }}>
                        <Typography variant="h5">
                            Wybrany użytkownik
                        </Typography>
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                            <Avatar variant="circular" sx={{ height: 60, width: 60 }}>
                                {displayedUser.avatarLink &&
                                    <Image width={60} height={60} src={displayedUser.avatarLink} alt="User's avatar" />
                                }
                            </Avatar>
                            <Stack>
                                <Typography variant="body1" fontWeight={600} gutterBottom m={0} sx={{ flex: "none" }}>
                                    {displayedUser.fullName}
                                </Typography>
                                <Typography variant="body1" gutterBottom m={0} sx={{ flex: "none" }}>
                                    {displayedUser.email}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Stack>

                    <Box sx={{ mt: 2.3 }}>
                        <CompanyClaimsConfigurationTable
                            companyId={companyId}
                            user={displayedUser}
                            activeClaimIds={activeCompanyClaimIds}
                            // page={page}
                            // rowsPerPage={rowsPerPage}
                            // onPageChange={(newPage: number) => setPage(() => newPage)}
                            // onRowsPerPageChange={(newRowsPerPage: number) => setRowsPerPage(newRowsPerPage)}
                        />
                    </Box>
                </>
            }
        </Box>
    );
}