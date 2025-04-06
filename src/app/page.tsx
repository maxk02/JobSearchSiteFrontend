"use client";

import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs/JobSearchInputs";
import {Box, Container, Typography} from "@mui/material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {useState} from "react";
import MyDefaultPagination from "@/app/_ui/MyDefaultPagination";
import {PaginationResponse} from "@/lib/api/sharedDtos";
import {addJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";

export default function HomePage() {
    const [jobCards, setJobCards] = useState<JobCardDto[]>([]);
    const [pagination, setPagination] = useState<PaginationResponse | null>(null);

    const addBookmark = async (id: number) => {

        const addBookmarkResult = await addJobBookmark(id);

        if (addBookmarkResult.success) {

        }
        else {
            console.log(`Failed (${addBookmarkResult.status})`)
        }
    }

    return (
      <>
          <JobSearchInputs setJobCards={setJobCards} setPagination={setPagination} />

          <Container sx={{ mt: 2, mb: 4 }}>
              <Box width="1000px" margin="auto">
                  <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

                  <Box display="flex" flexDirection="column" gap={3} mt={2}>
                      {jobCards.map((jobCard: JobCardDto) => (
                          <JobCard key={jobCard.id} item={jobCard} addJobBookmark={() => addBookmark(jobCard.id)} />
                      ))}
                      {pagination && pagination.totalPages > 1 &&
                          <MyDefaultPagination totalPages={pagination?.totalCount} />
                      }
                  </Box>
              </Box>
          </Container>
      </>
    );
}
