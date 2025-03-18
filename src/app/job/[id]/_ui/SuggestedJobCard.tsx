"use client";

import {Box, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {StarBorderOutlined} from "@mui/icons-material";


export default function SuggestedJobCard() {
    return (
        <Paper sx={{ width: "100%", textAlign: "left" }}>
            <Stack direction="row">
                <Box pt={1.5} pl={1.5} pr={0.8}>
                    <Image src="/company2.webp" width="35" height="35" alt="" />
                </Box>
                <Stack sx={{ pt: 1.5, pl: 0.8, pr: 2, flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 800, lineHeight: 1, fontSize: "1.15em" }}>
                        Specjalista do spraw księgowości
                    </Typography>
                </Stack>
                <Box sx={{ px: 2, py: 1 }}>
                    <IconButton sx={{ lineHeight: 1 }}>
                        <StarBorderOutlined />
                    </IconButton>
                </Box>
            </Stack>
            <Stack pl={1.5} pt={0.5} pb={2}>
                <Typography color="textSecondary" lineHeight={1} sx={{ fontWeight: 500, fontSize: "0.9em" }}>
                    31 920-49 560 zł netto (+VAT) / mies.
                </Typography>
                <Typography fontWeight="600" lineHeight={1} mt={0.7} sx={{ fontWeight: 500, fontSize: "0.9em" }}>
                    Alab laboratoria Sp z o o
                </Typography>
                <Typography lineHeight={1} mt={0.7} sx={{ fontSize: "0.9em" }}>
                    Warszawa, Mazowieckie
                </Typography>
                <List sx={{ mt: 0.7, p: 0, display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <ListItem sx={{ m: 0, px: 0, pt: 0.7, pb: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.5rem", color: "text.secondary" } }}>
                        <Typography lineHeight={0.5} color="textSecondary" sx={{ fontSize: "0.85em" }}>Zdalnie, W biurze, Jeszcze gdzieś</Typography>
                    </ListItem>
                    <ListItem sx={{ m: 0, px: 0, pt: 0.7, pb: 0, width: "auto" }}>
                        <Typography lineHeight={0.5} color="textSecondary" sx={{ fontSize: "0.85em" }}>Umowa o ..., Umowa o ..., Umowa o ...</Typography>
                    </ListItem>
                </List>
            </Stack>
            {/*<Divider />*/}
            {/*<Box sx={{ py: 1, px: 2 }}>*/}
            {/*    <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">*/}
            {/*        Opublikowana: 24.04.2024 12:24*/}
            {/*    </Typography>*/}
            {/*</Box>*/}
        </Paper>
    );
}
