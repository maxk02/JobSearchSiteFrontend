"use client";

import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ManageJobViewsCard from "@/app/job/[jobId]/manage/_ui/ManageJobViewsCard";
import React, {useEffect, useState} from "react";
import CreateEditJobAnchorCard from "@/app/_ui/CreateEditJob/CreateEditJobAnchorCard";
import EditJobButtons from "@/app/job/[jobId]/manage/edit/_ui/EditJobButtons";
import {useParams, usePathname} from "next/navigation";
import CreateManageJobNavigationCard from "@/app/_ui/CreateEditJob/CreateManageJobNavigationCard";
import {useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import CreateManageJobFolderChosenCard from "@/app/_ui/CreateEditJob/CreateManageJobFolderChosenCard";
import {getJobManagementInfo, updateJob} from "@/lib/api/jobs/jobsApi";
import {FormProvider, useForm} from "react-hook-form";
import {CreateEditJobFormData, createEditJobSchema} from "@/lib/schemas/createEditJobSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {UpdateJobRequestDto} from "@/lib/api/jobs/jobsApiInterfaces";


export default function ManageJobLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const { jobId } = useParams();

    const jobIdParam = parseInt(jobId as string, 10);

    const pathname = usePathname();

    const isActive = () => pathname === `/job/${jobIdParam}/manage/edit`;

    const storeData = useCreateEditJobStateStore();

    // const [company, setCompany] = useState<{id: number, name: string, logoLink: string} | null>({
    //     id : storeData.company?.name ?? null,
    //     name: storeData.company?.name ?? null,
    //     logoLink: storeData.company?.logoLink ?? null,
    // });

    const [companyId, setCompanyId] = useState<number | null>(storeData.company?.id ?? null);
    const [companyName, setCompanyName] = useState<string | null>(storeData.company?.name ?? null);
    const [companyLogoLink, setCompanyLogoLink] = useState<string | null>(storeData.company?.logoLink ?? null);

    useEffect(() => {

        const fetchManagementInfo = async () => {
            const result = await getJobManagementInfo(jobIdParam);

            if (result.success) {
                setCompanyId(result.data.companyId);
                setCompanyName(result.data.companyName);
                setCompanyLogoLink(result.data.companyLogoLink);
            }
        };

        if (companyId === null || companyName === null || companyLogoLink === null) {
            fetchManagementInfo();
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

        const updateJobRequest: UpdateJobRequestDto = {
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

        const updateJobResult = await updateJob(jobIdParam, updateJobRequest);

        if (updateJobResult.success) {
        }
        else {
            console.log(`Failed (${updateJobResult.status})`)
        }
    };

    return (
        <Container maxWidth="xl" sx={{ mt: 2.5, mb: 2.5 }}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4, lg: 3.5, xl: 3 }}>
                            <Box display="flex" flexDirection="column" gap={2}
                                 sx={{
                                     position: "sticky", top: 20, zIndex: 1,
                                     maxHeight: "calc(100vh - 40px)", flex: 1
                                 }}
                            >
                                {companyId && companyName && companyLogoLink &&
                                    <CreateManageJobNavigationCard
                                        companyName={companyName}
                                        companyLogoLink={companyLogoLink}
                                        returnTo={storeData.source}
                                        returnToId={storeData.folder && storeData.source === "folder" ? storeData.folder.id : companyId}
                                    />
                                }
                                <ManageJobViewsCard />

                                {isActive() &&
                                    <>
                                        <CreateManageJobFolderChosenCard />
                                        <CreateEditJobAnchorCard />
                                        <EditJobButtons />
                                    </>
                                }
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 8, lg: 8.5, xl: 9 }}>
                            {children}
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </Container>
    );
}
