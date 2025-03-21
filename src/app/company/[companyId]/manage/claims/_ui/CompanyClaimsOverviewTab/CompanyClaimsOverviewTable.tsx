"use client";

import {
    Button,
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


interface Data {
    id: number;
    personName: string;
    email: string;
    claimName: string;
}

function createData(
    id: number,
    personName: string,
    email: string,
    claimName: string,
): Data {
    return {
        id,
        personName,
        email,
        claimName,
    };
}

const rows: Data[] = [
    createData(1, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(2, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(3, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(4, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(5, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(6, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(7, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(8, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(9, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(10, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(11, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
    createData(12, "Jan Kowalski", "jankowalski9226@gmail.com", "Pełny dostęp (1)"),
];


export default function CompanyClaimsOverviewTable() {
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



    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => (
                            <TableRow
                                key={row.id}
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
                                <TableCell>{row.personName}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.claimName}</TableCell>
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
                rowsPerPageOptions={[10, 25]}
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