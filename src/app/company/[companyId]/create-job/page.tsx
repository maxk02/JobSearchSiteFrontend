"use client";

import {Box, Container, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";

import CreateEditJobPublicationIntervalCard from "@/app/_ui/CreateEditJob/CreateEditJobPublicationIntervalCard";
import CreateEditJobEmploymentOptionCard from "@/app/_ui/CreateEditJob/CreateEditJobEmploymentOptionCard";
import CreateEditJobContractTypeCard from "@/app/_ui/CreateEditJob/CreateEditJobContractTypeCard";
import CreateEditJobSalaryDataCard from "@/app/_ui/CreateEditJob/CreateEditJobSalaryDataCard";
import CreateEditJobLocationCard from "@/app/_ui/CreateEditJob/CreateEditJobLocationCard";
import CreateEditJobBasicInfoCard from "@/app/_ui/CreateEditJob/CreateEditJobBasicInfoCard";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import CreateEditJobListCard from "@/app/_ui/CreateEditJob/CreateEditJobListCard";
import Grid from "@mui/material/Grid2";
import CreateManageJobNavigationCard from "@/app/_ui/CreateEditJob/CreateManageJobNavigationCard";
import CreateEditJobAnchorCard from "@/app/_ui/CreateEditJob/CreateEditJobAnchorCard";
import CreateJobButtons from "@/app/company/[companyId]/create-job/_ui/CreateJobButtons";
import {AddJobRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {addJob} from "@/lib/api/jobs/jobsApi";
import {useParams, useRouter} from "next/navigation";
import CreateManageJobFolderChosenCard from "@/app/_ui/CreateEditJob/CreateManageJobFolderChosenCard";
import {getCompany} from "@/lib/api/companies/companiesApi";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";


export default function CreateJobPage() {

    const router = useRouter();

    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const storeData = useCreateEditJobStateStore();

    const [companyName, setCompanyName] = useState<string | null>(storeData.company?.name ?? null);
    const [companyLogoLink, setCompanyLogoLink] = useState<string | null>(storeData.company?.logoLink ?? null);

    useEffect(() => {

        const fetchCompany = async () => {
            const result = await getCompany(companyId);

            if (result.success && result.data.company !== null) {
                setCompanyName(result.data.company.name);
                setCompanyLogoLink(result.data.company.logoLink);
            }
        };

        if (companyName === null || companyLogoLink === null) {
            fetchCompany();
        }
    });

    const methods = useForm<CreateEditJobFormData>({
        resolver: zodResolver(createEditJobSchema),
        defaultValues: {
            jobFolderId: 0,
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

        const createJobRequest: AddJobRequest = {
            jobFolderId: data.jobFolderId,
            categoryId: data.category,
            title: data.title,
            description: data.description || null,
            isPublic: data.isPublic,
            dateTimeExpiringUtc: data.dateTimeExpiringUtc.toISOString(),
            responsibilities: data.responsibilities ?? [],
            requirements: data.requirements ?? [],
            niceToHaves: data.niceToHaves ?? [],
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

        const createJobResult = await addJob(createJobRequest);

        if (createJobResult.success) {
            router.push(`/job/${createJobResult.data.id}/manage/edit`);
        }
        else {
            console.log(`Failed (${createJobResult.status})`)
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>

            <FormProvider {...methods}>

                <form onSubmit={methods.handleSubmit(onSubmit)}>

                    <Grid container spacing={3.5}>
                        <Grid size={{ xs: 12, md: 12, lg: 3.3 }}>
                            <Box display="flex" flexDirection="column" gap={2}
                                 sx={{
                                     position: "sticky", top: 20, zIndex: 1,
                                     maxHeight: "calc(100vh - 40px)", flex: 1
                                 }}
                            >
                                {companyName && companyLogoLink &&
                                    <CreateManageJobNavigationCard
                                        companyName={companyName}
                                        companyLogoLink={companyLogoLink}
                                        returnTo={storeData.source}
                                        returnToId={storeData.folder && storeData.source === "folder" ? storeData.folder.id : companyId}
                                    />
                                }
                                <CreateManageJobFolderChosenCard companyId={companyId} />
                                <CreateEditJobAnchorCard />
                                <CreateJobButtons />
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 12, lg: 8.7 }}>
                            <Box sx={{ width: "800px", maxWidth: "800px" }}>
                                <Typography variant="h4" fontWeight={600} color="primary">Nowa oferta pracy</Typography>
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
                        </Grid>
                    </Grid>

                </form>

            </FormProvider>
        </Container>
    );
}
