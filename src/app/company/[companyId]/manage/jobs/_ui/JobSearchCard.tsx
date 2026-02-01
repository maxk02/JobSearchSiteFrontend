import {
    Button,
    Checkbox,
    Chip, InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Add} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useState} from "react";
import {jobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import ApplicationTagSearchDialog from "@/app/job/[jobId]/manage/applications/_ui/ApplicationTagSearchDialog";
import JobApplicationLocationSelect from "@/app/_ui/JobApplicationLocationSelect";
import { LocationDto } from "@/lib/api/locations/locationsApiDtos";
import { SearchJobFormData, searchJobSchema } from "@/lib/schemas/searchJobSchema";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import JobSearchLocationAutoComplete from "@/app/_ui/JobSearchInputs/JobSearchLocationAutoComplete";
import { countries } from "@/lib/seededData/countries";
import ReactCountryFlag from "react-country-flag";
import JobSearchSelectOptionsInput from "@/app/_ui/JobSearchInputs/JobSearchSelectOptionsInput";
import { jobCategories } from "@/lib/seededData/jobCategories";
import { jobContractTypes } from "@/lib/seededData/jobContractTypes";
import { employmentOptions } from "@/lib/seededData/employmentOptions";
import { SearchCompanyJobManagementCardDtosFormData, searchCompanyJobManagementCardDtosSchema } from "@/lib/schemas/searchCompanyJobManagementCardDtosSchema";


// interface JobSearchCardProps {
//     // searchQuery: string;
//     setSearchQuery: React.Dispatch<React.SetStateAction<string | null>>;
//     onSearchButtonClick: () => void;
// }

export default function JobSearchCard() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const params = useParams();
    const companyId = parseInt(params.companyId as string, 10);

    const getNumericArrayParam = (key: string) => {
        const param = searchParams.get(key);
        return param ? param.split(',').map(Number) : [];
    };

    const methods = useForm<SearchCompanyJobManagementCardDtosFormData>({
        resolver: zodResolver(searchCompanyJobManagementCardDtosSchema),
        defaultValues: {
            query: searchParams.get('query') || '', 
            locationId: Number(searchParams.get('locationId')) || 0,
            mustHaveSalaryRecord: false,            
            categoryIds: getNumericArrayParam('categoryIds'),
            contractTypeIds: getNumericArrayParam('contractTypeIds'),
            employmentTimeOptionIds: getNumericArrayParam('employmentOptionIds').filter(x => employmentOptions.filter(y => y.type === "EmploymentTime").map(y => y.id).includes(x)), 
            employmentMobilityOptionIds: getNumericArrayParam('employmentOptionIds').filter(x => employmentOptions.filter(y => y.type === "Mobility").map(y => y.id).includes(x))
        },
        mode: 'onChange'
    });

    const { control, handleSubmit, formState: { errors } } = methods;

    const onSubmit = async (data: SearchCompanyJobManagementCardDtosFormData) => {
        const queryParams = new URLSearchParams();

        if (data.query) queryParams.set("query", data.query);
        if (data.locationId) queryParams.set("locationId", data.locationId.toString());
        if (data.categoryIds.length > 0) queryParams.set("categoryIds", data.categoryIds.join(","));
        if (data.contractTypeIds.length > 0) queryParams.set("contractTypeIds", data.contractTypeIds.join(","));
        if (data.employmentTimeOptionIds.length > 0 || data.employmentMobilityOptionIds.length > 0) {
            const employmentOptionIds = [...data.employmentTimeOptionIds, ...data.employmentMobilityOptionIds];
            queryParams.set("employmentOptionIds", employmentOptionIds.join(","));
        }

        const searchString = queryParams.toString();
        const redirectPath = searchString ? `/company/${companyId}/manage/jobs?${searchString}` : `/company/${companyId}/manage/jobs`;
        router.push(redirectPath);
    };

    return (
        <>
            <Paper elevation={3} sx={{ px: 2, pt: 1.5, pb: 2.5}}>
                <Typography variant="h5" fontWeight={600} color="primary" sx={{ mb: 1.5 }}>Wyszukiwanie</Typography>

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                        <Grid container sx={{mb: 2}}>
                            <Grid size={4.5}>
                                <Controller
                                    name="query"
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
                                            error={!!errors.query}
                                            helperText={errors.query?.message}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid size={4.5}>
                                <JobSearchLocationAutoComplete />
                            </Grid>
                            <Grid size={3}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SearchIcon/>}
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

                        <Grid container spacing={2}>
                            <Grid size={3}>
                                <JobSearchSelectOptionsInput
                                    labelName="Kategorie"
                                    controllerName="categoryIds"
                                    columnsNo={4}
                                    items={
                                        jobCategories
                                            .map((jc) => ({ id: jc.id, name: jc.namePl }))
                                    }
                                    control={control}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid size={3}>
                                <JobSearchSelectOptionsInput
                                    labelName="Rodzaj umowy"
                                    controllerName="contractTypeIds"
                                    columnsNo={2}
                                    items={
                                        jobContractTypes
                                            .map((jct) => ({ id: jct.id, name: jct.namePl }))
                                    }
                                    control={control}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid size={3}>
                                <JobSearchSelectOptionsInput
                                    labelName="Wymiar pracy"
                                    controllerName="employmentTimeOptionIds"
                                    columnsNo={1}
                                    items={
                                        employmentOptions
                                            .filter((et) => et.type === "EmploymentTime")
                                            .map((et) => ({ id: et.id, name: et.namePl }))
                                    }
                                    control={control}
                                    errors={errors}
                                />
                            </Grid>
                            <Grid size={3}>
                                <JobSearchSelectOptionsInput
                                    labelName="Tryb pracy"
                                    controllerName="employmentMobilityOptionIds"
                                    columnsNo={1}
                                    items={
                                        employmentOptions
                                            .filter((et) => et.type === "Mobility")
                                            .map((et) => ({ id: et.id, name: et.namePl }))
                                    }
                                    control={control}
                                    errors={errors}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </FormProvider>

            </Paper>
        </>
    );
}
