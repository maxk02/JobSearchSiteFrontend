"use client";

import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs/JobSearchInputs";
import {Box, Container, Typography} from "@mui/material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {useState} from "react";

export default function HomePage() {
    const [jobCards, setJobCards] = useState<JobCardDto[]>([]);

    return (
      <>
          <JobSearchInputs />

          <Container sx={{ mt: 2, mb: 4 }}>
              <Box width="1000px" margin="auto">
                  <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

                  <Box display="flex" flexDirection="column" gap={3} mt={2}>
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                      <JobCard />
                  </Box>
              </Box>
          </Container>
      </>
    );
}
