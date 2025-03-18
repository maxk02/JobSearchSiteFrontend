import {Box, Paper, Typography} from "@mui/material";
import TickList from "@/app/job/[id]/_ui/TickList";


const items: string[] = [
    "wykształcenie wyższe kierunkowe",
    "wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe wykształcenie wyższe kierunkowe",
    "min. 1 rok doświadczenia komercyjnego na podobnym stanowisku",
    "zdolności do myślenia analitycznego",
];


export default function JobResponsibilitiesCard() {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight={600} lineHeight={1} color="primary">Obowiązki</Typography>
            <Box sx={{ mt: 1.3 }}>
                <TickList items={items} />
            </Box>
        </Paper>
    );
}