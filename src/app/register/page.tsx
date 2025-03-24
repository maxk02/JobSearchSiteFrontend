"use client";

import {useState} from "react";
import {Button, Container, Link, Paper, Stack, TextField, Typography} from "@mui/material";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log({ email, password, rememberMe });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper sx={{ width: "100%", px: 9, pt: 6, pb: 8 }}>
                <Stack sx={{ width: "100%", alignItems: "center" }}>
                    <Typography variant="h4" mb={1.5} sx={{ textAlign: "center" }}>
                        Rejestracja
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
                        <Typography>
                            Masz konto?
                        </Typography>
                        <Link href="#" variant="body1">
                            Zaloguj się
                        </Link>
                    </Stack>
                    <Stack sx={{ mt: 4, gap: 2, width: "100%", alignItems: "center" }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Hasło"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Powtórz hasło"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Stack>

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 5, py: 1.5, width: "75%", fontSize: "1.02rem" }}
                        onClick={handleLogin}
                        size="large"
                    >
                        Zarejestruj się
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
}
