import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs";
import {Box, Container, Typography} from "@mui/material";

export default function HomePage() {
  return (
      <>
          <JobSearchInputs />

          <Container sx={{ mt: 2 }}>
              <Box width="95%" margin="auto">
                  <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
                  <JobCard />
              </Box>
          </Container>
      </>
  );
}
