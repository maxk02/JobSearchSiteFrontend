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
import {ArrowForward} from "@mui/icons-material";
import React from "react";
import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsApiDtos";
import {companyClaims} from "@/lib/seededData/companyClaims";
import {CompanyBalanceTransactionDto} from "@/lib/api/companies/companiesApiDtos";



interface CompanyBalanceTransactionTableProps {
    rows: CompanyBalanceTransactionDto[];
    page: number;
    rowsPerPage: number;
    totalCount: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

export default function CompanyBalanceTransactionTable(props: CompanyBalanceTransactionTableProps) {

    const { rows, page, rowsPerPage, totalCount, onPageChange, onRowsPerPageChange } = props;

    // const emptyRows =
    //     page > 1 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const emptyRows =
        page > 1 ? Math.max(0, (page - 1) * rowsPerPage - rows.length) : 0;

    // const visibleRows = React.useMemo(
    //     () =>
    //         [...rows]
    //             .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage),
    //     [page, rows, rowsPerPage],
    // );

    const visibleRows = rows;
    
    const handleChangePage = (event: unknown, newPage: number) => {
        onPageChange(newPage + 1);
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
                            <TableCell>Data i czas</TableCell>
                            <TableCell>Użytkownik</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Kwota</TableCell>
                            <TableCell>Opis</TableCell>
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
                                <TableCell>{`data do formatowania`}</TableCell>
                                <TableCell>{row.userName}</TableCell>
                                <TableCell>{row.userEmail}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: emptyRows * 68.9,
                                }}
                            >
                                <TableCell colSpan={4} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={totalCount}
                rowsPerPage={rowsPerPage}
                page={page - 1}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}