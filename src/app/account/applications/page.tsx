"use client";

import {Chip, Stack, Typography} from "@mui/material";
import ApplicationInUserProfileCard from "@/app/account/applications/_ui/ApplicationInUserProfileCard";
import {useState} from "react";


const chips: string[] = ["Zaaplikowano", "W trakcie rozpatrzenia", "Odrzucona", "Wycofana"];


export default function AccountApplicationsPage() {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);

    const handleChipClick = (chip: string) => {
        setSelectedChips((prev) =>
            prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
        );
    };

    return (
        <>
            <Typography variant="h4" fontWeight={600} color="primary">Historia aplikacji</Typography>
            <Typography mt={0.5}>W tej zakładce sprawdzisz status swoich aplikacji.</Typography>

            <Stack direction="row" spacing={1} sx={{ mt: 1.5, alignItems: "center" }}>
                <Typography variant="body1" color="text.secondary">
                    Filtruj:
                </Typography>
                {chips.map((chip) => (
                    <Chip
                        variant="filled"
                        color={selectedChips.includes(chip) ? "primary" : "default"}
                        key={chip}
                        label={chip}
                        onClick={() => handleChipClick(chip)}
                        sx={{
                            fontSize: "1.02em"
                        }}
                    />
                ))}
            </Stack>

            <Stack gap={3} mt={2} sx={{ maxWidth: "900px" }}>
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
                <ApplicationInUserProfileCard />
            </Stack>

        </>
    );
}
