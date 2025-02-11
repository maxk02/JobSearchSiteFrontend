"use client";

import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem, ListItemIcon,
    Typography, useTheme
} from "@mui/material";
import Image from "next/image";
import {
    DocumentScanner,
    FilePresent, PlayArrow,
    Undo
} from "@mui/icons-material";
// import Link from "next/link";


export default function ApplicationInUserProfileCard() {
    const theme = useTheme();

    return (
        <Card sx={{ width: "100%", textAlign: "left" }}>
            <Box display="flex" flexDirection="row" width="100%">
                <Box py={2.1} pl={3} pr={1}>
                    <Image src="/company2.webp" width="80" height="80" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" width="100%">
                    <Box width="100%"
                         sx={{ px: 2, pt: 2, pb: 0 }}
                    >
                        <CardHeader title="Specjalista do spraw księgowości"
                                    slotProps={{ title: { fontWeight: 800, lineHeight: 1 } }}
                                    sx={{ p: 0 }}
                        />
                    </Box>
                    <CardContent sx={{ pt: 0, width: "100%", '&:last-child': { paddingBottom: 1.5 } }}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <Typography fontWeight="bold" color="textSecondary" lineHeight={1} pt={1.3}>
                                31 920-49 560 zł netto (+VAT) / mies.
                            </Typography>
                            <Typography fontWeight="600" lineHeight={1} pt={1.3}>
                                Alab laboratoria Sp z o o
                            </Typography>
                            <Typography lineHeight={1} pt={1.3}>
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
                            <List sx={{ mt: 1.7, pl: 0, pb: 1, pt: 1, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                                <ListItem sx={{ px: 0, pb: 0, pt: 0 }}>
                                    <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                        <PlayArrow />
                                    </ListItemIcon>
                                    <Typography lineHeight={1}>Status: odrzucona</Typography>
                                </ListItem>
                                <ListItem sx={{ px: 0, pb: 0 }}>
                                    <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                        <PlayArrow />
                                    </ListItemIcon>
                                    <Typography lineHeight={1}>CV: nieudostępnione</Typography>
                                </ListItem>
                                <ListItem sx={{ px: 0, pb: 0 }}>
                                    <ListItemIcon sx={{ color: theme.palette.primary.main, px: 0.5, lineHeight: 1, minWidth: 24 }}>
                                        <PlayArrow />
                                    </ListItemIcon>
                                    <Typography lineHeight={1}>Pliki: udostępniono 3 pliki</Typography>
                                </ListItem>
                            </List>
                            <Box display="flex" flexDirection="row" width="100%" mt={0.7} sx={{ justifyContent: "left" }} gap={0.5}>
                                <Button
                                    variant="text"
                                    color="primary"
                                    startIcon={<Undo />}
                                    size="medium"
                                    sx={{ pl: 0.5 }}
                                    // component={Link} href="/search"
                                >
                                    Wycofaj aplikację
                                </Button>
                                <Button
                                    variant="text"
                                    color="primary"
                                    startIcon={<DocumentScanner />}
                                    size="medium"
                                    // component={Link} href="/search"
                                >
                                    Udostępnij CV
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
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
            </Box>
            {/*<Divider />*/}

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
