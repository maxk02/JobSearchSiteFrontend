import {Box, Button, Container, Stack, Typography} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import {ArrowForward} from "@mui/icons-material";
import Link from "next/link";

export default function ForEmployersPage() {
    return (
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
            <Stack sx={{ alignItems: "center" }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 500 }}>
                    Załóż konto firmowe
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4, width: "70%" }}>
                    Zaprezentuj swoją markę, przyciągaj najlepszych talentów i zarządzaj ofertami pracy w jednym miejscu.
                </Typography>
                <Grid container spacing={1} sx={{ width: "100%" }}>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="subtitle1">Krok 1: Rejestracja</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Podaj podstawowe dane firmy.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="subtitle1">Krok 2: Personalizacja</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Dodaj logo, opis i inne szczegóły.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="subtitle1">Krok 3: Publikacja</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Zacznij publikować oferty pracy od razu.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Stack sx={{ mt: 4, alignItems: "center" }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 500 }}>
                        Elastyczny system kredytów
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, width: "80%", fontWeight: 500 }}>
                        Po rejestracji otrzymasz 10 darmowych kredytów na 1 ofertę pracy (7 dni). Kupuj kredyty, aby publikować więcej ofert i wybierać ich czas ważności: 7 dni (10 kredytów), 14 dni (15 kredytów) lub 30 dni (25 kredytów). Im więcej kredytów kupisz, tym taniej – już od 1,50 PLN za kredyt!
                    </Typography>
                </Stack>
                <Link href="/for-employers/register?step=1" passHref>
                    <Button
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward />}
                        sx={{
                            mt: 2,
                            px: 8,
                            borderRadius: "50px",
                            fontSize: '1.05rem'
                        }}
                    >
                        Rozpocznij
                    </Button>
                </Link>
            </Stack>
        </Container>
    );
}
