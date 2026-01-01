import {Button, Paper, Stack, Typography} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";
import React from "react";
import Link from "next/link";


interface JobCompanyDescriptionCardProps {
    companyName: string;
    description: string;
    companyId: number;
}

export default function JobCompanyDescriptionCard({ companyName, description, companyId }: JobCompanyDescriptionCardProps) {
    return (
        <Paper sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h5" fontWeight={600} lineHeight={1} color="primary">{companyName}</Typography>
                <Link href={`/company/${companyId}`} passHref legacyBehavior>
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
                </Link>
            </Stack>

            <Typography sx={{ mt: 1.8 }}>
                {description}
            </Typography>
        </Paper>
    );
}