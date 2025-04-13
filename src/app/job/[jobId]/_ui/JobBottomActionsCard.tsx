"use client";

import {Button, Stack} from "@mui/material";
import {Star, StarBorder, TaskAlt} from "@mui/icons-material";
import {useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {JobDetailedDto} from "@/lib/api/jobs/jobsApiDtos";


interface JobBottomActionsCardProps {
    item: JobDetailedDto;
}

export default function JobBottomActionsCard({ item }: JobBottomActionsCardProps) {

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
        <Stack direction="row" sx={{ width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<TaskAlt />}
                sx={{
                    px: 8,
                    borderRadius: "50px",
                    fontSize: '1.1rem',
                    "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                }}
            >
                Aplikuj teraz
            </Button>

            <Button
                size="large"
                startIcon={ item.isBookmarked ? <Star /> : <StarBorder /> }
                sx={{ borderRadius: "50px" }}
                onClick={toggleBookmark}
            >
                { item.isBookmarked ? "Usuń z zapisanych" : "Zapisz" }
            </Button>
        </Stack>
    );
}