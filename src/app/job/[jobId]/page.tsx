import {Container, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import JobOverviewCard from "./_ui/JobOverviewCard";
import JobDescriptionCard from "./_ui/JobDescriptionCard";
import JobListCard from "./_ui/JobListCard";
import JobCompanyDescriptionCard from "./_ui/JobCompanyDescriptionCard";
import JobSideActionsCard from "@/app/job/[jobId]/_ui/JobSideActionsCard";
import SuggestedJobCard from "@/app/job/[jobId]/_ui/SuggestedJobCard";
import {getJob, getJobs} from "@/lib/api/jobs/jobsApi";
import JobBottomActionsCard from "@/app/job/[jobId]/_ui/JobBottomActionsCard";
import {GetJobsRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";


async function fetchJob(id: number) {

    const jobResult = await getJob(id);

    if (!jobResult.success) {
        console.error(`Failed to fetch a job (${jobResult.status})`);
        throw new Error(`Failed to fetch a job (${id})`);
    }

    return jobResult.data.job;
}

async function fetchSuggestedJobs(request: GetJobsRequest) {

    const jobCardsResult = await getJobs(request);

    if (!jobCardsResult.success) {
        console.error(`Failed to fetch jobs (${jobCardsResult.status})`);
        return { jobCards: [], pagination: { currentPage: 1, pageSize: 4, totalCount: 0, totalPages: 1 } };
    }

    return {
        jobCards: jobCardsResult.data.jobCards,
        pagination: jobCardsResult.data.paginationResponse,
    };
}


export default async function JobPage({ params }: { params: { jobId: string } }) {

    const id = parseInt(params.jobId, 10);

    const job = await fetchJob(id);

    const request: GetJobsRequest = {
        query: job.title,
        paginationSpec: {
            pageNumber: 1,
            pageSize: 4,
        },
        locationIds: job.locations.map(dto => dto.id),
        categoryIds: [job.categoryId],
        contractTypeIds: job.contractTypeIds,
        employmentOptionIds: job.employmentTypeIds
    };

    const suggestedJobs = await fetchSuggestedJobs(request);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 3 }}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 12, lg: 7.9 }}>
                    <Stack gap={2}>
                        <JobOverviewCard job={job} />
                        { job.description && <JobDescriptionCard text={job.description} /> }

                        { job.responsibilities.length > 0 &&
                            <JobListCard header="Obowiązki" items={job.responsibilities} /> }

                        { job.requirements.length > 0 &&
                            <JobListCard header="Wymogi" items={job.requirements} /> }

                        { job.niceToHaves.length > 0 &&
                            <JobListCard header="Mile widziane" items={job.niceToHaves} /> }

                        { job.companyDescription &&
                            <JobCompanyDescriptionCard companyName={job.companyName} description={job.companyDescription} /> }

                        <JobBottomActionsCard item={job} />
                    </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 12, lg: 4.1 }}>
                    <Stack sx={{ position: "sticky", top: 20, zIndex: 1 }}>
                        <JobSideActionsCard item={job} />
                        {
                            suggestedJobs.jobCards.length > 0 &&
                            <>
                                <Typography variant="h5" fontWeight={600} mt={2} color="primary">Podobne oferty</Typography>
                                <Stack gap={2} mt={1.5}>
                                    {suggestedJobs.jobCards.map((jobCard: JobCardDto) => (
                                        <SuggestedJobCard
                                            key={jobCard.id}
                                            item={jobCard}
                                        />
                                    ))}
                                </Stack>
                            </>
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}