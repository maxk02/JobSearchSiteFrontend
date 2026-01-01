import {Container, Stack, Typography} from "@mui/material";
import React from "react";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import JobCard from "@/app/_ui/JobCard";
import {redirect} from "next/navigation";
import {getCompany, getCompanyJobs} from "@/lib/api/companies/companiesApi";
import {GetCompanyJobsRequest} from "@/lib/api/companies/companiesApiInterfaces";


async function fetchCompanyJobs(id: number, params: TypedCompanySearchParams) {
    const request: GetCompanyJobsRequest = {
        query: null,
        page: 1,
        size: 10,
        mustHaveSalaryRecord: false,
        employmentTypeIds: null,
        categoryIds: null,
        contractTypeIds: null
    };

    const jobCardsResult = await getCompanyJobs(id, request);

    if (!jobCardsResult.success) {
        console.error(`Failed to fetch jobs (${jobCardsResult.status})`);
        return { jobCards: [], pagination: { currentPage: 1, pageSize: 15, totalCount: 0, totalPages: 1 } };
    }

    return {
        jobCards: jobCardsResult.data.jobCards,
        pagination: jobCardsResult.data.paginationResponse,
    };
}


async function fetchCompany(id: number) {

    const companyResult = await getCompany(id);

    if (!companyResult.success) {
        console.error(`Failed to fetch jobs (${companyResult.status})`);
        return null;
    }

    return companyResult.data.company;
}


export interface TypedCompanySearchParams {
    page: number;
}

export function parseSearchParams(
    companySearchParams: { [key: string]: string | string[] | undefined }
): TypedCompanySearchParams {
    return {
        page: parseInt(companySearchParams.page as string, 10) || 1,
    };
}

export function parseParams( companyParams: { companyId: string } ) {
    return {
        companyId: parseInt(companyParams.companyId as string, 10) || undefined
    };
}

export interface CompanyPageProps {
    params: Promise<{ companyId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CompanyPage(props: CompanyPageProps) {

    const params = await props.params;

    const typedParams = parseParams(params);

    if (!typedParams.companyId) {
        redirect('/');
    }

    const searchParams = await props.searchParams;

    const typedSearchParams = parseSearchParams(searchParams);

    const company = await fetchCompany(typedParams.companyId);

    if (!company) {
        redirect('/');
    }

    const { jobCards, pagination } = await fetchCompanyJobs(typedParams.companyId, typedSearchParams);

    if (typedSearchParams.page !== pagination.currentPage) {

    }

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography component="h1" variant="h3" color="primary" sx={{ fontWeight: 600 }}>{company.name}</Typography>
                {company.description &&
                    <Typography sx={{ mt: 1, maxWidth: "800px", fontSize: "1.08em" }}>
                        {company.description}
                    </Typography>
                }
            </Container>

            <Stack
                direction="column"
                sx={{
                    width: "100%",
                    backgroundColor: "#5D829F",
                    my: 3
                }}
            >
                <Container maxWidth="lg" sx={{ my: 3 }}>
                    <Typography component="h1" variant="h4" sx={{ fontWeight: 600, color: "white" }}>
                        {jobCards.length > 0 ? `Ofert pracy: ${jobCards.length}` : "Brak ofert pracy"}
                    </Typography>
                </Container>
            </Stack>

            <Container maxWidth="lg" sx={{ my: 3 }}>
                <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                    {jobCards.map((jobCard: JobCardDto) => (
                        <JobCard
                            key={jobCard.id}
                            item={jobCard}
                        />
                    ))}
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination
                            totalPages={pagination.totalPages}
                            currentPage={typedSearchParams.page}
                        />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}