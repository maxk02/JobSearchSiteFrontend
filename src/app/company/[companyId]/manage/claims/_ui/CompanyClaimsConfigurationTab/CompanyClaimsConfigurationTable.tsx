"use client";

import {
    Box,
    Button,
    Checkbox,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {AddModerator, RemoveModerator} from "@mui/icons-material";
import React, {useMemo, useState} from "react";
import {companyClaims} from "@/lib/seededData/companyClaims";
import {updateCompanyClaimIdsForUser} from "@/lib/api/companyClaims/companyClaimsApi";
import BasicInfoDialog from "@/app/_ui/BasicInfoDialog";
import { UpdateCompanyClaimIdsForUserRequest } from "@/lib/api/companyClaims/companyClaimsApiInterfaces";
import ClaimConfigurationErrorInfoDialog
    from "@/app/company/[companyId]/manage/claims/_ui/CompanyClaimsConfigurationTab/ClaimConfigurationErrorInfoDialog";

interface CompanyClaimsConfigurationTableProps {
    companyId: number;
    userId: number;
    activeClaimIds: number[];
}

interface RowData {
    id: number;
    isActive: boolean;
    text: string;
    description: string | null;
}

export default function CompanyClaimsConfigurationTable(props: CompanyClaimsConfigurationTableProps) {

    const { companyId, userId, activeClaimIds } = props;

    const rows = useMemo((): RowData[] =>
            companyClaims
                .map(c => ({ id: c.id,
                    isActive: activeClaimIds.includes(c.id),
                    text: `${c.namePl} (${c.id})`,
                    description: c.commentPl })),
        [activeClaimIds]);

    const [selected, setSelected] = useState<number[]>([]);
    const [infoDialogOpen, setInfoDialogOpen] = useState<boolean>(false);
    const [lackingClaimIds, setLackingClaimIds] = useState<number[]>([]);

    const visibleRows = rows;

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
        let newSelected: number[] = [];

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

    const handleClaimsSwitch = async (claimIdsSwitched: number[], enable: boolean) => {
        const originalSet = new Set(activeClaimIds);
        const appliedSet = new Set(claimIdsSwitched);

        const finalClaimIds = enable ? new Set([...originalSet, ...appliedSet])
            : new Set([...originalSet].filter(x => !appliedSet.has(x)));

        let lackingDependencyIds: number[] = [];

        for (const c of companyClaims.filter(c => finalClaimIds.has(c.id))) {
            if (!c.dependencies.every(depId => finalClaimIds.has(depId))) {
                lackingDependencyIds = [...lackingDependencyIds, ...c.dependencies.filter(dep => !finalClaimIds.has(dep))];
            }
        }

        if (!lackingDependencyIds.length) {
            const request: UpdateCompanyClaimIdsForUserRequest = {
                companyClaimIds: [...finalClaimIds]
            };
            const result = await updateCompanyClaimIdsForUser(companyId, userId, request);
            if (!result.success) {
                console.error(result);
            }
        }
        else {

            setLackingClaimIds(lackingDependencyIds);
            setInfoDialogOpen(true);
        }
    };

    return (
        <>
            <Paper sx={{ width: '1000px', maxWidth: '1000px' }}>
                <TableContainer sx={{ mt: 1.7 }}>
                    <Table sx={{ tableLayout: "auto" }}>
                        <TableHead>
                            <TableRow sx={{ '& .MuiTableCell-root': { padding: '16px 8px' } }}>
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
                                <TableCell>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            startIcon={<AddModerator />}
                                            sx={{ mr: 2 }}
                                            disabled={selected.length === 0}
                                            onClick={() => handleClaimsSwitch(selected, true)}
                                        >
                                            Aktywuj wybrane
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            startIcon={<RemoveModerator />}
                                            sx={{ mr: 2 }}
                                            disabled={selected.length === 0}
                                            onClick={() => handleClaimsSwitch(selected, false)}
                                        >
                                            Wyłącz wybrane
                                        </Button>
                                    </Box>
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
                                            // FIX: Strict table-cell vertical alignment ensures
                                            // buttons stay centered even if the description wraps 5 lines.
                                            '& .MuiTableCell-root': {
                                                padding: '12px 8px',
                                                verticalAlign: 'middle',
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
                                        <TableCell sx={{ width: '400px', maxWidth: '400px' }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                    {row.text}
                                                </Typography>
                                                {row.description && (
                                                    <Typography
                                                        variant="caption"
                                                        color="text.secondary"
                                                        sx={{ mt: 0.5, lineHeight: 1.3 }}
                                                    >
                                                        {row.description}
                                                    </Typography>
                                                )}
                                            </Box>
                                        </TableCell>
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
                                        {/* FIX: Removed 'display: flex' from here */}
                                        <TableCell>
                                            {/* FIX: Added Box wrapper here to handle the flex layout inside the cell */}
                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                                {!row.isActive &&
                                                    <Button
                                                        variant="outlined"
                                                        color="primary"
                                                        startIcon={<AddModerator/>}
                                                        sx={{mr: 2, width: '130px'}}
                                                        onClick={() => handleClaimsSwitch([row.id], true)}
                                                    >
                                                        Aktywuj
                                                    </Button>
                                                }
                                                {row.isActive &&
                                                    <Button
                                                        variant="outlined"
                                                        color="error"
                                                        startIcon={<RemoveModerator/>}
                                                        sx={{mr: 2, width: '130px'}}
                                                        onClick={() => handleClaimsSwitch([row.id], false)}
                                                    >
                                                        Wyłącz
                                                    </Button>
                                                }
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <ClaimConfigurationErrorInfoDialog
                onClose={() => { setInfoDialogOpen(false); setLackingClaimIds([]); }}
                open={infoDialogOpen}
                maxWidth="md"
                lackingClaimIds={lackingClaimIds}
            />
        </>
    );
}