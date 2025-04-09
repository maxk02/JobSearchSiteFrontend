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
import {FormProvider, useForm} from "react-hook-form";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {jobCategoryIds} from "@/lib/seededData/jobCategories";
import {UpdateJobRequestDto} from "@/lib/api/jobs/jobsApiInterfaces";
import {updateJob} from "@/lib/api/jobs/jobsApi";
import {useParams, useRouter} from "next/navigation";


export default function EditJobPage() {

    const router = useRouter();
    const { jobIdParam } = useParams();

    const jobId = jobIdParam as unknown as number;

    const { info } = useCreateEditJobStateStore();

    const methods = useForm<CreateEditJobFormData>({
        resolver: zodResolver(createEditJobSchema),
        defaultValues: {
            title: '',
            category: 1,
            description: '',
            timeRangeOption: 1,
            dateTimeExpiringUtc: new Date(),
            isPublic: true,
            employmentOptionIds: [],
            jobContractTypeIds: [],
            locationIds: [],
            salaryInfo: undefined,
            responsibilities: [],
            requirements: [],
            niceToHaves: [],
        },
        mode: 'onChange'
    });

    const onSubmit = async (data: CreateEditJobFormData) => {

        if (!info) throw new Error();

        const updateJobRequest: UpdateJobRequestDto = {
            jobFolderId: info.folderId,
            categoryId: data.category,
            title: data.title,
            description: data.description || null,
            isPublic: data.isPublic,
            dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
            responsibilities: data.responsibilities?.map(item => item.text) || [],
            requirements: data.requirements?.map(item => item.text) || [],
            niceToHaves: data.niceToHaves?.map(item => item.text) || [],
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

            router.push("/");
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

            <FormProvider {...methods}>

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

            </FormProvider>
        </Box>
    );
}
