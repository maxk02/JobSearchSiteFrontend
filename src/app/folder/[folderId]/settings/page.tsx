"use client";

import {Box, Paper, Tab, Tabs, Typography} from "@mui/material";
import React from "react";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";
import GeneralTab from "./_ui/GeneralTab/GeneralTab";
import FolderClaimsOverviewTab from "./_ui/FolderClaimsOverviewTab/FolderClaimsOverviewTab";
import FolderClaimsConfigurationTab from "./_ui/FolderClaimsConfigurationTab/FolderClaimsConfigurationTab";
import {useCurrentJobFolderStore} from "@/lib/stores/currentJobFolderStore";


export default function FolderSettingsPage() {

    const { currentJobFolderState } = useCurrentJobFolderStore();

    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            {/*<Breadcrumbs aria-label="breadcrumb">*/}
            {/*    <Link underline="hover" color="inherit" href="/public">*/}
            {/*        Udostępnione foldery*/}
            {/*    </Link>*/}
            {/*    <Link*/}
            {/*        underline="hover"*/}
            {/*        color="inherit"*/}
            {/*        href="/public"*/}
            {/*    >*/}
            {/*        Some parent folder 1*/}
            {/*    </Link>*/}
            {/*    <Typography sx={{ color: 'text.primary' }}>Some folder 1</Typography>*/}
            {/*</Breadcrumbs>*/}

            <Typography variant="h4" fontWeight={600} color="primary">
                {currentJobFolderState?.name}
            </Typography>

            <Typography variant="body1" mt={1}>
                {currentJobFolderState?.description}
            </Typography>

            <Box display="flex" flexDirection="column" gap={3} mt={2}>
                <Paper>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChange}>
                            <Tab label="Ogólne" {...tabA11yProps(0)} />
                            <Tab label="Przegląd uprawnień" {...tabA11yProps(1)} />
                            <Tab label="Konfigurowanie uprawnień użytkownika" {...tabA11yProps(2)} />
                        </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                        <GeneralTab />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <FolderClaimsOverviewTab />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <FolderClaimsConfigurationTab />
                    </CustomTabPanel>
                </Paper>
            </Box>
        </>
    );
}
