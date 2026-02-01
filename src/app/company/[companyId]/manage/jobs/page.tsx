"use client";

import {Stack} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import React, {useEffect, useState} from "react";
import {JobApplicationSortOption, JobManagementCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {ReadonlyURLSearchParams, useParams, useRouter, useSearchParams} from "next/navigation";
import ManageJobCard from "./_ui/ManageJobCard";
import {getCompanyJobManagementCardDtos} from "@/lib/api/companies/companiesApi";
import {GetCompanyJobManagementCardDtosRequest} from "@/lib/api/companies/companiesApiInterfaces";
import {CompanyJobManagementCardDtosSortOption} from "@/lib/api/companies/companiesApiDtos";
import {useForm} from "react-hook-form";
import {SearchJobFormData, searchJobSchema} from "@/lib/schemas/searchJobSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    SearchCompanyJobManagementCardDtosFormData,
    searchCompanyJobManagementCardDtosSchema
} from "@/lib/schemas/searchCompanyJobManagementCardDtosSchema";
import JobSearchCard from "./_ui/JobSearchCard";
import { employmentOptions } from "@/lib/seededData/employmentOptions";



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
function parseIds(value: string | string[] | undefined | null): number[] {
    if (!value) return [];
    if (Array.isArray(value)) return value.map(Number);
    return value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
}

export function parseSearchParams(
    searchParams: ReadonlyURLSearchParams
): TypedJobSearchParams {
    return {
        query: (searchParams.get("query") as string) || "",
        page: parseInt(searchParams.get("page") as string) || 1,
        countryId: parseInt(searchParams.get("countryIds") as string) || 0,
        locationId: parseInt(searchParams.get("locationIds") as string) || 0,
        categoryIds: parseIds(searchParams.get("categoryIds")),
        contractTypeIds: parseIds(searchParams.get("contractTypeIds")),
        employmentOptionIds: parseIds(searchParams.get("employmentTypeIds"))
    };
}


const sortOptionListItems: { value: CompanyJobManagementCardDtosSortOption, label: string }[] = [
    { value: "dateAsc", label: "Najstarsze" },
    { value: "dateDesc", label: "Najnowsze" },
];


export default function CompanyJobsPage() {
    
    const [jobs, setJobs] = useState<JobManagementCardDto[]>([]);

    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const searchParams = useSearchParams();
    const paramsString = searchParams.toString();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);
    const [updateTriggerCounter, setUpdateTriggerCounter] = useState<number>(0);

    useEffect(() => {

        const fetchJobs = async (params: TypedJobSearchParams) => {

            const request: GetCompanyJobManagementCardDtosRequest = {
                query: params.query,
                page: params.page,
                size: 15,
                mustHaveSalaryRecord: false,
                locationId: params.locationId,
                categoryIds: params.categoryIds,
                contractTypeIds: params.contractTypeIds,
                employmentOptionIds: params.employmentOptionIds,
            };

            const result =
                await getCompanyJobManagementCardDtos(companyId, request);

            if (result.success) {
                setJobs(result.data.jobManagementCardDtos);
                setTotalPages(result.data.paginationResponse.totalPages);
            }
            else {
                console.log(`Error fetching jobs (${result.status})`);
            }
        }

        const typedSearchParams = parseSearchParams(searchParams);

        fetchJobs(typedSearchParams);

    }, [companyId, parsedPageParam, updateTriggerCounter, paramsString]);

    const [sortOption, setSortOption] = useState<CompanyJobManagementCardDtosSortOption>("dateDesc");

    return (
        <>
            <Stack gap={3} mt={0} sx={{ maxWidth: "850px" }}>
                <JobSearchCard />
                <MyDefaultSortingCard<CompanyJobManagementCardDtosSortOption>
                    pxValue="6px"
                    sortModes={sortOptionListItems}
                    defaultMode={sortOptionListItems[1]}
                    onSortChange={(newMode) => setSortOption(newMode)}
                    currentPage={parsedPageParam}
                    totalPages={totalPages}
                />
                {jobs.map((job) => (
                    <ManageJobCard
                        key={job.id}
                        item={job}
                        onUpdateTriggered={() => {setUpdateTriggerCounter(prev => prev + 1)}}
                    />
                ))}
                <MyDefaultPagination currentPage={parsedPageParam} totalPages={totalPages} />
            </Stack>

        </>
    );
}
