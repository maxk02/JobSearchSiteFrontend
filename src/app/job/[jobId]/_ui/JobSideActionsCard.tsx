"use client";

import {Button, Paper, Stack} from "@mui/material";
import {Star, StarBorder, TaskAlt} from "@mui/icons-material";
import React, {useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";


interface JobSideActionsCardProps {
    item: JobDetailedDto;
}

export default function JobSideActionsCard({ item }: JobSideActionsCardProps) {

    const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);

    const toggleBookmark = async () => {
        const result = isBookmarked ? await deleteJobBookmark(item.id) : await addJobBookmark(item.id);

        if (result.success) {
            setIsBookmarked(!isBookmarked);
        } else {
            console.log(`Toggle bookmark failed (${result.status})`);
        }
    }

    return (
        <Paper sx={{ p: 2 }}>
            <Stack gap={2} sx={{ alignItems: "center" }}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<TaskAlt />}
                    sx={{
                        px: 8,
                        maxWidth: "90%",
                        borderRadius: "50px",
                        fontSize: '1.1rem',
                        "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                    }}
                >
                    Aplikuj teraz
                </Button>


                <Stack direction="row" sx={{ justifyContent: "center" }}>
                    <Button
                        size="large"
                        startIcon={ item.isBookmarked ? <Star /> : <StarBorder /> }
                        sx={{ borderRadius: "50px" }}
                        onClick={toggleBookmark}
                    >
                        { item.isBookmarked ? "Usuń z zapisanych" : "Zapisz" }
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}