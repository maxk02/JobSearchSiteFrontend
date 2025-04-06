"use client";

import {Alert, Box, Checkbox, FormGroup, Paper, Typography} from "@mui/material";
import {Info} from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";


const contractOptions = [
    "Umowa zlecenie",
    "Umowa o dzieło",
    "Umowa o pracę",
    "Kontrakt B2B",
];


export default function CreateEditJobContractTypeCard() {
    return (
        <Paper sx={{ mt: 2, pt: 2, pb: 1, px: 1.5 }}>
            <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Umowa zatrudnienia</Typography>
            <Box mt={1.5} display="flex" flexDirection="column">
                <Alert
                    severity="info"
                    icon={<Info />}
                    sx={{ maxWidth: "500px" }}
                >
                    <Typography>
                        Możesz wybrać jedną lub kilka opcji lub pominąć tę sekcję.
                    </Typography>
                </Alert>

                <Box sx={{ mt: 0.4, maxWidth: "500px" }}>
                    <FormControl>
                        <FormGroup>
                            {contractOptions.map((item, index) => (
                                <FormControlLabel control={<Checkbox />} key={index} label={item} />
                            ))}
                        </FormGroup>
                    </FormControl>
                </Box>
            </Box>
        </Paper>
    );
}