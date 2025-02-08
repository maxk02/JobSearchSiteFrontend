import JobCard from "@/app/_ui/JobCard";
import JobSearchInputs from "@/app/_ui/JobSearchInputs";
import {Box, Typography} from "@mui/material";

export default function HomePage() {
  return (
      <>
          <JobSearchInputs />

          <Box sx={{ width: "90%", m: "auto" }}>
              <Typography variant="h6" fontWeight="bold">NAJNOWSZE OFERTY PRACY</Typography>

              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
          </Box>
      </>
  );
}
