"use client";

import {Avatar, Box, Collapse, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {ExpandLess, ExpandMore, LocationPin, Star, StarBorder} from "@mui/icons-material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import {useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";


const formatPolishDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return formatter.format(date);
};

export interface JobCardProps {
    item: JobCardDto;
}

export default function JobCard({ item }: JobCardProps) {

    const [isBookmarked, setIsBookmarked] = useState(item.isBookmarked);
    const [isLocationsExpanded, setIsLocationsExpanded] = useState(false);

    const toggleLocations = () => {
        setIsLocationsExpanded(!isLocationsExpanded);
    };

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
                <Box py={2.1} pl={3} pr={1}>
                    <Avatar variant="rounded" sx={{ width: 80, height: 80 }}>
                        {item.companyAvatarLink && <Image src={item.companyAvatarLink} width="80" height="80" alt="" />}
                    </Avatar>
                </Box>
                <Stack sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        {item.title}
                    </Typography>
                    {item.salaryInfoDto &&
                        <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                            {formatSalaryInfoText(item.salaryInfoDto)}
                        </Typography>
                    }
                    <Typography fontWeight="600" lineHeight={1} mt={1.3}>
                        {item.companyName}
                    </Typography>

                    {item.locations.length === 1 ? (
                        <Stack direction="row" gap={0.3} sx={{ alignItems: "center", mt: 1.3 }}>
                            <LocationPin fontSize="small" sx={{ p: 0 }}></LocationPin>
                            <Typography lineHeight={1}>
                                {item.locations[0].fullName}
                            </Typography>
                        </Stack>
                    ) : (
                        <>
                            <Box sx={{ display: "flex", alignItems: "center", mt: 1.3, cursor: "pointer" }} onClick={toggleLocations}>
                                <Typography lineHeight={1}>
                                    Dostępna w {item.locations.length} lokalizacjach
                                </Typography>
                                <IconButton size="small" sx={{ ml: 0.5, p: 0 }}>
                                    {isLocationsExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                                </IconButton>
                            </Box>
                            <Collapse in={isLocationsExpanded}>
                                {item.locations.map((location) => (
                                    <Stack key={location.id} direction="row" gap={0.3} sx={{ alignItems: "center", mt: 1.3 }}>
                                        <LocationPin fontSize="small" sx={{ p: 0 }}></LocationPin>
                                        <Typography lineHeight={1}>
                                            {location.fullName}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Collapse>
                        </>
                    )}

                    <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row" }}>
                        {item.employmentOptionIds?.map((item) => (
                            <ListItem key={item} sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto",
                                "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}
                            >
                                <Typography lineHeight={1} color="textSecondary">
                                    {employmentOptions
                                        .filter(eo => eo.id === item)
                                        .map(eo => eo.namePl).join(",")}
                                </Typography>
                            </ListItem>
                        ))}
                        
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto", }}>
                            <Typography lineHeight={1} color="textSecondary">
                                {jobContractTypes
                                    .filter(jct => item.contractTypeIds?.includes(jct.id))
                                    .map(jct => jct.namePl)
                                    .join(", ")
                                }
                            </Typography>
                        </ListItem>
                    </List>
                </Stack>
                <Box sx={{ px: 2, py: 1 }}>
                    <IconButton
                        sx={{ lineHeight: 1 }}
                        onClick={toggleBookmark}
                    >
                        { item.isBookmarked ? <Star /> : <StarBorder /> }
                    </IconButton>
                </Box>
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
