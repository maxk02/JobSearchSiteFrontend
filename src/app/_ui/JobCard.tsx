"use client";

import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider, IconButton,
    List,
    ListItem,
    Typography
} from "@mui/material";
import Image from "next/image";
import {StarBorderOutlined} from "@mui/icons-material";


export default function JobCard() {
    return (
        <Card sx={{ width: "100%", textAlign: "left" }}>
            <Box display="flex" flexDirection="row" width="100%">
                <Box padding={2}>
                    <Image src="/company.png" width="80" height="80" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" width="100%">
                    <Box display="flex"
                         flexDirection="row"
                         width="100%"
                         justifyContent="space-between"
                         alignItems="center"
                         sx={{ px: 2, pt: 2, pb: 0 }}
                    >
                        <CardHeader title="Specjalista do spraw księgowości"
                                    slotProps={{ title: { fontWeight: 800 } }}
                                    sx={{ p: 0 }}
                        />
                        <IconButton>
                            <StarBorderOutlined />
                        </IconButton>
                    </Box>
                    <CardContent sx={{ pt: 0, width: "100%", '&:last-child': { paddingBottom: 1.5 } }}>
                        <Box display="flex" flexDirection="column" gap={0.7} width="100%">
                            <Typography fontWeight="bold" color="textSecondary" lineHeight={1.3}>
                                31 920-49 560 zł netto (+VAT) / mies.
                            </Typography>
                            <Typography fontWeight="600" lineHeight={1.3}>
                                Alab laboratoria Sp z o o
                            </Typography>
                            <Typography lineHeight={1.3}>
                                Warszawa, Mazowieckie
                            </Typography>
                            <Box display="flex" alignItems="center" gap={1} width="100%">
                                <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", flexGrow: 1 }}>
                                    <ListItem sx={{ m: 0, p: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                                        <Typography color="textSecondary">Zdalnie, W biurze, Jeszcze gdzieś</Typography>
                                    </ListItem>
                                    <ListItem sx={{ m: 0, p: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                                        <Typography color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                                    </ListItem>
                                    <ListItem sx={{ m: 0, p: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}>
                                        <Typography color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                                    </ListItem>
                                    <ListItem sx={{ m: 0, p: 0, width: "auto" }}>
                                        <Typography color="textSecondary">Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
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
