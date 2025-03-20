"use client";

import {Box, Typography} from "@mui/material";
import React from "react";

import CreateEditJobPublicationIntervalCard from "@/app/_ui/_create_edit_job/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentTypeCard from "@/app/_ui/_create_edit_job/CreateEditJobEmploymentTypeCard";
import CreateEditJobContractTypeCard from "@/app/_ui/_create_edit_job/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/_create_edit_job/CreateEditJobSalaryDataCard";
import CreateEditJobResponsibilitiesCard from "@/app/_ui/_create_edit_job/CreateEditJobResponsibilitiesCard";
import CreateEditJobRequirementsCard from "@/app/_ui/_create_edit_job/CreateEditJobRequirementsCard";
import CreateEditJobNiceToHavesCard from "@/app/_ui/_create_edit_job/CreateEditJobNiceToHavesCard";
import CreateEditJobLocationCard from "@/app/_ui/_create_edit_job/CreateEditJobLocationCard";
import CreateEditJobBasicInfoCard from "@/app/_ui/_create_edit_job/CreateEditJobBasicInfoCard";


export default function CreateJobPage() {
    return (
        <Box sx={{ width: "780px", maxWidth: "780px" }}>
            <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
            <Typography mt={1}>O</Typography>


            <CreateEditJobBasicInfoCard />

            <CreateEditJobLocationCard />

            <CreateEditJobPublicationIntervalCard />

            <CreateEditJobEmploymentTypeCard />

            <CreateEditJobContractTypeCard />

            <CreateEditJobSalaryDataCard />

            <CreateEditJobResponsibilitiesCard />

            <CreateEditJobRequirementsCard />

            <CreateEditJobNiceToHavesCard />
        </Box>
    );
}
