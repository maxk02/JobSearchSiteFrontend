"use client";

import {
    Box, Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    List,
    ListItem,
    Typography
} from "@mui/material";
import {
    DeleteForever,
    DocumentScanner,
    Edit,
    WebAssetOff
} from "@mui/icons-material";


export default function EditJobCard() {
    return (
        <Card sx={{ width: "100%", textAlign: "left" }}>
            <Box display="flex" flexDirection="column" width="100%">
                <Box display="flex"
                     flexDirection="row"
                     width="100%"
                     justifyContent="space-between"
                     alignItems="center"
                     sx={{ px: 2, pt: 2, pb: 0 }}
                >
                    <CardHeader title="Specjalista do spraw księgowości"
                                slotProps={{ title: { fontWeight: 800, lineHeight: 1 } }}
                                sx={{ p: 0 }}
                    />
                </Box>
                <CardContent sx={{ pt: 0, width: "100%", '&:last-child': { paddingBottom: 1 } }}>
                    <Box display="flex" flexDirection="column" width="100%">
                        <Typography fontWeight="bold" color="textSecondary" lineHeight={1} pt={1.3}>
                            31 920-49 560 zł netto (+VAT) / mies.
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
                        <Box display="flex" flexDirection="row" width="100%" mt={1} sx={{ justifyContent: "left" }} gap={2}>
                            <Button
                                variant="text"
                                color="primary"
                                startIcon={<Edit />}
                                size="medium"
                                sx={{ pl: 0.7 }}
                                // component={Link} href="/search"
                            >
                                Edytuj
                            </Button>
                            <Button
                                variant="text"
                                color="primary"
                                startIcon={<DocumentScanner />}
                                size="medium"
                                // component={Link} href="/search"
                            >
                                Zarządzaj aplikacjami
                            </Button>
                            <Button
                                variant="text"
                                color="error"
                                startIcon={<WebAssetOff />}
                                size="medium"
                                // component={Link} href="/search"
                            >
                                Ukryj
                            </Button>
                            <Button
                                variant="text"
                                color="error"
                                startIcon={<DeleteForever />}
                                size="medium"
                                // component={Link} href="/search"
                            >
                                Usuń
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <Divider />
            <CardActions>
                <Typography mr={1} variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Opublikowana: 24.04.2024
                </Typography>
            </CardActions>
        </Card>
    );
}
