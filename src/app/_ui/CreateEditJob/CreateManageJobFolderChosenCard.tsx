import {Avatar, Box, Button, ListItem, Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {Folder} from "@mui/icons-material";
import {getItemColor} from "@/lib/functions/listItemColors";


interface CreateManageJobFolderChosenCardProps {
    folderId: number;
    folderName: string;
}

export default function CreateManageJobFolderChosenCard({ folderId, folderName }: CreateManageJobFolderChosenCardProps) {

    return (
        <Paper sx={{ p: 0, flexShrink: 0 }}>
            <Box sx={{
                p: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            >
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            height: 40,
                            width: 40,
                            backgroundColor: getItemColor(folderId),
                        }}
                    >
                        <Folder />
                    </Avatar>
                    <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                sx={{ flex: "none" }}
                    >
                        {folderName}
                    </Typography>
                </Stack>

                <Button variant="text">
                    Zmień
                </Button>
            </Box>
        </Paper>
    );
}