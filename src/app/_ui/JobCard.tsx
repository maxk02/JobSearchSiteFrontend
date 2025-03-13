"use client";

import {Box, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {StarBorderOutlined} from "@mui/icons-material";


export default function JobCard() {
    return (
        <Paper sx={{ width: "100%", textAlign: "left" }}>
            <Stack direction="row">
                <Box py={2.1} pl={3} pr={1}>
                    <Image src="/company2.webp" width="80" height="80" alt="" />
                </Box>
                <Stack sx={{ p: 2, flexGrow: 1 }}>
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
                </Stack>
                <Box sx={{ px: 2, py: 1 }}>
                    <IconButton sx={{ lineHeight: 1 }}>
                        <StarBorderOutlined />
                    </IconButton>
                </Box>
            </Stack>
            <Divider />
            <Box sx={{ py: 1, px: 2 }}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Opublikowana: 24.04.2024 12:24
                </Typography>
            </Box>
        </Paper>
    );
}
