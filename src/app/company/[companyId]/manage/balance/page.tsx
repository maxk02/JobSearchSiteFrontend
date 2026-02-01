"use client";

import {Box, Button, Paper, Stack, Tab, Tabs, Typography} from "@mui/material";
import React, { useEffect, useState } from "react";
import CompanyBalanceTransactionTable
    from "@/app/company/[companyId]/manage/balance/_ui/CompanyBalanceTransactionTable";
import { CompanyBalanceTransactionDto } from "@/lib/api/companies/companiesApiDtos";
import { Add } from "@mui/icons-material";
import TopUpCompanyBalanceDialog from "./_ui/TopUpCompanyBalanceDialog";
import { useParams } from "next/navigation";
import { GetCompanyBalanceTransactionsRequest } from "@/lib/api/companies/companiesApiInterfaces";
import { getCompanyBalance, getCompanyBalanceTransactions } from "@/lib/api/companies/companiesApi";


export default function ManageCompanyBalancePage() {

    const params = useParams();
    const companyId = parseInt(params.companyId as string, 10);

    const [currentBalance, setCurrentBalance] = useState<string>("brak danych");
    const [currentBalanceCurrency, setCurrentBalanceCurrency] = useState<string>("");

    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(15);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [rows, setRows] = useState<CompanyBalanceTransactionDto[]>([]);

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    useEffect(() => {

        const fetchBalance = async () => {
            const result = await getCompanyBalance(companyId);

            if (result.success) {
                setCurrentBalance(result.data.balance.toString());
                setCurrentBalanceCurrency(result.data.currencyCode);
            }
        };
    
        const fetchBalanceTransactions = async () => {
            const request: GetCompanyBalanceTransactionsRequest = {
                page: page,
                size: rowsPerPage,
            };

            const result = await getCompanyBalanceTransactions(companyId, request);

            if (result.success) {
                setRows(result.data.companyBalanceTransactionDtos);
                setTotalCount(result.data.paginationResponse.totalCount);
                setPage(result.data.paginationResponse.currentPage);
            }
        };

        fetchBalance();
        fetchBalanceTransactions();
        
    }, [companyId, page, rowsPerPage]);

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zarządzanie rachunkiem</Typography>

            <Paper sx={{ p: 2, mt: 1.3, maxWidth: "fit-content" }}>
                <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
                    <Stack direction="column">

                        <Typography sx={{ fontSize: "1.1em", fontWeight: "500" }}>
                            Środki na koncie:
                        </Typography>
                        <Typography color="primary" sx={{ mt: 0.3, fontSize: "1.3em", fontWeight: "bold" }}>
                            {currentBalance} {currentBalanceCurrency}
                        </Typography>
                        
                    </Stack>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Add />}
                        onClick={() => setIsDialogOpen(true)}
                        // disabled={items.length >= 10}
                        sx={{ borderRadius: "50px", width: "fit-content" }}
                        >
                            Doładuj
                    </Button>

                </Stack>
            </Paper>

            <Stack direction="column" gap={1.8} sx={{ mt: 2.2 }}>
                <Typography variant="h5" fontWeight={600} color="primary">Historia transakcji</Typography>

                <CompanyBalanceTransactionTable
                    rows={rows}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    totalCount={totalCount}
                    onPageChange={(newPage: number) => setPage(() => newPage)}
                    onRowsPerPageChange={(newRowsPerPage: number) => setRowsPerPage(newRowsPerPage)}
                />
            </Stack>

            <TopUpCompanyBalanceDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
        </>
    );
}
