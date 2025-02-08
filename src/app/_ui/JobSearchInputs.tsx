"use client";


import {Box, Button, MenuItem, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

export default function JobSearchInputs() {
    return (
        <Box sx={{ backgroundColor: "white", textAlign: "center", pt: 2, pb: 1, position: "sticky", top: "0", "z-index": "2" }}>

            <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
                <TextField label="Słowa kluczowe" variant="outlined" sx={{ flexGrow: 4,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px 0 0 50px" } }} />
                <TextField label="Lokalizacja" variant="outlined" sx={{ flexGrow: 3,
                    "& .MuiOutlinedInput-root": { borderRadius: "0" } }} />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    component={Link} href="/search"
                    sx={{ flexGrow: 1, borderRadius: "0 50px 50px 0" }}
                >
                    Szukaj
                </Button>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mb: 2 }}>
                <TextField select label="Kategoria" size="small" variant="outlined" sx={{ flexGrow: 1,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}>
                    <MenuItem value="">Wybierz</MenuItem>
                </TextField>
                <TextField select label="Rodzaj umowy" size="small" variant="outlined" sx={{ flexGrow: 1,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}>
                    <MenuItem value="">Wybierz</MenuItem>
                </TextField>
                <TextField select label="Wymiar pracy" size="small" variant="outlined" sx={{ flexGrow: 1,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}>
                    <MenuItem value="">Wybierz</MenuItem>
                </TextField>
                <TextField select label="Tryb pracy" size="small" variant="outlined" sx={{ flexGrow: 1,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px" } }}>
                    <MenuItem value="">Wybierz</MenuItem>
                </TextField>
            </Box>
        </Box>
    );
}