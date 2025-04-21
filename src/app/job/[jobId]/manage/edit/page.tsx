"use client";

import {Box, Typography} from "@mui/material";
import React, {useEffect} from "react";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";
import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentOptionCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentOptionCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobListCard from "@/app/_ui/CreateEditJob/CreateEditJobListCard";
import {useFormContext} from "react-hook-form";
import {CreateEditJobFormData} from "@/lib/schemas/createEditJobSchema";
import {getJobManagementDto} from "@/lib/api/jobs/jobsApi";
import {useParams} from "next/navigation";


export default function EditJobPage() {

    const { jobIdParam } = useParams();

    const jobId = jobIdParam as unknown as number;

    // const methods = useForm<CreateEditJobFormData>({
    //     resolver: zodResolver(createEditJobSchema),
    //     defaultValues: {
    //         jobFolderId: 0,
    //         title: '',
    //         category: 1,
    //         description: '',
    //         timeRangeOption: 1,
    //         dateTimeExpiringUtc: new Date(),
    //         isPublic: true,
    //         employmentOptionIds: [],
    //         jobContractTypeIds: [],
    //         locationIds: [],
    //         salaryInfo: undefined,
    //         responsibilities: [],
    //         requirements: [],
    //         niceToHaves: [],
    //     },
    //     mode: 'onChange'
    // });

    const methods = useFormContext<CreateEditJobFormData>();

    const { reset } = methods;

    useEffect(() => {
        const fetchData = async () => {
            const result = await getJobManagementDto(jobId);
            if (result.success) {
                reset({
                    jobFolderId: result.data.job.id,
                    title: result.data.job.title,
                    category: result.data.job.categoryId,
                    description: result.data.job.description,
                    timeRangeOption: result.data.job.timeRangeOptionId,
                    dateTimeExpiringUtc: new Date(result.data.job.dateTimeExpiringUtc),
                    isPublic: result.data.job.isPublic,
                    employmentOptionIds: result.data.job.employmentTypeIds ?? [],
                    jobContractTypeIds: result.data.job.contractTypeIds ?? [],
                    locationIds: result.data.job.locations.map(l => l.id),
                    salaryInfo: result.data.job.salaryInfo,
                    responsibilities: result.data.job.responsibilities,
                    requirements: result.data.job.requirements,
                    niceToHaves: result.data.job.niceToHaves,
                });
            }
            else {
                console.log("Job fetching error", jobId);
            }
        }

        fetchData();
    });

    // const onSubmit = async (data: CreateEditJobFormData) => {
    //
    //     const onlyTouchedData: { [K in keyof CreateEditJobFormData]: CreateEditJobFormData[K] | null } = {
    //         ...data,
    //     };
    //
    //     (Object.keys(data) as (keyof CreateEditJobFormData)[]).forEach((field) => {
    //         if (!touchedFields[field]) {
    //             onlyTouchedData[field] = null;
    //         }
    //     });
    //
    //     const updateJobRequest: UpdateJobRequestDto = {
    //         folderId: data.jobFolderId,
    //         categoryId: data.category,
    //         title: data.title,
    //         description: data.description || null,
    //         isPublic: data.isPublic,
    //         timeRangeOptionId: data.timeRangeOption,
    //         dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
    //         responsibilities: data.responsibilities,
    //         requirements: data.requirements,
    //         niceToHaves: data.niceToHaves,
    //         salaryInfo: data.salaryInfo ? {
    //             minimum: data.salaryInfo.minWage || null,
    //             maximum: data.salaryInfo.maxWage || null,
    //             currency: 'PLN',
    //             unitOfTime: data.salaryInfo.wageTimeUnit,
    //             isAfterTaxes: data.salaryInfo.isAfterTaxes,
    //         } : null,
    //         employmentOptionIds: data.employmentOptionIds,
    //         contractTypeIds: data.jobContractTypeIds,
    //         locationIds: data.locationIds,
    //     }
    //
    //     const updateJobResult = await updateJob(jobId, updateJobRequest);
    //
    //     if (updateJobResult.success) {
    //     }
    //     else {
    //         console.log(`Failed (${updateJobResult.status})`)
    //     }
    // };

    return (
        <Box sx={{ width: "800px", maxWidth: "800px" }}>

            <Typography variant="h4" fontWeight={600} color="primary">Edycja oferty pracy</Typography>
            <Typography mt={0.7} sx={{ fontSize: "1.05em" }}>
                Dodaj więcej informacji o ofercie, aby zwiększyć jej widoczność i przyciągnąć idealnych kandydatów. Im dokładniej opiszesz stanowisko, firmę i oczekiwania, tym lepiej Twoja oferta będzie dopasowana do właściwych osób.
            </Typography>

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
