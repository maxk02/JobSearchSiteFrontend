import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import React from "react";
import {ArrowBack} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";



interface CreateManageJobNavigationCardProps {
    companyName: string;
    companyLogoLink: string | null;
    returnToId: number;
}

export default function CreateManageJobNavigationCard({ returnTo, returnToId, companyName, companyLogoLink }: CreateManageJobNavigationCardProps) {

    const navItems = [
        {
            text: "Powrót do firmy",
            path: `/company/${returnToId}/manage/dashboard`,
            icon: <ArrowBack />
        },
    ];

    return (
        <Paper sx={{ p: 0, flexShrink: 0 }}>
            <Box sx={{
                mt: 1,
                mb: 0.5,
                display: "flex",
                flexDirection: "row"
            }}
            >
                <ListItem sx={{ pl: 1.5, pr: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                    <Avatar variant="rounded" sx={{ height: 35, width: 35 }}>
                        {companyLogoLink && <Image src={companyLogoLink} alt="Company logo"></Image>}
                    </Avatar>
                </ListItem>
                <ListItem sx={{ pl: 0.75, py: 0.5, alignItems: "center", flex: "0 0 fit-content" }}>
                    <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                sx={{ flex: "none" }}
                    >
                        {companyName}
                    </Typography>
                </ListItem>
            </Box>
            <List sx={{ p: 0 }}>
                {navItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                    >
                        <Link href={item.path} passHref>
                            <ListItemButton
                                sx={{
                                    pl: 1.5,
                                    py: 1.2,
                                    pr: 3
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 36 }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}