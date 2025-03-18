import {Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {CheckCircleOutline} from "@mui/icons-material";


interface JobListCardProps {
    header: string;
    items: string[];
}

export default function JobListCard({ header, items }: JobListCardProps) {
    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight={600} lineHeight={1} color="primary">{header}</Typography>
            <Box sx={{ mt: 1.3 }}>
                <List sx={{ p: 0 }}>
                    {items.map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.2 }}>
                            <ListItemIcon sx={{ minWidth: "32px" }}>
                                <CheckCircleOutline color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Paper>
    );
}