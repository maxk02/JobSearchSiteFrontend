"use client";

import {Box, Typography} from "@mui/material";
import React from "react";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";
import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentOptionCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentOptionCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobListCard from "@/app/_ui/CreateEditJob/CreateEditJobListCard";


export default function CreateJobPage() {
    return (
        <Box sx={{ width: "800px", maxWidth: "800px" }}>
            <Typography variant="h4" fontWeight={600} color="primary">Edycja oferty pracy</Typography>
            <Typography mt={1}>O</Typography>


            <CreateEditJobBasicInfoCard />

            <CreateEditJobLocationCard />

            <CreateEditJobPublicationIntervalCard />

            <CreateEditJobEmploymentOptionCard />

            <CreateEditJobContractTypeCard />

            <CreateEditJobSalaryDataCard />

            <CreateEditJobListCard cardTitle="Obowiązki" fieldName="responsibilities" />

            <CreateEditJobListCard cardTitle="Wymogi" fieldName="requirements" />

            <CreateEditJobListCard cardTitle="Mile widziane" fieldName="niceToHaves" />

        </Box>
    );
}
