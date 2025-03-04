"use client";

import {
    Avatar,
    Box,
    Breadcrumbs,
    Button,
    Card,
    CardContent, Checkbox, FormControl, FormLabel, InputLabel,
    Link, ListItemText, MenuItem, OutlinedInput, Paper, Select, SelectChangeEvent, Stack,
    Tab, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import tabA11yProps from "@/lib/tabA11yProps";
import CustomTabPanel from "@/ui/CustomTabPanel";
import {AddModerator, OpenInNew, Refresh, RemoveModerator, Settings} from "@mui/icons-material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    "Pełny dostęp (1)",
    "Pełny dostęp (2)",
    "Pełny dostęp (3)",
    "Pełny dostęp (4)",
    "Pełny dostęp (5)",
    "Pełny dostęp (6)",
];

interface Data {
    id: number;
    name: string;
    status: string;
    source: string;
}

function createData(
    id: number,
    name: string,
    status: string,
    source: string,
): Data {
    return {
        id,
        name,
        status,
        source,
    };
}

const rows: Data[] = [
    createData(1, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(2, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(3, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(4, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(5, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(6, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(7, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(8, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(9, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(10, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(11, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
    createData(12, "Pełny dostęp (1)", "Aktywne", "Ten folder"),
];

export default function ManageCompanyJobsPage() {
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };



    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rowsPerPage],
    );

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/public">
                    Udostępnione foldery
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/public"
                >
                    Some parent folder 1
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Some folder 1</Typography>
            </Breadcrumbs>

            <Typography variant="h5" fontWeight={600} color="primary" mt={1}>Some folder 1</Typography>

            <Typography variant="body1" mt={1}>Opis folderu</Typography>

            <Box display="flex" flexDirection="column" gap={3} mt={2}>
                <Card>
                    <CardContent sx={{ px: 2.5, pt: 0.5, '&:last-child': { pb: 0 } }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleTabChange}>
                                <Tab label="Ogólne" {...tabA11yProps(0)} />
                                <Tab label="Przegląd uprawnień" {...tabA11yProps(1)} />
                                <Tab label="Konfigurowanie uprawnień użytkownika" {...tabA11yProps(2)} />
                            </Tabs>
                        </Box>

                        <CustomTabPanel value={value} index={0}>
                            <Box sx={{ pt: 1.5, pb: 2.5 }}>
                                <Typography variant="h6" fontWeight={600} color="primary">Edycja informacji</Typography>
                                <Box display="flex" flexDirection="column">
                                    <TextField required label="Nazwa" variant="outlined" sx={{ mt: 1.5, width: 400 }} />
                                    <TextField multiline rows={4} label="Opis" variant="outlined" sx={{ mt: 2, width: 400 }} />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        // component={Link}
                                        sx={{ borderRadius: "50px", width: "125px", mt: 2 }}
                                    >
                                        Zmień
                                    </Button>
                                </Box>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Box sx={{ pt: 1.5, pb: 2.5 }}>
                                {/*<Typography variant="h6" fontWeight={600} color="primary">Lista uprawnień</Typography>*/}
                                {/*<Stack direction="row" spacing={1} mt={0.6}>*/}
                                {/*    {tagOptions.map((tag) => (*/}
                                {/*        <Chip*/}
                                {/*            sx={{*/}
                                {/*                fontSize: "0.85rem",*/}
                                {/*                height: "36px",*/}
                                {/*                borderRadius: "18px"*/}
                                {/*            }}*/}
                                {/*            key={tag}*/}
                                {/*            label={tag}*/}
                                {/*            clickable*/}
                                {/*            color={selectedTag === tag ? "primary" : "default"}*/}
                                {/*            onClick={() => setSelectedTag(tag)}*/}
                                {/*        />*/}
                                {/*    ))}*/}
                                {/*</Stack>*/}
                                <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                                    <FormLabel>Wyszukiwanie:</FormLabel>
                                    <TextField label="Imię/nazwisko/email" variant="outlined" sx={{ ml: 1.3, width: 300 }} />
                                    <FormControl sx={{ ml: 2.5, width: 300 }}>
                                        <InputLabel id="demo-multiple-checkbox-label">Rodzaj uprawnienia</InputLabel>
                                        <Select
                                            labelId="demo-multiple-checkbox-label"
                                            id="demo-multiple-checkbox"
                                            multiple
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput label="Rodzaj uprawnienia" />}
                                            // renderValue={(selected) => selected.join(', ')}
                                            renderValue={(selected) => `Wybrano ${selected.length} uprawnień`}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name} sx={{ pl: 0.2 }}>
                                                    <Checkbox checked={personName.includes(name)} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        // component={Link}
                                        sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                                    >
                                        Odśwież
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="large"
                                        // component={Link}
                                        sx={{ ml: 2, borderRadius: "50px", width: "125px" }}
                                    >
                                        Wyczyść
                                    </Button>
                                </Box>
                                <TableContainer component={Paper} sx={{ mt: 2.5 }}>
                                    <Table sx={{ tableLayout: "auto" }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Użytkownik</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Uprawnienie (id)</TableCell>
                                                <TableCell>Źródło</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Jan Kowalski</TableCell>
                                                <TableCell>jankowalski9226@gmail.com</TableCell>
                                                <TableCell>Pełny dostęp (1)</TableCell>
                                                <TableCell>Odziedziczono po Some folder 2</TableCell>
                                                <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        startIcon={<Settings />}
                                                        endIcon={<OpenInNew />}
                                                    >
                                                        Konfiguruj uprawnienia
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Box sx={{ pt: 1.5, pb: 2.5 }}>
                                <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                                    <FormLabel>Wybierz użytkownika:</FormLabel>
                                    <TextField label="Imię/nazwisko/email" variant="outlined" sx={{ ml: 1.3, width: 400 }} />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        startIcon={<Refresh />}
                                        // component={Link}
                                        sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                                    >
                                        Odśwież
                                    </Button>
                                </Box>

                                <Box sx={{
                                    p: 2,
                                    mt: 2.5,
                                    mb: 0.5,
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    border: "2px dashed gray",
                                    borderRadius: 2,
                                    backgroundColor: "#fafafa",
                                    transition: "background-color 0.3s",
                                    width: "fit-content"
                                }}
                                >
                                    <Avatar variant="circular" src="/avatar2.webp" sx={{ height: 50, width: 50 }} />

                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        mx: 1.5
                                    }}
                                    >
                                        <Typography variant="body1" fontWeight={600} gutterBottom m={0}
                                                    sx={{ flex: "none" }}
                                        >
                                            Jan Kowalski
                                        </Typography>
                                        <Typography variant="body1" gutterBottom m={0}
                                                    sx={{ flex: "none" }}
                                        >
                                            jankowalski9226@gmail.com
                                        </Typography>
                                    </Box>

                                </Box>

                                <Paper sx={{ width: '100%', mt: 2.5 }}>
                                    <TableContainer sx={{ mt: 1.7 }}>
                                        <Table sx={{ tableLayout: "auto" }}>
                                            <TableHead>
                                                <TableRow sx={{ '& .MuiTableCell-root': { height: 68.9, padding: '0 8px' } }}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                            indeterminate={selected.length > 0 && selected.length < rows.length}
                                                            checked={rows.length > 0 && selected.length === rows.length}
                                                            onChange={handleSelectAllClick}
                                                            inputProps={{
                                                                'aria-label': 'select all desserts',
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell>Uprawnienie (id)</TableCell>
                                                    <TableCell>Status</TableCell>
                                                    <TableCell>Źródło</TableCell>
                                                    <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        <Button
                                                            variant="outlined"
                                                            color="primary"
                                                            startIcon={<AddModerator />}
                                                            sx={{ mr: 2 }}
                                                            disabled={selected.length === 0}
                                                        >
                                                            Aktywuj wybrane
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            color="error"
                                                            startIcon={<RemoveModerator />}
                                                            sx={{ mr: 2 }}
                                                            disabled={selected.length === 0}
                                                        >
                                                            Wyłącz wybrane
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {visibleRows.map((row, index) => {
                                                    const isItemSelected = selected.includes(row.id);
                                                    const labelId = `enhanced-table-checkbox-${index}`;

                                                    return (
                                                        <TableRow
                                                            hover
                                                            // onClick={(event) => handleClick(event, row.id)}
                                                            role="checkbox"
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            key={row.id}
                                                            selected={isItemSelected}
                                                            sx={{
                                                                height: 68.9,
                                                                '& .MuiTableCell-root': {
                                                                    height: 68.9,
                                                                    padding: '0 8px',
                                                                    overflow: 'hidden',
                                                                    textOverflow: 'ellipsis',
                                                                    whiteSpace: 'nowrap'
                                                                }
                                                            }}
                                                        >
                                                            <TableCell padding="checkbox">
                                                                <Checkbox
                                                                    color="primary"
                                                                    checked={selected.includes(row.id)}
                                                                    inputProps={{
                                                                        'aria-labelledby': labelId,
                                                                    }}
                                                                    onClick={(event) => handleClick(event, row.id)}
                                                                />
                                                            </TableCell>
                                                            <TableCell>{row.name}</TableCell>
                                                            <TableCell>
                                                                <Typography variant="body2" color="success">
                                                                    {row.status}
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>{row.source}</TableCell>
                                                            <TableCell sx={{
                                                                display: 'flex',
                                                                flexDirection: 'row',
                                                                alignItems: 'center'
                                                            }}>
                                                                <Button
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    startIcon={<AddModerator/>}
                                                                    sx={{mr: 2}}
                                                                >
                                                                    Aktywuj
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    color="error"
                                                                    startIcon={<RemoveModerator/>}
                                                                    sx={{mr: 2}}
                                                                >
                                                                    Wyłącz
                                                                </Button>
                                                                <Button
                                                                    variant="outlined"
                                                                    color="primary"
                                                                    startIcon={<Settings/>}
                                                                    endIcon={<OpenInNew/>}
                                                                >
                                                                    Przejdź do źródła
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    );
                                                })}
                                                {emptyRows > 0 && (
                                                    <TableRow
                                                        style={{
                                                            height: emptyRows * 68.9,
                                                        }}
                                                    >
                                                        <TableCell colSpan={5} />
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </Paper>
                            </Box>
                        </CustomTabPanel>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}
