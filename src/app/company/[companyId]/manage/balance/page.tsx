"use client";

import {Box, Paper, Tab, Tabs, Typography} from "@mui/material";
import React from "react";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";
import CompanyClaimsOverviewTab
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsOverviewTab/CompanyClaimsOverviewTab";
import CompanyClaimsConfigurationTab
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsConfigurationTab/CompanyClaimsConfigurationTab";
import CompanyClaimsOverviewTable
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsOverviewTab/CompanyClaimsOverviewTable";
import CompanyBalanceTransactionTable
    from "@/app/company/[companyId]/manage/balance/_ui/CompanyBalanceTransactionTable";


export default function ManageCompanyBalancePage() {
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zarządzanie rachunkiem</Typography>

            <Box sx={{ mt: 2 }}>
                <CompanyBalanceTransactionTable
                    rows={rows}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    totalCount={totalCount}
                    onPageChange={(newPage: number) => setPage(() => newPage)}
                    onRowsPerPageChange={(newRowsPerPage: number) => setRowsPerPage(newRowsPerPage)}
                />
            </Box>
        </>
    );
}
