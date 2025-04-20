"use client";

import {
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import {AddModerator, RemoveModerator} from "@mui/icons-material";
import React, {useMemo} from "react";
import {companyClaims} from "@/lib/seededData/companyClaims";


interface CompanyClaimsConfigurationTableProps {
    activeClaimIds: number[];
    page: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

interface RowData {
    id: number;
    isActive: boolean;
    text: string;
}

export default function UserFolderClaimsConfigurationTable(props: CompanyClaimsConfigurationTableProps) {

    const { activeClaimIds, page, rowsPerPage, onPageChange, onRowsPerPageChange } = props;

    const rows = useMemo((): RowData[] =>
        companyClaims
            .map(c => ({ id: c.id,
                isActive: activeClaimIds.includes(c.id),
                text: `${c.namePl} (${c.id})` })),
        [activeClaimIds]);

    const [selected, setSelected] = React.useState<readonly number[]>([]);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = useMemo(
        () =>
            [...rows]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rows, rowsPerPage],
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
        onPageChange(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        onRowsPerPageChange(parseInt(event.target.value, 10));
    };

    const customLabelDisplayedRows = ({ from, to, count }: { from: number; to: number; count: number }) => {
        return selected.length > 0
            ? `Wybrano elementów: ${selected.length}${selected.length === rows.length && ' (wszystkie)'} | Przegląd: ${from}-${to} z ${count}`
            : `${from}-${to} z ${count}`;
    };


    return (
        <Paper sx={{ width: '900px', maxWidth: '900px' }}>
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
                                        'aria-label': 'select all claims',
                                    }}
                                />
                            </TableCell>
                            <TableCell>Uprawnienie (id)</TableCell>
                            <TableCell>Status</TableCell>
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
                        {visibleRows.map((row) => {
                            const isItemSelected = selected.includes(row.id);
                            const labelId = `enhanced-table-checkbox-${row.id}`;

                            return (
                                <TableRow
                                    hover
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
                                    <TableCell>{row.text}</TableCell>
                                    <TableCell>
                                        {row.isActive ?
                                            <Typography variant="body2" color="success" sx={{ fontWeight: "500" }}>
                                                Aktywne
                                            </Typography>
                                            : <Typography variant="body2" color="error" sx={{ fontWeight: "500" }}>
                                                Nieaktywne
                                            </Typography>
                                        }
                                    </TableCell>
                                    <TableCell sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        {!row.isActive &&
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                startIcon={<AddModerator/>}
                                                sx={{mr: 2}}
                                            >
                                                Aktywuj
                                            </Button>
                                        }
                                        {row.isActive &&
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                startIcon={<RemoveModerator/>}
                                                sx={{mr: 2}}
                                            >
                                                Wyłącz
                                            </Button>
                                        }
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
                rowsPerPageOptions={[10]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelDisplayedRows={customLabelDisplayedRows}
            />
        </Paper>
    );
}