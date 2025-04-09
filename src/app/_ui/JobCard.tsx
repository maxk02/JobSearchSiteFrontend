"use client";

import {Avatar, Box, Collapse, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {ExpandLess, ExpandMore, StarBorder, StarBorderOutlined} from "@mui/icons-material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import formatLocationText from "@/app/_ui/_functions/formatLocationText";
import {useState} from "react";
import {addJobBookmark, deleteJobBookmark} from "@/lib/api/userProfiles/userProfilesApi";


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
                        <Image src={item.companyLogoLink ?? "/company2.webp"} width="80" height="80" alt="" />
                    </Avatar>
                </Box>
                <Stack sx={{ p: 2, flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1 }}>
                        {item.title}
                    </Typography>
                    {item.salaryInfo &&
                        <Typography fontWeight="bold" color="textSecondary" lineHeight={1} mt={1.3}>
                            {formatSalaryInfoText(item.salaryInfo)}
                        </Typography>
                    }
                    <Typography fontWeight="600" lineHeight={1} mt={1.3}>
                        {item.companyName}
                    </Typography>

                    {item.locations.length === 1 ? (
                        <Typography lineHeight={1} mt={1.3}>
                            {formatLocationText(item.locations[0])}
                        </Typography>
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
                                    <Typography key={location.id} lineHeight={1} mt={1.3}>
                                        {formatLocationText(location)}
                                    </Typography>
                                ))}
                            </Collapse>
                        </>
                    )}

                    <List sx={{ m: 0, p: 0, display: "flex", flexDirection: "row" }}>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto",
                            "&::after": { content: '"●"', mx: 0.5, fontSize: "0.7rem", color: "text.secondary" } }}
                        >
                            {item.employmentOptionIds?.map((item) => (
                                <Typography key={item} lineHeight={1} color="textSecondary">
                                    {employmentOptions
                                        .filter(eo => eo.id === item)
                                        .map(eo => eo.namePl).join(",")}
                                </Typography>
                            ))}
                        </ListItem>
                        <ListItem sx={{ m: 0, px: 0, pt: 1.3, pb: 0, width: "auto" }}>
                            {item.contractTypeIds?.map((item) => (
                                <Typography key={item} lineHeight={1} color="textSecondary">
                                    {jobContractTypes
                                        .filter(jct => jct.id === item)
                                        .map(jct => jct.namePl).join(",")}
                                </Typography>
                            ))}
                        </ListItem>
                    </List>
                </Stack>
                <Box sx={{ px: 2, py: 1 }}>
                    <IconButton
                        sx={{ lineHeight: 1 }}
                        onClick={toggleBookmark}
                    >
                        { item.isBookmarked ? <StarBorderOutlined /> : <StarBorder /> }
                    </IconButton>
                </Box>
            </Stack>
            <Divider />
            <Box sx={{ py: 1, px: 2 }}>
                <Typography variant="body2" width="100%" color="text.secondary" textAlign="right">
                    Opublikowana: {item.dateTimePublishedUtc}
                </Typography>
            </Box>
        </Paper>
    );
}
