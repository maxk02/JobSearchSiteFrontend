import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    Tab,
    Tabs,
    TextField,
    Typography,
} from "@mui/material";
import React, {useCallback, useState} from "react";
import {Close, Folder} from "@mui/icons-material";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";
import {getItemColor} from "@/lib/functions/listItemColors";
import {getCompanySharedJobFolderChildren, getCompanySharedJobFolders} from "@/lib/api/companies/companiesApi";
import {CompanyJobFolderListItemDto} from "@/lib/api/companies/companiesApiDtos";


interface ChooseFolderDialogProps {
    title: string;
    companyId: number;
    open: boolean;
    onClose: () => void;
    onSubmit: (id: number, name: string) => void;
}

export default function ChooseFolderDialog({title, open, companyId, onClose, onSubmit}: ChooseFolderDialogProps) {

    const [tabIndex, setTabIndex] = useState<number>(0);

    const [displayedFolders, setDisplayedFolders] = useState<CompanyJobFolderListItemDto[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [activeFolder, setActiveFolder] = useState<CompanyJobFolderListItemDto | null>(null);


    const fetchSharedFolders = useCallback(async () => {
        const result = await getCompanySharedJobFolders(companyId);

        if (result.success) {
            setDisplayedFolders(result.data.jobFolders);
        }
    }, [companyId]);

    const fetchChildFolders = useCallback(async (parentFolderId: number) => {
        const result = await getCompanySharedJobFolderChildren(companyId, parentFolderId);

        if (result.success) {
            setDisplayedFolders(result.data.jobFolders);
        }
    }, [companyId]);


    const handleChangeTabIndex = async (event: React.SyntheticEvent, newValue: number) => {

        switch (newValue) {
            case tabIndex:
                return;
            case 1:
                setSearchQuery("");
                setDisplayedFolders([]);
                break;
            case 2:
                await fetchSharedFolders();
                break;
        }
        setTabIndex(newValue);
    };

    const handleChooseFolder = (event: React.SyntheticEvent, folder: CompanyJobFolderListItemDto) => {
        onClose();
        onSubmit(folder.id, folder.name);
    };

    const handleChooseFolderFromExplorerButtonClick = (event: React.SyntheticEvent) => {
        if (activeFolder !== null) {
            handleChooseFolder(event, activeFolder);
        }
    };

    const handleSetActiveFolderAndLoadChildren = async (folder: CompanyJobFolderListItemDto) => {
        setActiveFolder(folder);
        await fetchChildFolders(folder.id);
    };

    const handleClose = (
        _event: unknown, reason: string
    ) => {
        if (reason === "backdropClick") {
            return;
        }
        setSearchQuery("");
        onClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            TransitionProps={{onEntered: () =>
                    document.getElementById("manage-company-dashboard-job-search-input")?.focus()}}
        >
            <DialogTitle sx={{pb: 1, pr: 1.5}}>
                <Stack direction="row" sx={{ alignItems: "center" }}>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton onClick={() => handleClose({}, "")}>
                            <Close />
                        </IconButton>
                    </Box>
                </Stack>
            </DialogTitle>
            <DialogContent
                sx={{
                    height: tabIndex === 1 ? "500px" : "554.8px",
                    maxHeight: tabIndex === 1 ? "500px" : "554.8px",
                    pb: 1,
                    overflow: "hidden"
                }}
            >
                <Box sx={{borderBottom: 1, borderColor: 'divider', height: '48px', maxHeight: '48px'}}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleChangeTabIndex}
                        sx={{
                            width: "100%", // Ensure Tabs take full width
                            "& .MuiTabs-flexContainer": {
                                justifyContent: "space-evenly", // Evenly space the tab buttons
                            },
                        }}
                    >
                        <Tab label="Szybki dostęp" {...tabA11yProps(0)} />
                        <Tab label="Nawigacja" {...tabA11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={tabIndex} index={0}>
                    <TextField
                        id="manage-company-dashboard-job-search-input"
                        sx={{mt: 1.5}}
                        placeholder="Szukaj..."
                        variant="outlined"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                    />
                    <Typography variant="body2" sx={{mt: 1.2}}>Ostatnio odwiedzane</Typography>
                    <List disablePadding sx={{mt: 0.8, py: 0, px: 0.3, height: '390px', overflowY: "auto"}}>
                        {displayedFolders.length > 0 ? (
                            displayedFolders.map((item, index) => (
                                <ListItem
                                    key={item.id}
                                    disableGutters
                                    sx={{ p: 0 }}
                                >
                                    <ListItemButton
                                        disableGutters
                                        sx={{
                                            pt: index !== 0 ? 1.2 : 0.5,
                                            pb: 1.2
                                        }}
                                        onClick={(event) => handleChooseFolder(event, item)}
                                    >
                                        <ListItemAvatar sx={{minWidth: "40px", mr: 1.3}}>
                                            <Avatar variant="rounded" sx={{backgroundColor: getItemColor(item.id)}}>
                                                <Folder />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                            slotProps={{
                                                primary: {color: "black"}
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        ) : (
                            <Typography color="text.secondary" sx={{mt: 4, mb: 2, textAlign: "center"}}>
                                Brak wyników.
                            </Typography>
                        )}
                    </List>
                </CustomTabPanel>

                <CustomTabPanel value={tabIndex} index={1}>
                    {/*<Breadcrumbs aria-label="breadcrumb" sx={{mt: 1.3}}>*/}
                    {/*    <Link underline="hover" color="inherit" href="/public"*/}
                    {/*          sx={{display: "flex", alignItems: "center", fontSize: "1.2em"}}>*/}
                    {/*        <Home fontSize="inherit"/>*/}
                    {/*        /!*Udostępnione foldery*!/*/}
                    {/*    </Link>*/}
                    {/*    <Link*/}
                    {/*        underline="hover"*/}
                    {/*        color="inherit"*/}
                    {/*        href="/material-ui/getting-started/installation/"*/}
                    {/*        sx={{fontSize: "1.2em"}}*/}
                    {/*    >*/}
                    {/*        Core*/}
                    {/*    </Link>*/}
                    {/*    <Typography sx={{color: 'text.primary', fontSize: "1.2em"}}>Breadcrumbs</Typography>*/}
                    {/*</Breadcrumbs>*/}
                    <List disablePadding sx={{py: 0.5, px: 0.3, height: '420px', minHeight: '420px', overflowY: "auto"}}>
                        {displayedFolders.map((item) => (
                            <ListItem
                                key={item.id}
                                disableGutters
                                sx={{py: 0}}
                            >
                                <ListItemButton
                                    sx={{py: 1.2}}
                                    disableGutters
                                    onClick={() => handleSetActiveFolderAndLoadChildren(item)}
                                >
                                    <ListItemAvatar sx={{minWidth: "40px", mr: 1.3}}>
                                        <Avatar variant="rounded" sx={{backgroundColor: getItemColor(item.id)}}>
                                            <Folder />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        slotProps={{
                                            primary: {color: "black"}
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </CustomTabPanel>
            </DialogContent>
            {
                tabIndex === 1 &&
                <DialogActions sx={{px: 2, pb: 1, pt: 0.5}}>
                    <Button
                        onClick={handleChooseFolderFromExplorerButtonClick}
                        sx={{fontSize: "1.1em"}}
                    >
                        Wybierz obecny folder
                    </Button>
                </DialogActions>
            }
        </Dialog>
    );
}