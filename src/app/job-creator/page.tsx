"use client";

import {Box, Typography} from "@mui/material";
import React from "react";
import JobCreatorBasicInfoCard from "./_ui/JobCreatorBasicInfoCard";
import JobCreatorPublicationIntervalCard from "@/app/job-creator/_ui/JobCreatorPublicationIntervalCard";
import JobCreatorEmploymentTypeCard from "@/app/job-creator/_ui/JobCreatorEmploymentTypeCard";
import JobCreatorContractTypeCard from "@/app/job-creator/_ui/JobCreatorContractTypeCard";
import JobCreatorSalaryDataCard from "@/app/job-creator/_ui/JobCreatorSalaryDataCard";
import JobCreatorResponsibilitiesCard from "@/app/job-creator/_ui/JobCreatorResponsibilitiesCard";
import JobCreatorRequirementsCard from "@/app/job-creator/_ui/JobCreatorRequirementsCard";
import JobCreatorNiceToHavesCard from "@/app/job-creator/_ui/JobCreatorNiceToHavesCard";
import JobCreatorLocationCard from "@/app/job-creator/_ui/JobCreatorLocationCard";


export default function CreateJobPage() {
    return (
        <>
            <Box sx={{ width: "780px", maxWidth: "780px" }}>
                <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
                <Typography mt={1}>O</Typography>


                <JobCreatorBasicInfoCard />

                <JobCreatorLocationCard />

                <JobCreatorPublicationIntervalCard />

                <JobCreatorEmploymentTypeCard />

                <JobCreatorContractTypeCard />

                <JobCreatorSalaryDataCard />

                <JobCreatorResponsibilitiesCard />

                <JobCreatorRequirementsCard />

                <JobCreatorNiceToHavesCard />
            </Box>
        </>
    );
}
