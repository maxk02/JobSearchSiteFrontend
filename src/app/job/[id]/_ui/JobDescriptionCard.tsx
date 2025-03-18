import {Box, Paper, Stack, Typography} from "@mui/material";

export default function JobDescriptionCard() {
    return (
        <Paper>
            <Stack direction="row" spacing={0} sx={{ alignItems: "stretch" }}>
                <Box sx={{ py: 3, pl: 3, pr: 4, backgroundColor: "#2ca6a4", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h5" fontWeight={600} lineHeight={1} sx={{ color: "white" }}>Opis stanowiska</Typography>
                </Box>
                <Stack sx={{ alignItems: "center", pr: 3, pl: 2, py: 2 }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis volutpat mauris, eget condimentum neque. Praesent turpis nibh, aliquam facilisis odio eu, dictum sodales nisl. Vivamus ac tristique justo, a finibus sapien. Vivamus facilisis aliquet nibh. Quisque dictum orci ac nisl suscipit tempus. Cras lobortis quam at mauris tempus, suscipit lacinia massa aliquam. Vestibulum eget tortor rutrum, pellentesque erat ac, auctor magna.
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}