"use client";

import {Box, Container, Typography} from "@mui/material";
import React from "react";

import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentOptionCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentOptionCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import {jobCategoryIds} from "@/lib/seededData/jobCategories";
import CreateEditJobListCard from "@/app/_ui/CreateEditJob/CreateEditJobListCard";
import Grid from "@mui/material/Grid2";
import CreateJobCompanyNavigationCard from "@/app/company/[companyId]/create-job/_ui/CreateJobCompanyNavigationCard";
import CreateEditJobNavigationCard from "@/app/_ui/CreateEditJob/CreateEditJobNavigationCard";
import CreateJobButtons from "@/app/company/[companyId]/create-job/_ui/CreateJobButtons";
import {AddJobRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {addJob} from "@/lib/api/jobs/jobsApi";
import {useRouter} from "next/navigation";


export default function CreateJobPage() {

    const router = useRouter();

    const methods = useForm<CreateEditJobFormData>({
        resolver: zodResolver(createEditJobSchema),
        defaultValues: {
            title: '',
            category: jobCategoryIds[0],
            description: '',
            timeRangeOption: 0,
            dateTimeExpiringUtc: new Date(),
            employmentOptions: [],
            jobContractTypes: [],
        },
        mode: 'onChange'
    });

    const onSubmit = async (data: CreateEditJobFormData) => {
        const createJobRequest: AddJobRequest = {
            jobFolderId: 0,
            categoryId: data.category,
            title: data.title,
            description: data.description || '',
            isPublic: true,
            dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
            responsibilities: data.responsibilities?.map(item => item.text) || [],
            requirements: data.requirements?.map(item => item.text) || [],
            niceToHaves: data.niceToHaves?.map(item => item.text) || [],
            jobSalaryInfoDto: data.salaryInfo ? {
                minimum: data.salaryInfo.minWage || null,
                maximum: data.salaryInfo.maxWage || null,
                currency: 'PLN',
                unitOfTime: data.salaryInfo.wageTimeUnit,
                isAfterTaxes: data.salaryInfo.isAfterTaxes === 1 ? true : false
            } : null,
            employmentTypeIds: data.employmentOptions,
            contractTypeIds: data.jobContractTypes,
            locationIds: [],
        }

        const createJobResult = await addJob(createJobRequest);

        if (createJobResult.success) {

            router.push("/");
        }
        else {
            console.log(`Failed (${createJobResult.status})`)
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <Grid container spacing={3.5}>
                <Grid size={{ xs: 12, md: 12, lg: 3.3 }}>
                    <Box display="flex" flexDirection="column" gap={2}
                         sx={{
                             position: "sticky", top: 20, zIndex: 1,
                             maxHeight: "calc(100vh - 40px)", flex: 1
                         }}
                    >
                        <CreateJobCompanyNavigationCard />
                        <CreateEditJobNavigationCard />
                        <CreateJobButtons />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 12, lg: 8.7 }}>
                    <Box sx={{ width: "800px", maxWidth: "800px" }}>
                        <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
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
                </Grid>
            </Grid>
        </Container>
    );
}
