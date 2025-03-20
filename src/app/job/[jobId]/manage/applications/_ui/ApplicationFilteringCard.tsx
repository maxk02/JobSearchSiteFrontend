"use client";

import {Box, Button, Chip, MenuItem, Paper, Stack, TextField, Typography} from "@mui/material";
import {Add} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
// import Link from "next/link";


export default function ApplicationFilteringCard() {
    return (
        <Paper elevation={3} sx={{ mt: 2, px: 2, py: 1.5,
            // position: "sticky", top: "0", zIndex: "2"
        }}>

            <Typography variant="h6" fontWeight={600}>Filtrowanie</Typography>

            <Box sx={{ display: "flex", flexDirection: "row", mt: 1 }}>
                <TextField label="Słowa kluczowe" variant="outlined" sx={{ flexGrow: 3,
                    "& .MuiOutlinedInput-root": { borderRadius: "50px 0 0 50px" } }} />
                <TextField select label="Status" variant="outlined" sx={{ flexGrow: 4,
                    "& .MuiOutlinedInput-root": { borderRadius: "0" } }}>
                    <MenuItem value="">Wybierz</MenuItem>
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                    component={Link} href="/search"
                    sx={{
                        flexGrow: 1,
                        borderRadius: "0 50px 50px 0",
                        fontSize: '1.1rem',
                        "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                    }}
                >
                    Szukaj
                </Button>
            </Box>

            <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                <Typography variant="body2">Ma zawierać tagi publiczne:</Typography>
                <Chip label="Do przeglądu" variant="filled" onDelete={() => {}} />
                <Chip label="Do przeglądu" variant="filled" onDelete={() => {}} />
                <Chip label="Do przeglądu" variant="filled" onDelete={() => {}} />
                <Chip icon={<Add />} label="Dodaj tag" variant="outlined" onClick={() => {}} sx={{ borderStyle: "dashed" }} />
            </Stack>

            <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                <Typography variant="body2">Wyklucz tagi publiczne:</Typography>
                <Chip icon={<Add />} label="Dodaj tag" variant="outlined" onClick={() => {}} sx={{ borderStyle: "dashed" }} />
            </Stack>

            <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                <Typography variant="body2">Ma zawierać tagi prywatne:</Typography>
                <Chip icon={<Add />} label="Dodaj tag" variant="outlined" onClick={() => {}} sx={{ borderStyle: "dashed" }} />
            </Stack>

            <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                <Typography variant="body2">Wyklucz tagi prywatne:</Typography>
                <Chip icon={<Add />} label="Dodaj tag" variant="outlined" onClick={() => {}} sx={{ borderStyle: "dashed" }} />
            </Stack>

        </Paper>
    );
}
