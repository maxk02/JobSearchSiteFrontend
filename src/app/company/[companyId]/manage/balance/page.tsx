"use client";

import {Box, Button, Paper, Stack, Tab, Tabs, Typography} from "@mui/material";
import React, { useState } from "react";
import CompanyBalanceTransactionTable
    from "@/app/company/[companyId]/manage/balance/_ui/CompanyBalanceTransactionTable";
import { CompanyBalanceTransactionDto } from "@/lib/api/companies/companiesApiDtos";
import { Add } from "@mui/icons-material";
import TopUpCompanyBalanceDialog from "./_ui/TopUpCompanyBalanceDialog";


export default function ManageCompanyBalancePage() {
    const [value, setValue] = React.useState(0);

    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [rows, setRows] = useState<CompanyBalanceTransactionDto[]>([]);

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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
                            150 PLN
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
