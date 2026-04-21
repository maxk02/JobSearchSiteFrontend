"use client";

import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
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
import BasicInfoDialog from "@/app/_ui/BasicInfoDialog";


export default function EditJobPage() {

    const params = useParams();

    const jobId = parseInt(params.jobId as string, 10);

    const { currentJob, setCurrentJob, isLoading } = useCurrentJobStore();

    const [topUpNeededDialogOpen, setTopUpNeededDialogOpen] = useState(false);

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
        if (!currentJob) return;

        reset({
            companyId: currentJob.companyId,
            title: currentJob.title,
            category: currentJob.categoryId,
            description: currentJob.description,
            dateTimeExpiringUtc: new Date(currentJob.dateTimeExpiringUtc),
            isPublic: currentJob.isPublic,
            employmentOptionIds: currentJob.employmentOptionIds,
            jobContractTypeIds: currentJob.contractTypeIds,
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
                minimum: data.salaryInfo.minimum ?? null,
                maximum: data.salaryInfo.maximum ?? null,
                currencyId: 1,
                unitOfTime: "Hour",
                isAfterTaxes: data.salaryInfo.isAfterTaxes,
            } : null,
            employmentOptionIds: data.employmentOptionIds,
            contractTypeIds: data.jobContractTypeIds,
            locationIds: data.locationIds,
        }

        const updateJobResult = await updateJob(jobId, updateJobRequest);

        if (updateJobResult.success) {
        }
        else if (updateJobResult.error.details === "JOB_TIME_PERIOD_INSUFFICIENT_BALANCE") {
            setTopUpNeededDialogOpen(() => true);
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
        <>
            <Box sx={{ width: "800px", maxWidth: "800px" }}>

                <Typography variant="h4" fontWeight={600} color="primary">Edycja oferty pracy</Typography>
                <Typography mt={0.7} sx={{ fontSize: "1.05em" }}>
                    Dodaj więcej informacji o ofercie, aby zwiększyć jej widoczność i przyciągnąć idealnych kandydatów. Im dokładniej opiszesz stanowisko, firmę i oczekiwania, tym lepiej Twoja oferta będzie dopasowana do właściwych osób.
                </Typography>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <CreateEditJobBasicInfoCard />

                        <CreateEditJobLocationCard locations={currentJob.locations} initialLocations={currentJob.locations} />

                        <CreateEditJobPublicationIntervalCard
                            dateTimePublishedUtc={new Date(currentJob.dateTimePublishedUtc)}
                            maxDateTimeExpiringUtcEverSet={new Date(currentJob.maxDateTimeExpiringUtcEverSet)}
                        />

                        <CreateEditJobEmploymentOptionCard />

                        <CreateEditJobContractTypeCard />

                        <CreateEditJobSalaryDataCard />

                        <CreateEditJobListCard
                            cardTitle="Obowiązki"
                            fieldName="responsibilities"
                            infoText="Ta sekcja ma zawierać od 2 do 10 elementów."
                        />

                        <CreateEditJobListCard
                            cardTitle="Wymogi"
                            fieldName="requirements"
                            infoText="Ta sekcja ma zawierać od 2 do 10 elementów."
                        />

                        <CreateEditJobListCard
                            cardTitle="Mile widziane"
                            fieldName="niceToHaves"
                            infoText="Ta sekcja jest opcjonalna. Możesz dodać do 10 elementów."
                        />

                    </form>
                </FormProvider>

            </Box>

            <BasicInfoDialog
                title="Nie udało się przedłużyć ogłoszenia"
                text="Na koncie firmy brakuje środków do wykonania operacji. Prosimy o zapisanie zmian ze wcześniejszą datą wygaśnięcia ogłoszenia lub doładowanie konta."
                open={topUpNeededDialogOpen}
                onClose={() => setTopUpNeededDialogOpen(false)}
            />
        </>
    );
}
