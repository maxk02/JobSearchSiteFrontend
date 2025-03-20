import {Avatar, Box, Divider, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {AccessTime, Description, HomeWork, PieChart, PinDrop} from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import React from "react";


export default function JobOverviewCard() {
    return (
        <Paper>
            <Stack direction="row">
                <Box py={2.1} pl={3} pr={1}>
                    <Avatar variant="rounded" sx={{ height: 80, width: 80 }}>
                        <Image src="/company2.webp" width="80" height="80" alt="" />
                    </Avatar>
                </Box>
                <Stack sx={{ py: 2, px: 1.8, flexGrow: 1, justifyContent: "center" }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        Specjalista do spraw księgowości
                    </Typography>
                    {/*<Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>*/}
                    {/*    31 920-49 560 zł netto (+VAT) / mies.*/}
                    {/*</Typography>*/}
                    <Typography lineHeight={1} mt={1} sx={{ fontSize: "1.02em" }}>
                        Alab laboratoria Sp z o o
                    </Typography>
                    {/*<Typography lineHeight={1} mt={1.3}>*/}
                    {/*    Warszawa, Mazowieckie*/}
                    {/*</Typography>*/}
                </Stack>
            </Stack>
            <Divider />
            <List sx={{ m: 0, px: 0, py: 1 }}>
                <Grid container spacing={0}>
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <PinDrop color="primary" />
                            </Avatar>
                            <Typography lineHeight={1} sx={{ fontSize: "0.95em" }}>Warszawa, Mazowieckie</Typography>
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <AccessTime color="primary" />
                            </Avatar>
                            <Stack gap={0.5}>
                                <Typography lineHeight={1} sx={{ fontSize: "0.95em" }}>ważna jeszcze 10 dni</Typography>
                                <Typography lineHeight={1} color="textSecondary" sx={{ fontSize: "0.95em" }}>do 20 marca</Typography>
                            </Stack>
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <Description color="primary" />
                            </Avatar>
                            <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>umowa o pracę, umowa zlecenie, kontrakt b2b</Typography>
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <HomeWork color="primary" />
                            </Avatar>
                            <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>w biurze, zdalnie, hybrydowo</Typography>
                        </ListItem>
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                        <ListItem sx={{ px: 3, display: "flex", flexDirection: "row", gap: 1.5 }}>
                            <Avatar variant="rounded" sx={{ height: 45, width: 45,
                                backgroundColor: "#dde2e9" }}>
                                <PieChart color="primary" />
                            </Avatar>
                            <Typography lineHeight={1.25} sx={{ fontSize: "0.95em" }}>pełny etat, częściowy etat, projekt</Typography>
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
            {/*<Divider />*/}
            {/*<Stack sx={{ py: 1.5, px: 3 }}>*/}
            {/*    <Stack direction="row" sx={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}>*/}
            {/*        <Typography variant="h6" fontWeight={600} lineHeight={1} color="primary">Opis projektu</Typography>*/}
            {/*        <Typography mt={0.7}>*/}
            {/*            wepojfpofjopwejfopejfopjwfopjeop*/}
            {/*        </Typography>*/}
            {/*    </Stack>*/}

            {/*    <Typography variant="h6" fontWeight={600} lineHeight={1} mt={2.2} color="primary">Obowiązki</Typography>*/}
            {/*    <List sx={{ py: 0.1, mt: 0.4 }}>*/}
            {/*        {requirements.map((requirement, index) => (*/}
            {/*            <ListItem key={index} sx={{ pl: 0, py: 0.2 }}>*/}
            {/*                <ListItemIcon sx={{ minWidth: "32px" }}>*/}
            {/*                    <CheckCircleOutline color="primary" />*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={requirement} />*/}
            {/*            </ListItem>*/}
            {/*        ))}*/}
            {/*    </List>*/}

            {/*    <Typography variant="h6" fontWeight={600} lineHeight={1} mt={1.8} color="primary">Wymogi</Typography>*/}
            {/*    <List sx={{ py: 0.1, mt: 0.4 }}>*/}
            {/*        {requirements.map((requirement, index) => (*/}
            {/*            <ListItem key={index} sx={{ pl: 0, py: 0.2 }}>*/}
            {/*                <ListItemIcon sx={{ minWidth: "32px" }}>*/}
            {/*                    <CheckCircleOutline color="primary" />*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={requirement} />*/}
            {/*            </ListItem>*/}
            {/*        ))}*/}
            {/*    </List>*/}

            {/*    <Typography variant="h6" fontWeight={600} lineHeight={1} mt={1.8} color="primary">Mile widziane</Typography>*/}
            {/*    <List sx={{ py: 0.1, mt: 0.4 }}>*/}
            {/*        {requirements.map((requirement, index) => (*/}
            {/*            <ListItem key={index} sx={{ pl: 0, py: 0.2 }}>*/}
            {/*                <ListItemIcon sx={{ minWidth: "32px" }}>*/}
            {/*                    <CheckCircleOutline color="primary" />*/}
            {/*                </ListItemIcon>*/}
            {/*                <ListItemText primary={requirement} />*/}
            {/*            </ListItem>*/}
            {/*        ))}*/}
            {/*    </List>*/}
            {/*</Stack>*/}
        </Paper>
    );
}