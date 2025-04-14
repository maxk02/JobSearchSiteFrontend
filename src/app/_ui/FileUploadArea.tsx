import React, {useCallback} from "react";
import {FileRejection, useDropzone} from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {Button, Paper, Typography} from "@mui/material";

interface FileUploadProps {
    onFilesChange: (acceptedFiles: File[], rejectedFiles: FileRejection[]) => void;
    accept?: Record<string, string[]>; // e.g., { "application/pdf": [".pdf"] }
    maxSize?: number; // in bytes
    maxFiles?: number;
    dragMessage?: string;
    idleMessage?: string;
    buttonText?: string;
    disabled?: boolean;
    sx?: object;
}

export default function FileUploadArea(props: FileUploadProps) {

    const {
        onFilesChange,
        accept,
        maxSize,
        maxFiles,
        dragMessage = "Upuść pliki tutaj...",
        idleMessage = "Kliknij lub przeciągnij pliki do dodania",
        buttonText = "Wybierz pliki",
        disabled = false,
        sx = {},
    } = props;

    const onDrop = useCallback(
        (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
            onFilesChange(acceptedFiles, rejectedFiles);
        },
        [onFilesChange]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: (!!(maxFiles && maxFiles > 1)),
        accept,
        maxSize,
        maxFiles,
        disabled,
    });

    return (
        <Paper
            {...getRootProps()}
            sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "2px dashed #90caf9",
                backgroundColor: isDragActive ? "#e3f2fd" : "#fafafa",
                cursor: disabled ? "not-allowed" : "pointer",
                transition: "background-color 0.3s",
                textAlign: "center",
                width: "100%",
                height: "100%",
                opacity: disabled ? 0.6 : 1,
                ...sx,
            }}
        >
            <input {...getInputProps()} />
            <CloudUploadIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="body1">
                {isDragActive ? dragMessage : idleMessage}
            </Typography>
            {!isDragActive && !disabled && (
                <Button variant="contained" sx={{ mt: 2 }}>
                    {buttonText}
                </Button>
            )}
        </Paper>
    );
};