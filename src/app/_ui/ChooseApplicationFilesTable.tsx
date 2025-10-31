"use client";

import {Box, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, {useState} from "react";
import {PersonalFileInfoDto} from "@/lib/api/personalFiles/personalFIlesApiDtos";
import FileUploadArea from "@/app/_ui/FileUploadArea";
import Grid from "@mui/material/Grid2";
import {FileRejection} from "react-dropzone";
import {uploadFile} from "@/lib/api/personalFiles/personalFilesApi";


const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('pl-PL', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return formatter.format(date);
};

interface ChooseApplicationFilesTableProps {
    files: PersonalFileInfoDto[];
    setFiles: React.Dispatch<React.SetStateAction<PersonalFileInfoDto[]>>;
    selectedFileIds: number[];
    setSelectedFileIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ChooseApplicationFilesTable(props: ChooseApplicationFilesTableProps) {

    const { files, setFiles, selectedFileIds, setSelectedFileIds } = props;

    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

    const handleFilesChange = async (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        setErrorMessage(null);

        if (rejectedFiles.length > 0) {
            const errorMessages = rejectedFiles.map((file: FileRejection) => {
                const reasons = file.errors.map((e) => {
                    if (e.code === "file-too-large") {
                        return `Nie można dodać pliku \"${file.file.name}\": plik jest za duży (max 10MB).`;
                    }
                    if (e.code === "file-invalid-type") {
                        return `Nie można dodać pliku \"${file.file.name}\": niedozwolony format (tylko PDF).`;
                    }
                    if (e.code === "too-many-files") {
                        return `Nie można dodać pliku \"${file.file.name}\": nrzekroczono limit plików (max 15).`;
                    }
                    return `${file.file.name}: ${e.message}`;
                });
                return reasons.join(", ");
            });
            setErrorMessage(errorMessages.join("; "));
            return;
        }

        for (const file of acceptedFiles) {
            const formData = new FormData();
            formData.append("file", file);

            const response = await uploadFile(formData);

            if (response.success) {

                const id = response.data.id;
                // const dateTimeUploadedUtc = response.data.dateTimeUploadedUtc;
                // const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
                // const extension = file.name.substring(file.name.lastIndexOf('.') + 1);
                //
                // const newFile: PersonalFileInfoDto = { id: id, name: nameWithoutExt, extension: extension,
                //     size: file.size, dateTimeUploadedUtc: dateTimeUploadedUtc };
                //
                // setFiles((prevUploadedFiles) =>
                //     [...prevUploadedFiles, newFile]); todo
            }
            else {
                console.log(`Error uploading file: ${file.name} (${response.status})`);
            }
        }
    };

    return (
        <Grid container spacing={2} sx={{ flex: "1 1 auto", width: '100%' }}>
            <Grid size={8.5} sx={{ height: '100%' }}>
                <TableContainer component={Paper} sx={{ mt: 1.7, height: '100%' }}>
                    <Table size="small" sx={{ tableLayout: "auto" }}>
                        <TableHead>
                            <TableRow>
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
                                        <TableCell>{file.name}.{file.extension}</TableCell>
                                        <TableCell>{(file.size / (1024 * 1024)).toFixed(2)}MB</TableCell>
                                        <TableCell>{formatDate(file.dateTimeUploadedUtc)}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid size={3.5} sx={{ height: '100%' }}>
                <Box sx={{ height: '100%', mt: 1.7 }}>
                    <FileUploadArea
                        onFilesChange={handleFilesChange}
                        accept={{ "application/pdf": [".pdf"] }}
                        maxSize={10 * 1024 * 1024}
                        maxFiles={10}
                        dragMessage="Upuść pliki tutaj..."
                    />
                </Box>
            </Grid>
        </Grid>
    );
}