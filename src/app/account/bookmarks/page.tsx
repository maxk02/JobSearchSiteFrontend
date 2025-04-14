"use client";

import {Stack, Typography} from "@mui/material";
import JobCard from "@/app/_ui/JobCard";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {getBookmarkedJobs} from "@/lib/api/userProfiles/userProfilesApi";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";

export default function AccountBookmarksPage() {

    const [jobCards, setJobCards] = useState<JobCardDto[]>([]);

    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const parsedPageParam = pageParam && !isNaN(parseInt(pageParam, 10)) ? parseInt(pageParam, 10) : 1;

    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {

        const fetchJobBookmarks = async () => {
            const result =
                await getBookmarkedJobs({pageSize: 15, pageNumber: parsedPageParam});

            if (result.success) {
                setJobCards(result.data.jobInfos);
                setTotalPages(result.data.paginationResponse.totalPages);
            }
            else {
                console.log(`Error fetching job bookmarks (${result.status})`);
            }
        }

        fetchJobBookmarks();

    }, [parsedPageParam]);

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Zapisane</Typography>
            <Typography mt={0.5}>W tej zakładce znajdziesz oferty zapisane podczas korzystania z serwisu.</Typography>

            <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                {jobCards.map((jobCard) => (
                    <JobCard key={jobCard.id} item={jobCard} />
                ))}
                <MyDefaultPagination currentPage={parsedPageParam} totalPages={totalPages} />
            </Stack>
        </>
    );
}
