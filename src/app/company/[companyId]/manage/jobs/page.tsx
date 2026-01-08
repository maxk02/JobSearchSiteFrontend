"use client";

import {Stack} from "@mui/material";
import MyDefaultSortingCard from "@/app/_ui/MyDefaultSortingCard";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import React, {useEffect, useState} from "react";
import {JobApplicationSortOption, JobManagementCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {useParams, useSearchParams} from "next/navigation";
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

const sortOptionListItems: { value: CompanyJobManagementCardDtosSortOption, label: string }[] = [
    { value: "dateAsc", label: "Najstarsze" },
    { value: "dateDesc", label: "Najnowsze" },
];

export default function CompanyJobsPage() {
    
    const [jobs, setJobs] = useState<JobManagementCardDto[]>([]);

    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);
    const [updateTriggerCounter, setUpdateTriggerCounter] = useState<number>(0);

    const methods = useForm<SearchCompanyJobManagementCardDtosFormData>({
        resolver: zodResolver(searchCompanyJobManagementCardDtosSchema),
        defaultValues: {
            query: '',
            locationId: 0,
            mustHaveSalaryRecord: false,
            categoryIds: [],
            contractTypeIds: [],
            employmentTimeOptionIds: [],
            employmentMobilityOptionIds: [],
        },
        mode: 'onChange'
    });

    const { control, handleSubmit, formState: { errors } } = methods;

    useEffect(() => {

        const fetchJobs = async () => {

            const request: GetCompanyJobManagementCardDtosRequest = {
                query: null,
                page: 0,
                size: 10,
                mustHaveSalaryRecord: false,
                locationId: 0,
                employmentTypeIds: null,
                categoryIds: null,
                contractTypeIds: null //todo
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

        fetchJobs();

    }, [companyId, parsedPageParam, updateTriggerCounter]);

    const [sortOption, setSortOption] = useState<CompanyJobManagementCardDtosSortOption>("dateDesc");

    return (
        <>
            <Stack gap={3} mt={0} sx={{ maxWidth: "850px" }}>
                <MyDefaultSortingCard<JobApplicationSortOption>
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
