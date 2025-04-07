"use client";

import {Box, Breadcrumbs, Link, Paper, Tab, Tabs, Typography} from "@mui/material";
import React from "react";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";
import CompanyClaimsOverviewTab
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsOverviewTab/CompanyClaimsOverviewTab";
import CompanyClaimsConfigurationTab
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsConfigurationTab/CompanyClaimsConfigurationTab";


export default function ManageCompanyClaimsPage() {
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zarządzanie uprawnieniami</Typography>

            <Box display="flex" flexDirection="column" gap={3} mt={2}>
                <Paper>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChange}>
                            <Tab label="Przegląd uprawnień" {...tabA11yProps(0)} />
                            <Tab label="Konfigurowanie uprawnień użytkownika" {...tabA11yProps(1)} />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                        <CompanyClaimsOverviewTab />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <CompanyClaimsConfigurationTab />
                    </CustomTabPanel>
                </Paper>
            </Box>
        </>
    );
}
