"use client";

import {
    Box, Button, Card, CardContent, FormControlLabel, FormGroup, Paper, Switch, Tab, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Tabs, TextField, Typography
} from "@mui/material";
import React from "react";
import tabA11yProps from "@/lib/tabA11yProps";
import CustomTabPanel from "@/ui/CustomTabPanel";

export default function AccountSettingsPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Ustawienia konta</Typography>
            <Typography mt={1}>Możesz zmienić tutaj dane konta i edytować ustawienia prywatności oraz powiadomień.</Typography>


            <Card sx={{ mt: 2.5 }}>
                <CardContent sx={{ px: 2.5, pt: 0.5, '&:last-child': { pb: 0 } }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Powiadomienia" {...tabA11yProps(0)} />
                            <Tab label="Bezpieczeństwo" {...tabA11yProps(1)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <FormGroup sx={{ py: 1 }}>
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                        </FormGroup>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Box sx={{ pt: 2, pb: 2.5 }}>
                            <Typography variant="h6" fontWeight={600} color="primary">Zmiana hasła</Typography>
                            <Box display="flex" flexDirection="column">
                                <TextField label="Obecne hasło" variant="outlined" sx={{ mt: 1.5, width: 400 }} />
                                <TextField label="Nowe hasło" variant="outlined" sx={{ mt: 2, width: 400 }} />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    // component={Link}
                                    sx={{ borderRadius: "50px", width: "125px", mt: 2 }}
                                >
                                    Zmień
                                </Button>
                            </Box>
                            <Typography variant="h6" fontWeight={600} color="primary" pt={3}>Historia sesji</Typography>
                            <TableContainer component={Paper} sx={{ mt: 2, maxWidth: "fit-content" }}>
                                <Table sx={{ tableLayout: "auto", maxWidth: "fit-content" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Data</TableCell>
                                            <TableCell>Adres IP</TableCell>
                                            <TableCell>Urządzenie</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>12.12.2024 23:14</TableCell>
                                            <TableCell>192.168.0.1</TableCell>
                                            <TableCell>ODJOJ24OIN</TableCell>
                                            <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Typography>Aktywna</Typography>
                                                <Button
                                                    variant="outlined"
                                                    color="error"
                                                    sx={{ ml: 4 }}
                                                >
                                                    Zakończ
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </CustomTabPanel>
                </CardContent>
            </Card>
        </>
    );
}
