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
import {JobCardDto, JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";
import {jobCardData} from "@/lib/seededData/jobCards";
import {backendJobCards} from "@/lib/seededData/backendJobCards";


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
        // console.error(`Failed to fetch jobs (${jobCardsResult.status})`);
        return { jobCards: jobCardData.filter(x => [1, 2, 3, 4].includes(x.id)), pagination: { currentPage: 1, pageSize: 4, totalCount: 0, totalPages: 1 } };
    }

    return {
        jobCards: jobCardsResult.data.jobCards,
        pagination: jobCardsResult.data.paginationResponse,
    };
}


export default async function JobPage({ params }: { params: { jobId: string } }) {

    const id = parseInt(params.jobId, 10);

    // const job = await fetchJob(id);

    const job: JobDetailedDto = {
        id: id,
        companyId: 1,
        companyLogoLink: '/company_0.svg',
        companyName: "Technologie Rozwiązań Sp. z o.o.",
        companyDescription:
            `
            Jesteśmy Technologie Rozwiązań Sp. z o.o., dynamicznie rozwijającą się firmą z branży IT, specjalizującą się w tworzeniu nowoczesnych rozwiązań programistycznych dla klientów z całego świata. Od ponad 10 lat wspieramy przedsiębiorstwa w cyfrowej transformacji, dostarczając im dedykowane aplikacje webowe, mobilne oraz rozwiązania chmurowe.
            `,
        locations: [
            { id: 7, name: "Warszawa, Województwo Mazowieckie" }
        ],
        categoryId: 2,
        title: "Programista Backend",
        description: "Na tym stanowisku będziesz odpowiedzialny za projektowanie i implementację logiki serwerowej, tworzenie API, zarządzanie bazami danych oraz współpracę z innymi członkami zespołu przy dostarczaniu kompletnych rozwiązań programistycznych.",
        dateTimePublishedUtc: "2025-04-21T11:00:00Z",
        dateTimeExpiringUtc: "2025-05-20T23:59:59Z",
        responsibilities: [
            "Tworzenie i rozwój aplikacji backendowych w oparciu o nowoczesne technologie",
            "Projektowanie i implementacja API oraz logiki biznesowej",
            "Współpraca z zespołem frontendowym i DevOps przy integracji systemów",
            "Optymalizacja wydajności i bezpieczeństwa aplikacji",
            "Udział w projektowaniu architektury systemu",
            "Pisanie testów jednostkowych i integracyjnych",
            "Utrzymanie i rozwój istniejących rozwiązań"
        ],
        requirements: [
            "Minimum 2 lata doświadczenia na podobnym stanowisku",
            "Bardzo dobra znajomość jednego z języków backendowych (np. Python, Node.js, Java, .NET)",
            "Znajomość baz danych (SQL i/lub NoSQL)",
            "Umiejętność projektowania i tworzenia RESTful API",
            "Znajomość systemu kontroli wersji Git",
            "Doświadczenie w pracy z frameworkami backendowymi (np. Django, Express, Spring, .NET Core)",
            "Znajomość języka angielskiego na poziomie umożliwiającym czytanie dokumentacji"
        ],
        niceToHaves: [
            "Doświadczenie z architekturą mikroserwisów",
            "Znajomość GraphQL lub gRPC",
            "Doświadczenie z chmurą (AWS, GCP, Azure)",
            "Znajomość Dockera i/lub Kubernetes",
            "Praktyczna znajomość CI/CD (np. GitHub Actions, GitLab CI)",
            "Udział w projektach typu open-source",
            "Znajomość zasad clean code i DDD"
        ],
        salaryInfo: null,
        employmentTypeIds: [1, 2, 4, 5],
        contractTypeIds: [4],
        isBookmarked: false,
        applicationId: null
    };

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

    // const suggestedJobs = await fetchSuggestedJobs(request);

    const suggestedJobs = backendJobCards;

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
                            suggestedJobs.length > 0 &&
                            <>
                                <Typography variant="h5" fontWeight={600} mt={2} color="primary">Podobne oferty</Typography>
                                <Stack gap={2} mt={1.5}>
                                    {suggestedJobs.map((jobCard: JobCardDto) => (
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