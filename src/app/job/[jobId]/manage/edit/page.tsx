"use client";

import {Box, CircularProgress, Typography} from "@mui/material";
import React, { useEffect } from "react";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";
import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentOptionCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentOptionCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobListCard from "@/app/_ui/CreateEditJob/CreateEditJobListCard";
import {FormProvider, useForm} from "react-hook-form";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import {updateJob} from "@/lib/api/jobs/jobsApi";
import {useParams} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import {UpdateJobRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {useCurrentJobStore} from "@/lib/stores/currentJobStore";


export default function EditJobPage() {

    const params = useParams();

    const jobId = parseInt(params.jobId as string, 10);

    const { currentJob, setCurrentJob, isLoading } = useCurrentJobStore();

    const methods = useForm<CreateEditJobFormData>({
        resolver: zodResolver(createEditJobSchema),
        defaultValues: {
            companyId: 0,
            title: "",
            category: 0,
            description: "",
            dateTimeExpiringUtc: new Date(),
            isPublic: true,
            employmentOptionIds: [],
            jobContractTypeIds: [],
            locationIds: [],
            salaryInfo: null,
            responsibilities: [],
            requirements: [],
            niceToHaves: [],
        },
        mode: 'onChange'
    });

    const { handleSubmit, reset, formState: {touchedFields} } = methods;

    useEffect(() => {
        // Guard clause: If data isn't loaded yet, do nothing
        if (!currentJob) return;

        // Map your API data to Form Data
        reset({
            companyId: currentJob.companyId,
            title: currentJob.title,
            category: currentJob.categoryId,
            description: currentJob.description,
            // Ensure you handle Date conversion safely
            dateTimeExpiringUtc: new Date(currentJob.dateTimeExpiringUtc),
            isPublic: currentJob.isPublic,
            employmentOptionIds: currentJob.employmentOptionIds,
            jobContractTypeIds: currentJob.contractTypeIds,
            // Safe navigation in case locations is undefined
            locationIds: currentJob.locations?.map(l => l.id) || [],
            salaryInfo: currentJob.salaryInfoDto,
            responsibilities: currentJob.responsibilities,
            requirements: currentJob.requirements,
            niceToHaves: currentJob.niceToHaves,
        });
    }, [currentJob, isLoading]);

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
            categoryId: data.category,
            title: data.title,
            description: data.description || null,
            isPublic: data.isPublic,
            dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
            responsibilities: data.responsibilities,
            requirements: data.requirements,
            niceToHaves: data.niceToHaves,
            salaryInfo: data.salaryInfo !== null ? {
                minimum: data.salaryInfo.minWage ?? null,
                maximum: data.salaryInfo.maxWage ?? null,
                currencyId: 1,
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

    if (isLoading || !currentJob) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ width: "800px", maxWidth: "800px" }}>

            <Typography variant="h4" fontWeight={600} color="primary">Edycja oferty pracy</Typography>
            <Typography mt={0.7} sx={{ fontSize: "1.05em" }}>
                Dodaj więcej informacji o ofercie, aby zwiększyć jej widoczność i przyciągnąć idealnych kandydatów. Im dokładniej opiszesz stanowisko, firmę i oczekiwania, tym lepiej Twoja oferta będzie dopasowana do właściwych osób.
            </Typography>

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <CreateEditJobBasicInfoCard />

                    <CreateEditJobLocationCard locations={currentJob.locations} />

                    <CreateEditJobPublicationIntervalCard
                        dateTimePublishedUtc={new Date(currentJob.dateTimePublishedUtc)}
                        maxDateTimeExpiringUtcEverSet={new Date(currentJob.maxDateTimeExpiringUtcEverSet)}
                    />

                    <CreateEditJobEmploymentOptionCard />

                    <CreateEditJobContractTypeCard />

                    <CreateEditJobSalaryDataCard />

                    <CreateEditJobListCard cardTitle="Obowiązki" fieldName="responsibilities" />

                    <CreateEditJobListCard cardTitle="Wymogi" fieldName="requirements" />

                    <CreateEditJobListCard cardTitle="Mile widziane" fieldName="niceToHaves" />

                </form>
            </FormProvider>

        </Box>
    );
}
