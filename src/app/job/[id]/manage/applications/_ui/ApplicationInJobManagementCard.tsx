"use client";

import {
    Avatar,
    Box,
    Button,
    Card,
    Chip,
    Divider,
    List,
    ListItem, ListItemIcon, Stack,
    Typography, useTheme
} from "@mui/material";
import {
    Add,
    Download,
    Edit,
    PlayArrow
} from "@mui/icons-material";
// import Link from "next/link";


export default function ApplicationInJobManagementCard() {
    const theme = useTheme();

    return (
        <Card sx={{ width: "100%", textAlign: "left" }}>
            <Stack direction="row">
                <Box py={2.1} pl={3} pr={1}>
                    <Avatar src="/avatar2.webp" sx={{ height: 80, width: 80 }} />
                </Box>
                <Stack sx={{ px: 2, pt: 2, pb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        Jan Kowalski
                    </Typography>

                    <Typography lineHeight={1} mt={1.3}>
                        jankowalski3221@gmail.com
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mt: 1.6, alignItems: "center" }}>
                        <Typography variant="body2">Tagi publiczne:</Typography>
                        <Chip label="Do przeglądu" variant="filled" onDelete={() => {}} />
                        <Chip icon={<Add />} label="Dodaj tag" variant="outlined" sx={{ borderStyle: "dashed" }} />
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{ mt: 1.3, alignItems: "center" }}>
                        <Typography variant="body2">Tagi prywatne:</Typography>
                        <Chip label="Do przeglądu" variant="filled" onDelete={() => {}} />
                        <Chip icon={<Add />} label="Dodaj tag" variant="outlined" sx={{ borderStyle: "dashed" }} />
                    </Stack>

                    <List sx={{ mt: 1.3, pl: 0, pb: 0.3, pt: 0.3, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                        <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                            <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                <PlayArrow sx={{ fontSize: "1rem" }} />
                            </ListItemIcon>
                            <Typography lineHeight={1}>Status: odrzucona</Typography>
                        </ListItem>
                        <ListItem sx={{ px: 0, pb: 0, pt: 0, height: "32px" }}>
                            <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                <PlayArrow sx={{ fontSize: "1rem" }} />
                            </ListItemIcon>
                            <Typography lineHeight={1}>Pliki:</Typography>
                            <Stack direction="row" spacing={1} sx={{ ml: 1 }}>
                                <Chip label="Cv Jan Kowalski Ul...pdf" variant="filled" onClick={() => {}} />
                                <Chip label="Cv Jan Kowalski Ul...pdf" variant="filled" onClick={() => {}} />
                                <Chip label="Cv Jan Kowalski Ul...pdf" variant="filled" onClick={() => {}} />
                                <Chip label="Cv Jan Kowalski Ul...pdf" variant="filled" onClick={() => {}} />
                            </Stack>
                        </ListItem>
                    </List>
                    <Stack direction="row" mt={2} sx={{ justifyContent: "left" }} gap={1.3}>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<Edit />}
                            size="medium"
                            // sx={{ pl: 0.5 }}
                            // component={Link} href="/search"
                        >
                            Zmień status
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<Download />}
                            size="medium"
                            // component={Link} href="/search"
                        >
                            Pobierz pliki jako archiwum
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            <Divider />

            <Box sx={{ py: 1, px: 2 }}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Zaaplikowano: 27.05.2024 12:23
                </Typography>
            </Box>

        </Card>
    );
}
