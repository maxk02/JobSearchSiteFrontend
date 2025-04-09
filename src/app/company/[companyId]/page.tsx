"use client";

import {Container, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse} from "@/lib/api/sharedDtos";
import JobCard from "@/app/_ui/JobCard";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {useParams} from "next/navigation";
import {getCompanyById, getCompanyJobs} from "@/lib/api/companies/companiesApi";
import {CompanyInfoDto} from "@/lib/api/companies/companiesApiDtos";


export default function CompanyPage() {

    const params = useParams();
    const { companyIdFromPath } = params;
    const companyId = companyIdFromPath as unknown as number;

    const [company, setCompany] = useState<CompanyInfoDto | null>(null);
    const [jobCards, setJobCards] = useState<JobCardDto[]>([]);
    const [pagination, setPagination] = useState<PaginationResponse>({
        currentPage: 1,
        pageSize: 10,
        totalCount: 0,
        totalPages: 1
    });

    const setCurrentPage = (page: number) => {
        setPagination(prevPagination => ({
            ...prevPagination,
            currentPage: page,
        }))
    }

    useEffect(() => {
        async function fetchData() {
            const companyResult = await getCompanyById(companyId);
            const jobCardsResult = 
                await getCompanyJobs(companyId,
                    { paginationSpec: { pageNumber: pagination?.currentPage, pageSize: pagination?.pageSize } });
            

            if (companyResult.success && jobCardsResult.success) {
                setCompany(companyResult.data.company);
                setJobCards(jobCardsResult.data.jobCards);
                setPagination(jobCardsResult.data.paginationResponse);
            }
            else {
                console.log(`Failed (${companyResult.status}) (${jobCardsResult.status})`);
            }
        }

        fetchData();
    }, [companyId, pagination?.currentPage, pagination?.pageSize]);



    const toggleBookmark = (id: number) => {
        setJobCards((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, bookmarked: !item.isBookmarked } : item
            )
        );
    }

    const addBookmark = async (id: number) => {

        const addBookmarkResult = await addJobBookmark(id);

        if (addBookmarkResult.success) {
            toggleBookmark(id);
        }
        else {
            console.log(`Add bookmark failed (${addBookmarkResult.status})`);
        }
    }

    const deleteBookmark = async (id: number) => {

        const deleteBookmarkResult = await deleteJobBookmark(id);

        if (deleteBookmarkResult.success) {
            toggleBookmark(id);
        }
        else {
            console.log(`Delete bookmark failed (${deleteBookmarkResult.status})`)
        }
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
                <Typography component="h1" variant="h3" color="primary" sx={{ fontWeight: 600 }}>{company?.name}</Typography>
                <Typography sx={{ mt: 1, maxWidth: "800px", fontSize: "1.08em" }}>
                    {company?.description}
                </Typography>
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
                            addJobBookmark={() => addBookmark(jobCard.id)}
                            deleteJobBookmark={() => deleteBookmark(jobCard.id)}
                        />
                    ))}
                    <Stack direction="row" sx={{ justifyContent: "center" }}>
                        <MyDefaultPagination
                            totalPages={pagination.totalPages}
                            currentPage={pagination.currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}