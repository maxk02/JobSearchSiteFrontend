"use client";

import {Box, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {Star, StarBorder} from "@mui/icons-material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";
import {useState} from "react";



const formatPolishDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};

export interface SuggestedJobCardProps {
    item: JobCardDto;
}

export default function SuggestedJobCard({ item }: SuggestedJobCardProps) {

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
        <Paper sx={{ width: "100%", textAlign: "left" }}>
            <Stack direction="row">
                <Box pt={1.5} pl={1.5} pr={0.8}>
                    { item.companyLogoLink && <Image src={item.companyLogoLink} width="35" height="35" alt="" /> }
                </Box>
                <Stack sx={{ pt: 1.5, pl: 0.8, pr: 2, flexGrow: 1 }}>
                    <Typography sx={{ fontWeight: 800, lineHeight: 1, fontSize: "1.15em" }}>
                        {item.title}
                    </Typography>
                    <Typography fontWeight="600" lineHeight={1} mt={1} sx={{ fontWeight: 500, fontSize: "0.9em" }}>
                        {item.companyName}
                    </Typography>
                </Stack>
                <Box sx={{ px: 2, py: 1 }}>
                    { item.isBookmarked ?
                        <IconButton
                            sx={{ lineHeight: 1 }}
                            onClick={toggleBookmark}
                            color="warning"
                        >
                            <Star />
                        </IconButton> :
                        <IconButton
                            sx={{ lineHeight: 1 }}
                            onClick={toggleBookmark}
                        >
                            <StarBorder />
                        </IconButton>
                    }
                </Box>
            </Stack>
            <Stack pl={1.5} pt={0.5} pb={2}>
                {item.salaryInfo &&
                    <Typography fontWeight="bold" color="textSecondary" lineHeight={1} sx={{ fontWeight: 500, fontSize: "0.9em" }}>
                        {formatSalaryInfoText(item.salaryInfo)}
                    </Typography>
                }

                {item.locations.length === 1 ? (
                    <Typography lineHeight={1} mt={1.3} sx={{ fontSize: "0.9em" }}>
                        {item.locations[0].name}
                    </Typography>
                ) : (
                    <Typography lineHeight={1} mt={1.3} sx={{ fontSize: "0.9em" }}>
                        Dostępna w {item.locations.length} lokalizacjach
                    </Typography>
                )}

                <List sx={{ mt: 0.7, p: 0, display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    <ListItem sx={{ m: 0, px: 0, pt: 0.7, pb: 0, width: "auto", "&::after": { content: '"●"', mx: 0.5, fontSize: "0.5rem", color: "text.secondary" } }}>
                        <Typography lineHeight={1} color="textSecondary" sx={{ fontSize: "0.9em" }}>
                            {employmentOptions
                                .filter(eo => item.employmentOptionIds?.includes(eo.id))
                                .map(eo => eo.namePl)
                                .join(", ")
                            }
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ m: 0, px: 0, pt: 0.7, pb: 0, width: "auto" }}>
                        <Typography lineHeight={1} color="textSecondary" sx={{ fontSize: "0.9em" }}>
                            {jobContractTypes
                                .filter(jct => item.contractTypeIds?.includes(jct.id))
                                .map(jct => jct.namePl)
                                .join(", ")
                            }
                        </Typography>
                    </ListItem>
                </List>
            </Stack>
            <Divider />
            <Box sx={{ py: 1, px: 2 }}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Ważna do: {formatPolishDate(item.dateTimeExpiringUtc)}
                </Typography>
            </Box>
        </Paper>
    );
}
