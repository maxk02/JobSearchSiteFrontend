"use client";

import {
    Box,
    Button,
    Card,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import Image from "next/image";
import {FilePresent, PlayArrow, Undo} from "@mui/icons-material";
// import Link from "next/link";


export default function ApplicationInUserProfileCard() {
    const theme = useTheme();

    return (
        <Card sx={{ width: "100%", textAlign: "left" }}>
            <Box display="flex" flexDirection="row" width="100%">
                <Box py={2.1} pl={3} pr={1}>
                    <Image src="/company2.webp" width="80" height="80" alt="" />
                </Box>
                <Stack sx={{ px: 2, pt: 2, pb: 1.5, flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        Specjalista do spraw księgowości
                    </Typography>
                    <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                        31 920-49 560 zł netto (+VAT) / mies.
                    </Typography>
                    <Typography fontWeight="600" lineHeight={1} mt={1.3}>
                        Alab laboratoria Sp z o o
                    </Typography>
                    <Typography lineHeight={1} mt={1.3}>
                        Warszawa, Mazowieckie
                    </Typography>
                    <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                            <Typography lineHeight={1} color="textSecondary">Zdalnie, W biurze, Jeszcze gdzieś</Typography>
                        </ListItem>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                            <Typography lineHeight={1} color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                        </ListItem>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                            <Typography lineHeight={1} color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                        </ListItem>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto" }}>
                            <Typography lineHeight={1} color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                        </ListItem>
                    </List>

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
                            </Stack>
                        </ListItem>
                    </List>

                    <Stack direction="row" mt={1} gap={1}>
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<Undo />}
                            size="medium"
                            // component={Link} href="/search"
                        >
                            Wycofaj aplikację
                        </Button>
                        <Button
                            variant="text"
                            color="primary"
                            startIcon={<FilePresent />}
                            size="medium"
                            // component={Link} href="/search"
                        >
                            Edytuj pliki
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            <Divider />

            <Box display="flex" flexDirection="column" py={1} px={2} gap={0.5}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Opublikowana: 24.04.2024
                </Typography>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Zaaplikowano: 27.05.2024
                </Typography>
            </Box>

        </Card>
    );
}
