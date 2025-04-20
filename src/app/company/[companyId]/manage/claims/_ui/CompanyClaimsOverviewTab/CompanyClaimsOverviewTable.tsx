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
import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsDtos";
import {companyClaims} from "@/lib/seededData/companyClaims";



interface CompanyClaimsOverviewTableProps {
    rows: CompanyClaimOverviewDto[];
    page: number;
    rowsPerPage: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (rowsPerPage: number) => void;
}

export default function CompanyClaimsOverviewTable(props: CompanyClaimsOverviewTableProps) {

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
                            <TableCell></TableCell>
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
                                    { companyClaims.find(c => c.id == row.claimId)?.namePl }
                                </TableCell>
                                <TableCell sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Button
                                        variant="text"
                                        color="primary"
                                        endIcon={<ArrowForward />}
                                    >
                                        Konfiguruj użytkownika
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
                                <TableCell colSpan={4} />
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