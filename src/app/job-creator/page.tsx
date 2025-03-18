"use client";

import {Box, Typography} from "@mui/material";
import React from "react";
import JobBasicInfoCard from "./_ui/JobBasicInfoCard";
import JobPublicationIntervalCard from "@/app/job-creator/_ui/JobPublicationIntervalCard";
import JobEmploymentTypeCard from "@/app/job-creator/_ui/JobEmploymentTypeCard";
import JobContractTypeCard from "@/app/job-creator/_ui/JobContractTypeCard";
import JobSalaryDataCard from "@/app/job-creator/_ui/JobSalaryDataCard";
import JobResponsibilitiesCard from "@/app/job-creator/_ui/JobResponsibilitiesCard";
import JobRequirementsCard from "@/app/job-creator/_ui/JobRequirementsCard";
import JobNiceToHavesCard from "@/app/job-creator/_ui/JobNiceToHavesCard";
import JobLocationCard from "@/app/job-creator/_ui/JobLocationCard";


export default function CreateJobPage() {
    return (
        <>
            <Box sx={{ width: "780px", maxWidth: "780px" }}>
                <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
                <Typography mt={1}>O</Typography>


                <JobBasicInfoCard />

                <JobLocationCard />

                <JobPublicationIntervalCard />

                <JobEmploymentTypeCard />

                <JobContractTypeCard />

                <JobSalaryDataCard />

                <JobResponsibilitiesCard />

                <JobRequirementsCard />

                <JobNiceToHavesCard />
            </Box>
        </>
    );
}
