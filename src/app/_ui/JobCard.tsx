import {Avatar, Box, Divider, IconButton, List, ListItem, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import {StarBorderOutlined} from "@mui/icons-material";
import {JobCardDto} from "@/lib/api/jobs/jobsApiDtos";
import {jobContractTypes} from "@/lib/seededData/jobContractTypes";
import {employmentOptions} from "@/lib/seededData/employmentOptions";
import formatSalaryInfoText from "@/app/_ui/_functions/formatSalaryInfoText";
import formatLocationText from "@/app/_ui/_functions/formatLocationText";


export interface JobCardProps {
    item: JobCardDto;
    addJobBookmark: (id: number) => void;
}

export default function JobCard({ item, addJobBookmark }: JobCardProps) {
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
                    {item.locations.map((item) => (
                        <Typography key={item.id} lineHeight={1} mt={1.3}>
                            {formatLocationText(item)}
                        </Typography>
                    ))}
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
                    <IconButton sx={{ lineHeight: 1 }} onClick={() => addJobBookmark}>
                        <StarBorderOutlined />
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
