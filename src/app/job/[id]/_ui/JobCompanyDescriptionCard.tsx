import {Button, Paper, Stack, Typography} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import React from "react";


interface JobCompanyDescriptionCardProps {
    companyName: string;
    description: string;
}

export default function JobCompanyDescriptionCard({ companyName, description }: JobCompanyDescriptionCardProps) {
    return (
        <Paper sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" fontWeight={600} lineHeight={1} color="primary">{companyName}</Typography>
                <Button
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                        p: 0,
                        lineHeight: 1,
                        fontSize: "inherit",
                        "&:hover": {
                            backgroundColor: "transparent",
                            textDecoration: "none"
                        },
                        minWidth: "auto",
                        textTransform: "none"
                    }}
                >
                    Przejdź do profilu
                </Button>
            </Stack>

            <Typography sx={{ mt: 1.8 }}>
                {description}
            </Typography>
        </Paper>
    );
}