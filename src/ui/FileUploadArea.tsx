import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Typography, Button, Paper } from "@mui/material";

interface FileUploadProps {
    onFileUpload: (files: File[]) => void;
}

const FileUploadArea: React.FC<FileUploadProps> = ({ onFileUpload }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        onFileUpload(acceptedFiles);
    }, [onFileUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
        accept: { p: ["image/*,application/pdf"] },
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
                borderRadius: 2,
                backgroundColor: isDragActive ? "#e3f2fd" : "#fafafa",
                cursor: "pointer",
                transition: "background-color 0.3s",
                textAlign: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <input {...getInputProps()} />
            <CloudUploadIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="body1">
                {isDragActive ? "Upuść pliki tutaj..." : "Kliknij lub przeciągnij pliki do dodania"}
            </Typography>
            {!isDragActive && <Button variant="contained" sx={{ mt: 2 }}>Wybierz pliki</Button>}
        </Paper>
    );
};

export default FileUploadArea;
