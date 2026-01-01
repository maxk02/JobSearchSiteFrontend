"use client";

import {Box, Button, Container, MenuItem, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {jobCategories} from "@/lib/seededData/jobCategories";
import Grid from "@mui/material/Grid";
import JobSearchSelectOptionsInput from "@/app/_ui/JobSearchInputs/JobSearchSelectOptionsInput";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SearchJobFormData, searchJobSchema} from "@/lib/schemas/searchJobSchema";
import {useRouter} from "next/navigation";
import JobSearchLocationAutoComplete from "@/app/_ui/JobSearchInputs/JobSearchLocationAutoComplete";
import ReactCountryFlag from "react-country-flag";
import {countries} from "@/lib/seededData/countries";


export default function JobSearchInputs() {

    const router  = useRouter();

    const methods = useForm<SearchJobFormData>({
        resolver: zodResolver(searchJobSchema),
        defaultValues: {
            query: '',
            locationId: 0,
            countryId: 1,
            categoryIds: [],
            contractTypeIds: [],
            employmentTimeOptionIds: [],
            employmentMobilityOptionIds: [],
        },
        mode: 'onChange'
    });

    const { control, handleSubmit, formState: { errors } } = methods;

    const onSubmit = async (data: SearchJobFormData) => {
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
        const redirectPath = searchString ? `/search?${searchString}` : "/";
        router.push(redirectPath);
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
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                        <Grid container sx={{mb: 2}}>
                            <Grid size={3.9}>
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
                            <Grid size={3.9}>
                                <JobSearchLocationAutoComplete />
                            </Grid>
                            <Grid size={2.2}>
                                <Controller
                                    name="countryId"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            select
                                            required
                                            fullWidth
                                            label=""
                                            value={field.value}
                                            onChange={(e) => field.onChange(e.target.value)}
                                            error={!!errors.countryId}
                                            helperText={errors.countryId?.message}
                                            sx={{
                                                maxHeight: "56px",
                                                height: "56px",
                                                "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white"}
                                            }}
                                            SelectProps={{
                                                sx: {
                                                    textAlign: 'left',
                                                },
                                                MenuProps: {
                                                    PaperProps: {
                                                        sx: {
                                                            textAlign: 'left',
                                                        },
                                                    },
                                                },
                                            }}

                                        >
                                            {countries.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    <ReactCountryFlag countryCode={item.code} style={{ marginRight: 8 }} />
                                                    {item.namePL}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid size={2}>
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

                        <Grid container spacing={2} sx={{mb: 2}}>
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
            </Container>

        </Box>
    );
}