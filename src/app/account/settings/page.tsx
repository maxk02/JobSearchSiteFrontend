"use client";

import {
    Box,
    Button,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";

export default function AccountSettingsPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Ustawienia konta</Typography>
            <Typography mt={1}>Możesz zmienić tutaj dane konta i edytować ustawienia prywatności oraz powiadomień.</Typography>


            <Paper sx={{ mt: 2, maxWidth: "900px" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Powiadomienia" {...tabA11yProps(0)} />
                        <Tab label="Bezpieczeństwo" {...tabA11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{ px: 2, py: 0.5 }}>
                        <FormGroup>
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                            <FormControlLabel sx={{ my: 1 }} control={<Switch defaultChecked />} label="Powiadomienia o statusie aplikacji" />
                        </FormGroup>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ px: 2, pt: 1.2, pb: 2 }}>
                        <Typography variant="h6" fontWeight={600} color="primary">Zmiana hasła</Typography>
                        <Stack sx={{ gap: 1.5, mt: 1 }}>
                            <TextField label="Obecne hasło" variant="outlined" sx={{ width: 400 }} />
                            <TextField label="Nowe hasło" variant="outlined" sx={{ width: 400 }} />
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                // component={Link}
                                sx={{ borderRadius: "50px", width: "125px" }}
                            >
                                Zmień
                            </Button>
                        </Stack>
                        <Typography variant="h6" fontWeight={600} color="primary" pt={2}>Historia sesji</Typography>
                        <TableContainer component={Paper} sx={{ mt: 1.7, maxWidth: "fit-content" }}>
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
            </Paper>
        </>
    );
}
