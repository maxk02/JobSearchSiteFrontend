"use client";


import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem, OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import React, {useState} from "react";
import {jobCategories} from "@/lib/seededData/jobCategories";
import Grid from "@mui/material/Grid2";
import JobSearchSelectOptionsInput from "@/app/_ui/JobSearchInputs/JobSearchSelectOptionsInput";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";

export default function JobSearchInputs() {


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
                <Grid container sx={{mb: 2}}>
                    <Grid size={5}>
                        <TextField
                            label="Słowa kluczowe"
                            variant="outlined"
                            fullWidth
                            sx={{
                                maxHeight: "56px",
                                height: "56px",
                                "& .MuiOutlinedInput-root": {borderRadius: "50px 0 0 50px", backgroundColor: "white"}
                            }}
                        />
                    </Grid>
                    <Grid size={4.5}>
                        <TextField
                            label="Lokalizacja"
                            variant="outlined"
                            fullWidth
                            sx={{
                                maxHeight: "56px",
                                height: "56px",
                                "& .MuiOutlinedInput-root": {borderRadius: "0", backgroundColor: "white"}
                            }}
                        />
                    </Grid>
                    <Grid size={2.5}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<SearchIcon/>}
                            component={Link} href="/search"
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
                            name="Kategorie"
                            columnsNo={4}
                            items={
                                jobCategories
                                    .map((jc) => ({ id: jc.id, name: jc.namePl }))
                            }
                        />
                    </Grid>
                    <Grid size={3}>
                        <JobSearchSelectOptionsInput
                            name="Rodzaj umowy"
                            columnsNo={2}
                            items={
                                jobContractTypes
                                    .map((jct) => ({ id: jct.id, name: jct.namePl }))
                            }
                        />
                    </Grid>
                    <Grid size={3}>
                        <JobSearchSelectOptionsInput
                            name="Wymiar pracy"
                            columnsNo={1}
                            items={
                                employmentOptions
                                    .filter((et) => et.type === "EmploymentTime")
                                    .map((et) => ({ id: et.id, name: et.namePl }))
                            }
                        />
                    </Grid>
                    <Grid size={3}>
                        <JobSearchSelectOptionsInput
                            name="Tryb pracy"
                            columnsNo={1}
                            items={
                                employmentOptions
                                    .filter((et) => et.type === "Mobility")
                                    .map((et) => ({ id: et.id, name: et.namePl }))
                            }
                        />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
}