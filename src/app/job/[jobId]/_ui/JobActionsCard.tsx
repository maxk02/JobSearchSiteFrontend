import {Button, Paper, Stack} from "@mui/material";
import {StarBorder, TaskAlt} from "@mui/icons-material";
import React from "react";

export default function JobActionsCard() {
    return (
        <Paper sx={{ p: 2 }}>
            <Stack gap={2} sx={{ alignItems: "center" }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<TaskAlt />}
                    sx={{
                        px: 8,
                        maxWidth: "90%",
                        borderRadius: "50px",
                        fontSize: '1.1rem',
                        "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                    }}
                >
                    Aplikuj teraz
                </Button>


                <Stack direction="row" sx={{ justifyContent: "center" }}>
                    <Button
                        size="large"
                        startIcon={<StarBorder />}
                        sx={{
                            borderRadius: "50px"
                        }}
                    >
                        Zapisz
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}