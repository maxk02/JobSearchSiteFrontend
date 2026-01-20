import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    Box
} from "@mui/material";
import React from "react";
import {CompanyBalanceTransactionDto} from "@/lib/api/companies/companiesApiDtos";

const formatPolishDateTime = (dateString: string): string => {
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

    const emptyRows =
        page > 1 ? Math.max(0, (page - 1) * rowsPerPage - rows.length) : 0;

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
                            {/* Removed the 'Opis' header */}
                            <TableCell>Data i czas</TableCell>
                            <TableCell>Użytkownik</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Kwota</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row) => (
                            <React.Fragment key={row.id}>
                                {/* ROW 1: Main Data */}
                                <TableRow
                                    hover
                                    sx={{
                                        '& .MuiTableCell-root': {
                                            borderBottom: 'none', // Remove border to merge visually with description
                                            paddingBottom: 0,     // Tighten space between data and description
                                            paddingTop: 2         // Add some space at top
                                        }
                                    }}
                                >
                                    <TableCell>{formatPolishDateTime(row.dateTime)}</TableCell>
                                    <TableCell>{row.userName}</TableCell>
                                    <TableCell>{row.userEmail}</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>{row.amount}</TableCell>
                                </TableRow>

                                {/* ROW 2: Description (Full Width) */}
                                <TableRow
                                    hover
                                    sx={{
                                        '& .MuiTableCell-root': {
                                            paddingTop: 0.5,      // Tight space top
                                            paddingBottom: 2      // Standard space bottom
                                        }
                                    }}
                                >
                                    <TableCell colSpan={4}>
                                        <Typography 
                                            variant="body2" 
                                            color="text.secondary" 
                                            sx={{ 
                                                whiteSpace: 'normal', // Allows text to wrap to multiple lines
                                                wordBreak: 'break-word' // Prevents long words from breaking layout
                                            }}
                                        >
                                            {/* Fallback text if description is empty to keep layout consistent */}
                                            {row.description || <span style={{ opacity: 0.5 }}>Brak opisu</span>}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                        
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 68.9 * emptyRows }}>
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