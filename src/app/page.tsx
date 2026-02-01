import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs/JobSearchInputs";
import {Box, Container, Stack, Typography} from "@mui/material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import React from "react";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {GetJobsRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {getJobs} from "@/lib/api/jobs/jobsApi";


export interface TypedJobSearchParams {
    query: string;
    page: number;
    countryId: number;
    locationId: number;
    categoryIds: number[];
    contractTypeIds: number[];
    employmentOptionIds: number[];
}

// Helper function to handle both single values, arrays, and comma-separated strings
function parseIds(value: string | string[] | undefined): number[] {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(Number);
    return value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
}

export function parseSearchParams(
    searchParams: { [key: string]: string | string[] | undefined }
): TypedJobSearchParams {
    return {
        query: (searchParams.query as string) || "",
        page: parseInt(searchParams.page as string) || 1,
        countryId: parseInt(searchParams.countryIds as string) || 0,
        locationId: parseInt(searchParams.locationIds as string) || 0,
        categoryIds: parseIds(searchParams.categoryIds),
        contractTypeIds: parseIds(searchParams.contractTypeIds),
        employmentOptionIds: parseIds(searchParams.employmentTypeIds)
    };
}


async function fetchJobs(params: TypedJobSearchParams) {
    const request: GetJobsRequest = {
        query: params.query,
        page: params.page,
        size: 15,
        locationIds: [params.locationId],
        categoryIds: params.categoryIds,
        contractTypeIds: params.contractTypeIds,
        employmentOptionIds: params.employmentOptionIds,
        mustHaveSalaryRecord: false
    };

    const jobCardsResult = await getJobs(request);

    if (!jobCardsResult.success) {
        console.error(`Failed to fetch jobs (${jobCardsResult.status})`);
        return { jobCards: [], pagination: { currentPage: 1, pageSize: 15, totalCount: 0, totalPages: 1 } };
    }

    return {
        jobCards: jobCardsResult.data.jobCards,
        pagination: jobCardsResult.data.paginationResponse,
    };
}


export default async function HomePage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

    const searchParams = await props.searchParams;

    const typedSearchParams = parseSearchParams(searchParams);

    const { jobCards, pagination } = await fetchJobs(typedSearchParams);

    return (
        <>
            <JobSearchInputs />

            <Container sx={{mt: 2, mb: 4}}>
                <Box width="1000px" margin="auto">
                    <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

                    <Box display="flex" flexDirection="column" gap={3} mt={2} width="100%">
                        {jobCards.map((jobCard: JobCardDto) => (
                            <JobCard
                                key={jobCard.id}
                                item={jobCard}
                            />
                        ))}
                        <Stack direction="row" alignContent="center" justifyItems="center" width="100%">
                            <MyDefaultPagination
                                totalPages={pagination.totalPages}
                                currentPage={pagination.currentPage}
                            />
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
