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
import {ArrowForward, Business, Dashboard, FileOpen, MonetizationOn, Money, Newspaper, Policy} from "@mui/icons-material";
import {useParams, usePathname} from "next/navigation";
import {useEffect} from "react";
import {getCompanyManagementNavbarDto} from "@/lib/api/companies/companiesApi";
import {useCurrentCompanyStore} from "@/lib/stores/currentCompanyStore";


function isRouteActive(pathname: string, href: string) {
    if (href === pathname) return true;
    return pathname.startsWith(`${href}/`);
}

export default function CompanyManagementSideNavbar() {

    const params = useParams();

    const companyId = parseInt(params.companyId as string, 10);

    const currentPath = usePathname();

    const { currentCompany, setCurrentCompany } = useCurrentCompanyStore();

    useEffect(() => {
        const fetchCompanyData = async () => {

            const result = await getCompanyManagementNavbarDto(companyId);

            if (result.success) {
                setCurrentCompany(result.data.company);
            } else {
                console.error(`couldn't fetch company: ${result.status}, ${result.error.details}`);
            }
        };

        fetchCompanyData();
    }, [companyId]);

    const navItems = [
        { text: "Pulpit", icon: <Dashboard />, path: `/company/${companyId}/manage/dashboard`,
            isAccessible: true },
        { text: "Profil i ustawienia", icon: <Business />, path: `/company/${companyId}/manage/profile`,
            isAccessible: currentCompany?.claimIds?.includes(3) },
        { text: "Rachunek i transakcje", icon: <MonetizationOn />, path: `/company/${companyId}/manage/balance`,
            isAccessible: currentCompany?.claimIds?.includes(5) },
        { text: "Uprawnienia", icon: <Policy />, path: `/company/${companyId}/manage/claims`,
            isAccessible: currentCompany?.claimIds?.includes(2) },
        { text: "Ogłoszenia", icon: <Newspaper />, path: `/company/${companyId}/manage/jobs`,
            isAccessible: currentCompany?.claimIds?.includes(7) },
    ];

    return (
        <Paper sx={{ px: 1, py: 0.5, position: "sticky", top: 20, zIndex: 1 }}>
            <Stack sx={{ gap: 0.7, mt: 1.5, pt: 1.5, pb: 0.5, px: 1.8 }}>
                <Avatar src={currentCompany?.avatarLink ?? ""} variant="rounded" sx={{ height: 64, width: 64 }} />
                <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}>
                    {currentCompany?.name}
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
            </List>
        </Paper>
    );
}