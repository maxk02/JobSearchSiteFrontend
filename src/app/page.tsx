import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs/JobSearchInputs";
import {Box, Container, Typography} from "@mui/material";
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


export function parseSearchParams(
    searchParams: { [key: string]: string | string[] | undefined }
): TypedJobSearchParams {
    return {
        query: (searchParams.query as string) || "",
        page: parseInt(searchParams.page as string) || 1,
        countryId: parseInt(searchParams.countryIds as string) || 0,
        locationId: parseInt(searchParams.locationIds as string) || 0,
        categoryIds: Array.isArray(searchParams.categoryIds)
            ? (searchParams.categoryIds as string[]).map(Number)
            : searchParams.categoryIds
                ? [parseInt(searchParams.categoryIds as string)]
                : [],
        contractTypeIds: Array.isArray(searchParams.contractTypeIds)
            ? (searchParams.contractTypeIds as string[]).map(Number)
            : searchParams.contractTypeIds
                ? [parseInt(searchParams.contractTypeIds as string)]
                : [],
        employmentOptionIds: Array.isArray(searchParams.employmentTypeIds)
            ? (searchParams.employmentTypeIds as string[]).map(Number)
            : searchParams.employmentTypeIds
                ? [parseInt(searchParams.employmentTypeIds as string)]
                : [],
    };
}


async function fetchJobs(params: TypedJobSearchParams) {
    const request: GetJobsRequest = {
        companyIds: null,
        query: params.query,
        paginationSpec: {
            pageNumber: params.page,
            pageSize: 15,
        },
        locationIds: [params.locationId],
        categoryIds: params.categoryIds,
        contractTypeIds: params.contractTypeIds,
        employmentOptionIds: params.employmentOptionIds
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


export default async function HomePage({searchParams}: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const typedSearchParams = parseSearchParams(searchParams);

    const { jobCards, pagination } = await fetchJobs(typedSearchParams);

    return (
        <>
            <JobSearchInputs />

            <Container sx={{mt: 2, mb: 4}}>
                <Box width="1000px" margin="auto">
                    <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

                    <Box display="flex" flexDirection="column" gap={3} mt={2}>
                        {jobCards.map((jobCard: JobCardDto) => (
                            <JobCard
                                key={jobCard.id}
                                item={jobCard}
                            />
                        ))}
                        <MyDefaultPagination
                            totalPages={pagination.totalPages}
                            currentPage={pagination.currentPage}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    );
}
