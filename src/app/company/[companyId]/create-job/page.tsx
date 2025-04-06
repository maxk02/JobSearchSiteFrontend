"use client";

import {Box, Typography} from "@mui/material";
import React from "react";

import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentTypeCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobResponsibilitiesCard from "@/app/_ui/CreateEditJob/CreateEditJobResponsibilitiesCard";
import CreateEditJobRequirementsCard from "@/app/_ui/CreateEditJob/CreateEditJobRequirementsCard";
import CreateEditJobNiceToHavesCard from "@/app/_ui/CreateEditJob/CreateEditJobNiceToHavesCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";


export default function CreateJobPage() {
    return (
        <Box sx={{ width: "800px", maxWidth: "800px" }}>
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
