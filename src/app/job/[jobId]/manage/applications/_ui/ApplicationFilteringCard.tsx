import {
    Button,
    Checkbox,
    Chip, InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {Add} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useState} from "react";
import {jobApplicationStatuses} from "@/lib/seededData/jobApplicationStatuses";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import ApplicationTagSearchDialog from "@/app/job/[jobId]/manage/applications/_ui/ApplicationTagSearchDialog";
import JobApplicationLocationSelect from "@/app/_ui/JobApplicationLocationSelect";
import { LocationDto } from "@/lib/api/locations/locationsApiDtos";



const mockTags = [
    {id: 1, title: "1 etap"},
    {id: 2, title: "2 etap"},
    {id: 3, title: "Do przeglądu 7 lipca"},
];

interface ApplicationFilteringCardProps {
    // searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string | null>>;
    includedTags: string[];
    setIncludedTags: React.Dispatch<React.SetStateAction<string[]>>;
    excludedTags: string[];
    setExcludedTags: React.Dispatch<React.SetStateAction<string[]>>;
    selectedStatusIds: number[];
    setSelectedStatusIds: React.Dispatch<React.SetStateAction<number[]>>;
    onSearchButtonClick: () => void;
    locationsAvailable: LocationDto[];
}

export default function ApplicationFilteringCard(props: ApplicationFilteringCardProps) {

    const { setSearchQuery, includedTags, setIncludedTags, excludedTags,
        setExcludedTags, selectedStatusIds, setSelectedStatusIds, onSearchButtonClick, locationsAvailable } = props;

    const handleSelectChange = (event: SelectChangeEvent<number[]>) => {
        const value = event.target.value as number[];
        setSelectedStatusIds(value);
    };

    const [includeTagSearchDialogOpen, setIncludeTagSearchDialogOpen] = useState(false);
    const [excludeTagSearchDialogOpen, setExcludeTagSearchDialogOpen] = useState(false);

    const handleCloseDialogs = () => {
        setIncludeTagSearchDialogOpen(false);
        setExcludeTagSearchDialogOpen(false);
    };

    const handleTagSearchDialogSubmit = (mode: "include" | "exclude", tag: string) => {
        switch (mode) {
            case "include":
                setIncludedTags(prev => [...prev, tag]);
                break;
            case "exclude":
                setExcludedTags(prev => [...prev, tag]);
                break;
        }
    };

    return (
        <>
            <Paper elevation={3} sx={{ mt: 2, px: 2, py: 1.5,
                // position: "sticky", top: "0", zIndex: "2"
            }}>
                <Typography variant="h5" fontWeight={600} color="primary">Filtrowanie</Typography>

                <Grid container sx={{ mt: 1 }}>

                    <Grid size={5}>
                        <TextField
                            label="Słowa kluczowe"
                            variant="outlined"
                            fullWidth
                            onChange={(e) => {setSearchQuery(e.target.value)}}
                            sx={{
                                "& .MuiOutlinedInput-root": { borderRadius: "50px 0 0 50px", height: "100%" },
                                height: "57px",
                            }}
                        />
                    </Grid>

                    <Grid size={4.5}>
                        <FormControl sx={{ width: "100%" }}>
                            <InputLabel id={`select-job-application-statuses-label`}>Status</InputLabel>
                            <Select
                                labelId={`select-job-application-statuses-label`}
                                id={`select-job-application-statuses`}
                                multiple
                                fullWidth
                                value={selectedStatusIds}
                                onChange={handleSelectChange}
                                input={<OutlinedInput label="Status" />}
                                variant="outlined"
                                sx={{
                                    borderRadius: "0px",
                                    height: "57px",
                                }}
                                renderValue={
                                    (selectedIds) => (
                                        <Typography
                                            sx={{
                                                width: "fit-content",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            Wybrano elementów: {selectedIds.length}
                                        </Typography>
                                    )}
                            >
                                {jobApplicationStatuses.filter(s => s.id !== 0).map((item) => (
                                    <MenuItem key={item.id} value={item.id} sx={{px: 1, py: 0.5}}>
                                        <Checkbox
                                            checked={selectedStatusIds.indexOf(item.id) > -1}
                                            sx={{py: 0.5}}
                                        />
                                        <ListItemText primary={item.namePl}/>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid size={2.5}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            startIcon={<SearchIcon />}
                            onClick={onSearchButtonClick}
                            sx={{
                                height: "57px",
                                borderRadius: "0 50px 50px 0",
                                fontSize: '1.1rem',
                                "& .MuiButton-startIcon > :nth-of-type(1)": { fontSize: "1.5rem", lineHeight: 1 }
                            }}
                        >
                            Szukaj
                        </Button>
                    </Grid>

                </Grid>

                <Stack sx={{ width: "500px", maxWidth: "500px", mt: 1.8 }}>
                    <JobApplicationLocationSelect value={null} availableValues={locationsAvailable} onChange={() => {}} />
                </Stack>

                <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                    <Typography variant="body2">Ma mieć tagi:</Typography>
                    {includedTags.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            variant="filled"
                            onDelete={() => {setIncludedTags(prev => prev.filter(x => x !== item))}}
                        />
                    ))}
                    <Chip
                        icon={<Add />}
                        label="Dodaj tag"
                        variant="outlined"
                        onClick={() => {setIncludeTagSearchDialogOpen(true)}}
                        sx={{ borderStyle: "dashed" }} />
                </Stack>

                <Stack direction="row" spacing={1} sx={{ ml: 0.3, mt: 1.2, alignItems: "center" }}>
                    <Typography variant="body2">Wyklucz tagi:</Typography>
                    {excludedTags.map((item) => (
                        <Chip
                            key={item}
                            label={item}
                            variant="filled"
                            onDelete={() => {setExcludedTags(prev => prev.filter(x => x !== item))}}
                        />
                    ))}
                    <Chip
                        icon={<Add />}
                        label="Dodaj tag"
                        variant="outlined"
                        onClick={() => {setExcludeTagSearchDialogOpen(true)}}
                        sx={{ borderStyle: "dashed" }} />
                </Stack>

            </Paper>

            <ApplicationTagSearchDialog
                title="Wyszukiwanie tagów do uwzględnienia"
                searchBarPlaceholder="Wyszukaj..."
                open={includeTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagSearchDialogSubmit("include", tag)}
                data={mockTags}
                mode="search"
                excludeFromSearch={[...includedTags, ...excludedTags]}
            />

            <ApplicationTagSearchDialog
                title="Wyszukiwanie tagów do wykluczenia"
                searchBarPlaceholder="Wyszukaj..."
                open={excludeTagSearchDialogOpen}
                onClose={handleCloseDialogs}
                onSubmit={(tag: string) => handleTagSearchDialogSubmit("exclude", tag)}
                data={mockTags}
                mode="search"
                excludeFromSearch={[...includedTags, ...excludedTags]}
            />
        </>
    );
}
