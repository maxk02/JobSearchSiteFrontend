import {Box, Paper, Stack, Typography} from "@mui/material";


export interface JobDescriptionCardProps {
    text: string;
}

export default function JobDescriptionCard({ text }: JobDescriptionCardProps) {
    return (
        <Paper>
            <Stack direction="row" spacing={0} sx={{ alignItems: "stretch" }}>
                <Box sx={{ py: 3, pl: 3, pr: 4, backgroundColor: "#2ca6a4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h5" fontWeight={600} lineHeight={1.2} sx={{ color: "white" }}>Opis stanowiska</Typography>
                </Box>
                <Stack sx={{ justifyContent: "center", alignItems: "center", pr: 3, pl: 2, py: 2 }}>
                    <Typography>
                        {text}
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}