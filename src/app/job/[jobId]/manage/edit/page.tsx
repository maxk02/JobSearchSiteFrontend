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
import {useForm} from "react-hook-form";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import {updateJob} from "@/lib/api/jobs/jobsApi";
import {useParams} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {UpdateJobRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {useCurrentJobStore} from "@/lib/stores/currentJobStore";


export default function EditJobPage() {

    const params = useParams();

    const jobId = parseInt(params.jobId as string, 10);

    const { currentJobState, setCurrentJobState } = useCurrentJobStore();

    if (!currentJobState) {
        throw new Error("No job state found.");
    }

    const methods = useForm<CreateEditJobFormData>({
        resolver: zodResolver(createEditJobSchema),
        defaultValues: {
            jobFolderId: currentJobState.folderId,
            title: currentJobState.title,
            category: currentJobState.categoryId,
            description: currentJobState.description,
            timeRangeOption: currentJobState.timeRangeOptionId,
            dateTimeExpiringUtc: new Date(currentJobState.dateTimeExpiringUtc),
            isPublic: currentJobState.isPublic,
            employmentOptionIds: currentJobState.employmentTypeIds,
            jobContractTypeIds: currentJobState.contractTypeIds,
            locationIds: currentJobState.locations?.map(l => l.id),
            salaryInfo: currentJobState.salaryInfo,
            responsibilities: currentJobState.responsibilities,
            requirements: currentJobState.requirements,
            niceToHaves: currentJobState.niceToHaves,
        },
        mode: 'onChange'
    });

    const {formState: {touchedFields} } = methods;

    const onSubmit = async (data: CreateEditJobFormData) => {

        const onlyTouchedData: { [K in keyof CreateEditJobFormData]: CreateEditJobFormData[K] | null } = {
            ...data,
        };

        (Object.keys(data) as (keyof CreateEditJobFormData)[]).forEach((field) => {
            if (!touchedFields[field]) {
                onlyTouchedData[field] = null;
            }
        });

        const updateJobRequest: UpdateJobRequest = {
            folderId: data.jobFolderId,
            categoryId: data.category,
            title: data.title,
            description: data.description || null,
            isPublic: data.isPublic,
            timeRangeOptionId: data.timeRangeOption,
            dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
            responsibilities: data.responsibilities,
            requirements: data.requirements,
            niceToHaves: data.niceToHaves,
            salaryInfo: data.salaryInfo ? {
                minimum: data.salaryInfo.minWage || null,
                maximum: data.salaryInfo.maxWage || null,
                currency: 'PLN',
                unitOfTime: data.salaryInfo.wageTimeUnit,
                isAfterTaxes: data.salaryInfo.isAfterTaxes,
            } : null,
            employmentOptionIds: data.employmentOptionIds,
            contractTypeIds: data.jobContractTypeIds,
            locationIds: data.locationIds,
        }

        const updateJobResult = await updateJob(jobId, updateJobRequest);

        if (updateJobResult.success) {
        }
        else {
            console.log(`Failed (${updateJobResult.status})`)
        }
    };

    return (
        <Box sx={{ width: "800px", maxWidth: "800px" }}>

            <Typography variant="h4" fontWeight={600} color="primary">Edycja oferty pracy</Typography>
            <Typography mt={0.7} sx={{ fontSize: "1.05em" }}>
                Dodaj więcej informacji o ofercie, aby zwiększyć jej widoczność i przyciągnąć idealnych kandydatów. Im dokładniej opiszesz stanowisko, firmę i oczekiwania, tym lepiej Twoja oferta będzie dopasowana do właściwych osób.
            </Typography>

            <form onSubmit={methods.handleSubmit(onSubmit)}>

                <CreateEditJobBasicInfoCard />

                <CreateEditJobLocationCard />

                <CreateEditJobPublicationIntervalCard />

                <CreateEditJobEmploymentOptionCard />

                <CreateEditJobContractTypeCard />

                <CreateEditJobSalaryDataCard />

                <CreateEditJobListCard cardTitle="Obowiązki" fieldName="responsibilities" />

                <CreateEditJobListCard cardTitle="Wymogi" fieldName="requirements" />

                <CreateEditJobListCard cardTitle="Mile widziane" fieldName="niceToHaves" />

            </form>

        </Box>
    );
}
