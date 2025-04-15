"use client";

import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import {ArrowForward, Business, Dashboard, FileOpen, Policy, QueryStats} from "@mui/icons-material";
import {useParams, usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {getCompanyById} from "@/lib/api/companies/companiesApi";
import Image from "next/image";


function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}

export default function CompanyManagementSideNavbar() {

    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const currentPath = usePathname();

    const [companyName, setCompanyName] = useState<string | null>(null);
    const [logoLink, setLogoLink] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanyData = async () => {

            const result = await getCompanyById(companyId);

            if (result.success) {
                setCompanyName(result.data.company.name);
                setLogoLink(result.data.company.logoLink);
            }

        };

        fetchCompanyData();
    });

    const navItems = [
        { text: "Pulpit", icon: <Dashboard />, path: `/company/${companyId}/manage/dashboard` },
        { text: "Profil firmy", icon: <Business />, path: `/company/${companyId}/manage/profile` },
        { text: "Zarządzanie uprawnieniami", icon: <Policy />, path: `/company/${companyId}/manage/claims` },
        { text: "Statystyki", icon: <QueryStats />, path: `/company/${companyId}/manage/stats` },
    ];

    return (
        <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
            <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                <Avatar variant="rounded" sx={{ height: 64, width: 64 }}>
                    {logoLink && <Image width={64} height={64} src={logoLink} alt="Company logo image" />}
                </Avatar>
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                    {companyName}
                </Typography>
            </Stack>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            selected={isRouteActive(currentPath, item.path)}
                            href={item.path}
                            sx={{
                                pl: 1.6,
                                py: 1.5,
                                pr: 3
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />

                        </ListItemButton>
                    </ListItem>
                ))}
                <Divider sx={{ mt: 2 }} />
                <ListItem key="Zarządzaj ofertami pracy" disablePadding sx={{ mt: 0.5 }}>
                    <ListItemButton sx={{ px: 1.6, py: 1.5 }} href={`/folder/${companyId}/jobs`}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                            <FileOpen />
                        </ListItemIcon>
                        <ListItemText primary="Zarządzaj ofertami pracy" />
                        <ListItemIcon sx={{ minWidth: 24, pl: 3 }}>
                            <ArrowForward />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    );
}