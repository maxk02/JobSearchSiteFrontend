"use client";

import {
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import React from "react";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";


const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return formatter.format(date);
};

interface ChooseApplicationFilesTableProps {
    files: PersonalFileInfoDto[];
    selectedFileIds: number[];
    setSelectedFileIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ChooseApplicationFilesTable(props: ChooseApplicationFilesTableProps) {

    const { files, selectedFileIds, setSelectedFileIds } = props;

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = files.map((n) => n.id);
            setSelectedFileIds(newSelected);
            return;
        }
        setSelectedFileIds([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selectedFileIds.indexOf(id);
        let newSelected: number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedFileIds, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedFileIds.slice(1));
        } else if (selectedIndex === selectedFileIds.length - 1) {
            newSelected = newSelected.concat(selectedFileIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedFileIds.slice(0, selectedIndex),
                selectedFileIds.slice(selectedIndex + 1),
            );
        }
        setSelectedFileIds(newSelected);
    };

    const customLabelDisplayedRows = ({ from, to, count }: { from: number; to: number; count: number }) => {
        return selectedFileIds.length > 0
            ? `Wybrano elementów: ${selectedFileIds.length}${selectedFileIds.length === files.length ? ' (wszystkie)' : "" } | Przegląd: ${from}-${to} z ${count}`
            : `${from}-${to} z ${count}`;
    };


    return (
        <Paper sx={{ width: '100%', maxWidth: '100%' }}>
            <TableContainer sx={{ mt: 1.7 }}>
                <Table sx={{ tableLayout: "auto" }}>
                    <TableHead>
                        <TableRow sx={{ '& .MuiTableCell-root': { height: 68.9, padding: '0 8px' } }}>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={selectedFileIds.length > 0 && selectedFileIds.length < files.length}
                                    checked={files.length > 0 && selectedFileIds.length === files.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{
                                        'aria-label': 'select all claims',
                                    }}
                                />
                            </TableCell>
                            <TableCell>Nazwa</TableCell>
                            <TableCell>Rozmiar</TableCell>
                            <TableCell>Data dodania</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {files.map((file) => {
                            const isItemSelected = selectedFileIds.includes(file.id);
                            const labelId = `enhanced-table-checkbox-${file.id}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={file.id}
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
                                            checked={selectedFileIds.includes(file.id)}
                                            inputProps={{
                                                'aria-labelledby': labelId,
                                            }}
                                            onClick={(event) => handleClick(event, file.id)}
                                        />
                                    </TableCell>
                                    <TableCell>{file.name}</TableCell>
                                    <TableCell>{(file.size / (1024 * 1024)).toFixed(2)}MB</TableCell>
                                    <TableCell>{formatDate(file.dateTimeUploadedUtc)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[15]}
                component="div"
                count={files.length}
                rowsPerPage={15}
                page={0}
                onPageChange={() => {}}
                onRowsPerPageChange={() => {}}
                labelDisplayedRows={customLabelDisplayedRows}
            />
        </Paper>
    );
}