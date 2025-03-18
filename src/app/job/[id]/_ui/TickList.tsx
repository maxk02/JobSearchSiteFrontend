import { CheckCircleOutline } from "@mui/icons-material";
import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material";

interface TickListProps {
    items: string[];
}

export default function TickList({ items }: TickListProps) {
    return (
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
    );
}