"use client";

import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import React, {useEffect, useState} from "react";
import FolderClaimsOverviewTable
    from "@/app/folder/[folderId]/settings/_ui/FolderClaimsOverviewTab/FolderClaimsOverviewTable";
import {useParams} from "next/navigation";
import {jobFolderClaims} from "@/lib/seededData/jobFolderClaims";
import {Close, Refresh} from "@mui/icons-material";
import {JobFolderClaimOverviewDto} from "@/lib/api/jobFolderClaims/jobFolderClaimsDtos";
import {GetJobFolderClaimsOverviewRequest} from "@/lib/api/jobFolderClaims/jobFolderClaimsApiInterfaces";
import {getJobFolderClaimsOverview} from "@/lib/api/jobFolderClaims/jobFolderClaimsApi";

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


export default function FolderClaimsOverviewTab() {

    const params = useParams();
    const folderId = parseInt(params.folderId as string, 10);

    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [rows, setRows] = useState<JobFolderClaimOverviewDto[]>([]);

    const [searchText, setSearchText] = useState<string>("");
    const [selectedClaimIds, setSelectedClaimIds] = useState<number[]>([]);

    const handleChange = (event: SelectChangeEvent<number[]>) => {
        setSelectedClaimIds(event.target.value as number[]);
    };

    const handleClearInputs = () => {
        setSelectedClaimIds([]);
        setSearchText("");
        setPage(0);
    };

    const [refreshButtonCounter, setRefreshButtonCounter] = useState<number>(0);

    useEffect(() => {

        const fetchData = async () => {
            const request: GetJobFolderClaimsOverviewRequest = {
                jobFolderClaimIds: selectedClaimIds,
                paginationSpec: {
                    pageNumber: page,
                    pageSize: rowsPerPage
                },
                userQuery: searchText
            };

            const result = await getJobFolderClaimsOverview(folderId, request);

            if (result.success) {
                setRows(result.data.jobFolderClaimOverviewDtos);
            }
        };

        fetchData();

    }, [folderId, page, rowsPerPage, searchText, selectedClaimIds, refreshButtonCounter]);
    
    return (
        <Box sx={{ pt: 1.2, pb: 2, px: 2.1 }}>
            <Box display="flex" flexDirection="row" sx={{ alignItems: "center" }} mt={1}>
                <FormLabel>Wyszukiwanie:</FormLabel>
                <TextField
                    label="Imię/nazwisko/email"
                    variant="outlined"
                    sx={{ ml: 1.3, width: 300 }}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <FormControl sx={{ ml: 2.5, width: 300 }}>
                    <InputLabel id="claim-type-select-label">Rodzaj uprawnienia</InputLabel>
                    <Select
                        labelId="claim-type-select-label"
                        id="claim-type-select-label"
                        multiple
                        value={selectedClaimIds}
                        onChange={handleChange}
                        input={<OutlinedInput label="Rodzaj uprawnienia" />}
                        renderValue={(selected) => `Wybrano uprawnień: ${selected.length}`}
                        MenuProps={MenuProps}
                    >
                        {jobFolderClaims.map((item) => (
                            <MenuItem key={item.id} value={item.id} sx={{ pl: 0.2 }}>
                                <Checkbox checked={selectedClaimIds.includes(item.id)} />
                                <ListItemText primary={`${item.namePl} (${item.id})`} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Refresh />}
                    disabled={!searchText && selectedClaimIds.length === 0}
                    onClick={() => setRefreshButtonCounter(prev => prev + 1)}
                    sx={{ ml: 2.5, borderRadius: "50px", width: "125px" }}
                >
                    Odśwież
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    startIcon={<Close />}
                    disabled={!searchText && selectedClaimIds.length === 0}
                    onClick={handleClearInputs}
                    sx={{ ml: 2, borderRadius: "50px", width: "125px" }}
                >
                    Wyczyść
                </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                <FolderClaimsOverviewTable
                    rows={rows}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(newPage: number) => setPage(() => newPage)}
                    onRowsPerPageChange={(newRowsPerPage: number) => setRowsPerPage(newRowsPerPage)}
                />
            </Box>
        </Box>
    );
}