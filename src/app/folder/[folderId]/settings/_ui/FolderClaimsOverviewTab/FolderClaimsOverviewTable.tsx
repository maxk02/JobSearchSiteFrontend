"use client";

import {
    Button, Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from "@mui/material";
import {OpenInNew, Settings} from "@mui/icons-material";
import React from "react";
import {JobFolderClaimOverviewDto} from "@/lib/api/jobFolderClaims/jobFolderClaimsDtos";
import {jobFolderClaims} from "@/lib/seededData/jobFolderClaims";


interface FolderClaimsOverviewTableProps {
    rows: JobFolderClaimOverviewDto[];
    page: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

export default function FolderClaimsOverviewTable(props: FolderClaimsOverviewTableProps) {

    const { rows, page, rowsPerPage, onPageChange, onRowsPerPageChange } = props;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            [...rows]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
        [page, rows, rowsPerPage],
    );

    const handleChangePage = (event: unknown, newPage: number) => {
        onPageChange(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        onRowsPerPageChange(parseInt(event.target.value, 10));
    };

    return (
        <Paper>
            <TableContainer>
                <Table sx={{ tableLayout: "auto" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Użytkownik</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Uprawnienie (id)</TableCell>
                            <TableCell>Źródło</TableCell>
                            <TableCell>Akcje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => (
                            <TableRow
                                key={row.userCompanyClaimId}
                                hover
                                sx={{
                                    height: 68.9,
                                    '& .MuiTableCell-root': {
                                        height: 68.9,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }
                                }}
                            >
                                <TableCell>{`${row.userFirstName} ${row.userLastName}`}</TableCell>
                                <TableCell>{row.userEmail}</TableCell>
                                <TableCell>
                                    { jobFolderClaims.find(c => c.id == row.claimId)?.namePl }
                                </TableCell>
                                <TableCell>
                                    {!row.isInherited && "Ten folder"}
                                    {row.isInherited && !row.inheritedFrom &&
                                        "Odziedziczono"
                                    }
                                    {row.isInherited && row.inheritedFrom &&
                                        `Odziedziczono po ${row.inheritedFrom.sourceFolderName}`
                                    }
                                </TableCell>
                                <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    {row.isInherited && row.inheritedFrom &&
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<Settings />}
                                            endIcon={<OpenInNew />}
                                            component={Link}
                                            href={`/folder/${row.inheritedFrom.sourceFolderId}/settings`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Konfiguruj
                                        </Button>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
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
            />
        </Paper>
    );
}