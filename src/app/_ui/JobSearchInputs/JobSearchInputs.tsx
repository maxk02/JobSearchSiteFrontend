import {Box, Button, Container, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {jobCategories} from "@/lib/seededData/jobCategories";
import Grid from "@mui/material/Grid2";
import JobSearchSelectOptionsInput from "@/app/_ui/JobSearchInputs/JobSearchSelectOptionsInput";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SearchJobFormData, searchJobSchema} from "@/lib/schemas/searchJobSchema";
import {GetJobsRequest} from "@/lib/api/jobs/jobsApiInterfaces";
import {getJobs} from "@/lib/api/jobs/jobsApi";
import {useRouter} from "next/navigation";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {PaginationResponse} from "@/lib/api/sharedDtos";



export interface JobSearchInputsProps {
    setJobCards: (newJobCards: JobCardDto[]) => void;
    setPagination: (newPagination: PaginationResponse) => void;
}


export default function JobSearchInputs({ setJobCards, setPagination }: JobSearchInputsProps) {

    const router  = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors },
        // getValues,
    } = useForm<SearchJobFormData>({
        resolver: zodResolver(searchJobSchema),
        defaultValues: {
            searchQuery: '',
            location: '',
            jobCategories: [],
            jobContractTypes: [],
            employmentTimeOptions: [],
            employmentMobilityOptions: [],
        },
    });

    const onSubmit = async (data: SearchJobFormData) => {
        const getJobsRequest: GetJobsRequest = {
            query: data.searchQuery,
            paginationSpec: { pageNumber: 1, pageSize: 15 },
            categoryIds: data.jobCategories,
            contractTypeIds: data.jobContractTypes,
            employmentTypeIds: [...data.employmentTimeOptions, ...data.employmentMobilityOptions],
            mustHaveSalaryRecord: null,
            countryIds: null //todo
        }


        const getJobsResult = await getJobs(getJobsRequest);

        if (getJobsResult.success) {
            setJobCards(getJobsResult.data.jobCards)
            setPagination(getJobsResult.data.paginationResponse)
            router.push("/");
        }
        else {

        }
    };

    return (
        <Box sx={{
            background: "white",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "lightgray",
            textAlign: "center",
            pt: 2, pb: 0, m: 0,
            position: "sticky",
            top: "0",
            "z-index": "2"
        }}
        >

            <Container>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                    <Grid container sx={{mb: 2}}>
                        <Grid size={5}>
                            <Controller
                                name="searchQuery"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Słowa kluczowe"
                                        fullWidth
                                        sx={{
                                            maxHeight: "56px",
                                            height: "56px",
                                            "& .MuiOutlinedInput-root": {borderRadius: "50px 0 0 50px", backgroundColor: "white"}
                                        }}
                                        error={!!errors.searchQuery}
                                        helperText={errors.searchQuery?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={4.5}>
                            <Controller
                                name="location"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Lokalizacja"
                                        fullWidth
                                        sx={{
                                            maxHeight: "56px",
                                            height: "56px",
                                            "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white"}
                                        }}
                                        error={!!errors.location}
                                        helperText={errors.location?.message}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid size={2.5}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                startIcon={<SearchIcon/>}
                                // component={Link} href="/search"
                                sx={{
                                    maxHeight: "56px",
                                    height: "56px",
                                    width: "100%",
                                    borderRadius: "0 50px 50px 0",
                                    fontSize: '1.1rem',
                                    "& .MuiButton-startIcon > :nth-of-type(1)": {fontSize: "1.5rem", lineHeight: 1}
                                }}
                            >
                                Szukaj
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2}}>
                        <Grid size={3}>
                            <JobSearchSelectOptionsInput
                                labelName="Kategorie"
                                controllerName="jobCategories"
                                columnsNo={4}
                                items={
                                    jobCategories
                                        .map((jc) => ({ id: jc.id, name: jc.namePl }))
                                }
                                control={control}
                            />
                        </Grid>
                        <Grid size={3}>
                            <JobSearchSelectOptionsInput
                                labelName="Rodzaj umowy"
                                controllerName="jobContractTypes"
                                columnsNo={2}
                                items={
                                    jobContractTypes
                                        .map((jct) => ({ id: jct.id, name: jct.namePl }))
                                }
                                control={control}
                            />
                        </Grid>
                        <Grid size={3}>
                            <JobSearchSelectOptionsInput
                                labelName="Wymiar pracy"
                                controllerName="employmentTimeOptions"
                                columnsNo={1}
                                items={
                                    employmentOptions
                                        .filter((et) => et.type === "EmploymentTime")
                                        .map((et) => ({ id: et.id, name: et.namePl }))
                                }
                                control={control}
                            />
                        </Grid>
                        <Grid size={3}>
                            <JobSearchSelectOptionsInput
                                labelName="Tryb pracy"
                                controllerName="employmentMobilityOptions"
                                columnsNo={1}
                                items={
                                    employmentOptions
                                        .filter((et) => et.type === "Mobility")
                                        .map((et) => ({ id: et.id, name: et.namePl }))
                                }
                                control={control}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Container>

        </Box>
    );
}