"use client";

import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    FormLabel,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Close, Refresh} from "@mui/icons-material";
import CompanyClaimsConfigurationTable from "./CompanyClaimsConfigurationTable";
import {useParams} from "next/navigation";
import {getCompanyClaimIdsForUser} from "@/lib/api/companyClaims/companyClaimsApi";
import { AccountDataDto } from "@/lib/api/account/accountApiDtos";
import {getUsers} from "@/lib/api/companies/companiesApi";
import {GetCompanyUsersRequest} from "@/lib/api/companies/companiesApiInterfaces";
import Image from "next/image";


export default function CompanyClaimsConfigurationTab() {

    const params = useParams();
    const companyId = parseInt(params.companyId as string, 10);

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [activeCompanyClaimIds, setActiveCompanyClaimIds] = useState<number[]>([]);

    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [refreshButtonCounter, setRefreshButtonCounter] = useState<number>(0);

    const [displayedUser, setDisplayedUser] = useState<AccountDataDto | null>(null);

    const [options, setOptions] = useState<AccountDataDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {

        const fetchData = async () => {

            if (!selectedUserId) {
                return;
            }

            const result = await getCompanyClaimIdsForUser(companyId, selectedUserId);

            if (result.success) {
                setDisplayedUser(options.find(o => o.id === selectedUserId) ?? null);
                setActiveCompanyClaimIds(result.data);
            }
        };

        fetchData();

    }, [companyId, page, rowsPerPage, selectedUserId, refreshButtonCounter, options]);

    const handleClearSearch = () => {
        setInputValue("");
        setOptions([]);
    };

    useEffect(() => {

        const fetchOptions = async (query: string) => {
            if (!query) {
                setOptions([]);
                return;
            }

            setLoading(true);

            const request: GetCompanyUsersRequest = {
                query: query,
                paginationSpec: { pageNumber: 1, pageSize: 5 },
            };

            const result = await getUsers(request);

            if (result.success) {
                setOptions(result.data.users);
            }

            setLoading(false);
        };

        const timeoutId = setTimeout(() => {
            fetchOptions(inputValue);
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                <FormLabel>Wybierz użytkownika:</FormLabel>
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => option.email}
                    loading={loading}
                    onChange={(_, newValue) => {
                        const newId = newValue?.id;
                        setSelectedUserId(newId ?? null);
                    }}
                    onInputChange={(_, newInputValue, reason) => {
                        if (reason === 'input') {
                            setInputValue(newInputValue);
                        }
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Imię/nazwisko/email"
                            sx={{
                                ml: 1.3,
                                width: "400px"
                            }}
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: inputValue.length > 0 && (
                                    <>
                                        {/*{loading &&*/}
                                        {/*    <InputAdornment position="end">*/}
                                        {/*        <CircularProgress size={20}/>*/}
                                        {/*    </InputAdornment>*/}
                                        {/*}*/}
                                        {inputValue.length > 0 &&
                                            <InputAdornment position="end">
                                                <IconButton onClick={handleClearSearch} size="small">
                                                    <Close/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    </>
                                ),
                            }}
                        />
                    )}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Refresh />}
                    onClick={() => setRefreshButtonCounter(prevVal => prevVal + 1)}
                    sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                >
                    Odśwież
                </Button>
            </Box>

            {displayedUser &&
                <>
                    <Stack spacing={1} sx={{ mt: 1.5 }}>
                        <Typography variant="h5">
                            Wybrany użytkownik
                        </Typography>
                        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                            <Avatar variant="circular" sx={{ height: 60, width: 60 }}>
                                <Image width={60} height={60} src={displayedUser.avatarLink ?? "/avatar2.webp"} alt="User's avatar" />
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
                            activeCompanyClaimIds={activeCompanyClaimIds}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            onPageChange={(newPage: number) => setPage(() => newPage)}
                            onRowsPerPageChange={(newRowsPerPage: number) => setRowsPerPage(newRowsPerPage)}
                        />
                    </Box>
                </>
            }
        </Box>
    );
}