"use client";

import { useState } from "react";
import {
    Container,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
    Box,
    Link,
    Card,
    CardContent
} from "@mui/material";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = () => {
        console.log({ email, password, rememberMe });
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Card sx={{ boxShadow: 1.5, px: 3, py: 6 }}>
                <CardContent>
                    <Container maxWidth="xs">
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography variant="h4" mb={1.5}>
                                Logowanie
                            </Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Hasło"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />}
                                label="Zapamiętaj konto"
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 1.5, mb: 1, py: 1.5, width: "80%", fontSize: "1rem" }}
                                onClick={handleLogin}
                                // size="large"
                            >
                                Zaloguj się
                            </Button>
                            <Link href="#" variant="body1" sx={{ mt: 1 }}>
                                Zapomniałeś hasła?
                            </Link>
                        </Box>
                    </Container>
                </CardContent>
            </Card>
        </Container>
    );
}
