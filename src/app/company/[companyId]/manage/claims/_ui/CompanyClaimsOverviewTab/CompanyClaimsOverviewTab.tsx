"use client";

import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import React from "react";
import CompanyClaimsOverviewTable
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsOverviewTab/CompanyClaimsOverviewTable";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const claimNames = [
    "Pełny dostęp (1)",
    "Pełny dostęp (2)",
    "Pełny dostęp (3)",
    "Pełny dostęp (4)",
    "Pełny dostęp (5)",
    "Pełny dostęp (6)",
];


export default function CompanyClaimsOverviewTab() {
    const [claimName, setClaimName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof claimName>) => {
        const {
            target: { value },
        } = event;
        setClaimName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    
    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                <FormLabel>Wyszukiwanie:</FormLabel>
                <TextField label="Imię/nazwisko/email" variant="outlined" sx={{ ml: 1.3, width: 300 }} />
                <FormControl sx={{ ml: 2.5, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Rodzaj uprawnienia</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={claimName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Rodzaj uprawnienia" />}
                        // renderValue={(selected) => selected.join(', ')}
                        renderValue={(selected) => `Wybrano ${selected.length} uprawnień`}
                        MenuProps={MenuProps}
                    >
                        {claimNames.map((name) => (
                            <MenuItem key={name} value={name} sx={{ pl: 0.2 }}>
                                <Checkbox checked={claimName.includes(name)} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    // component={Link}
                    sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                >
                    Odśwież
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    // component={Link}
                    sx={{ ml: 2, borderRadius: "50px", width: "125px" }}
                >
                    Wyczyść
                </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                <CompanyClaimsOverviewTable />
            </Box>
        </Box>
    );
}