import {
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Link,
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
import React, {useState} from "react";
import {Close, Home} from "@mui/icons-material";
import tabA11yProps from "@/app/_ui/_lib/_components/tab/tabA11yProps";
import CustomTabPanel from "@/app/_ui/CustomTabPanel";
import {getItemColor} from "@/lib/functions/listItemColors";


interface ChooseFolderDialogItem {
    id: number;
    title: string;
}

interface ChooseFolderDialogProps {
    title: string;
    open: boolean;
    onClose: () => void;
    data: ChooseFolderDialogItem[];
    listItemIcon: React.ReactNode;
}

export default function ChooseFolderDialog({title, open, onClose, data, listItemIcon}: ChooseFolderDialogProps) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    const [searchQuery, setSearchQuery] = useState("");

    const filteredResults = data.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );


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
                    height: value === 1 ? "500px" : "554.8px",
                    maxHeight: value === 1 ? "500px" : "554.8px",
                    pb: 1,
                    overflow: "hidden"
                }}
            >
                <Box sx={{borderBottom: 1, borderColor: 'divider', height: '48px', maxHeight: '48px'}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
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
                <CustomTabPanel value={value} index={0}>
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
                        {filteredResults.length > 0 ? (
                            filteredResults.map((item, index) => (
                                <ListItem
                                    key={item.id}
                                    component="a"
                                    href={`/job/${item.id}/manage/`}
                                    disableGutters
                                    sx={{
                                        pt: index !== 0 ? 1.2 : 0.5,
                                        pb: 1.2
                                    }}
                                >
                                    <ListItemAvatar sx={{minWidth: "40px", mr: 1.3}}>
                                        <Avatar variant="rounded" sx={{backgroundColor: getItemColor(item.id)}}>
                                            {listItemIcon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        slotProps={{
                                            primary: {color: "black"}
                                        }}
                                    />
                                </ListItem>
                            ))
                        ) : (
                            <Typography color="text.secondary" sx={{mt: 4, mb: 2, textAlign: "center"}}>
                                Brak wyników.
                            </Typography>
                        )}
                    </List>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <Breadcrumbs aria-label="breadcrumb" sx={{mt: 1.3}}>
                        <Link underline="hover" color="inherit" href="/"
                              sx={{display: "flex", alignItems: "center", fontSize: "1.2em"}}>
                            <Home fontSize="inherit"/>
                            {/*Udostępnione foldery*/}
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                            sx={{fontSize: "1.2em"}}
                        >
                            Core
                        </Link>
                        <Typography sx={{color: 'text.primary', fontSize: "1.2em"}}>Breadcrumbs</Typography>
                    </Breadcrumbs>
                    <List disablePadding sx={{py: 0.5, px: 0.3, height: '420px', minHeight: '420px', overflowY: "auto"}}>
                        {data.map((item) => (
                            <ListItem
                                key={item.id}
                                disableGutters
                                sx={{py: 0}}
                            >
                                <ListItemButton
                                    sx={{py: 1.2}}
                                    disableGutters
                                    onClick={() => {
                                    }}
                                >
                                    <ListItemAvatar sx={{minWidth: "40px", mr: 1.3}}>
                                        <Avatar variant="rounded" sx={{backgroundColor: getItemColor(item.id)}}>
                                            {listItemIcon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
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
                value === 1 &&
                <DialogActions sx={{px: 2, pb: 1, pt: 0.5}}>
                    <Button onClick={() => {
                    }} sx={{fontSize: "1.1em"}}>Wybierz obecny folder</Button>
                </DialogActions>
            }
        </Dialog>
    );
}