import {Avatar, Box, Button, Paper, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Folder} from "@mui/icons-material";
import {getItemColor} from "@/lib/functions/listItemColors";
import {StoreFolder, useCreateEditJobStateStore} from "@/lib/stores/createEditJobStore";
import ChooseFolderDialog from "@/app/_ui/ChooseFolderDialog";


interface CreateManageJobFolderChosenCardProps {
    companyId: number;
}

export default function CreateManageJobFolderChosenCard({ companyId }: CreateManageJobFolderChosenCardProps) {

    const storeData = useCreateEditJobStateStore();

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [folderChosen, setFolderChosen] = useState<StoreFolder | undefined>(storeData.folder);

    useEffect(() => {
        if (!folderChosen) {
            setIsDialogOpen(true);
        }
    }, [folderChosen]);

    const handleChooseFolderDialogSubmit = (id: number, name: string) => {
        setFolderChosen({id: id, name: name});
        // setValue("jobFolderId", id);
        setIsDialogOpen(false);
    };

    return (
        <>
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
                                backgroundColor: getItemColor(folderChosen?.id ?? 0),
                            }}
                        >
                            <Folder />
                        </Avatar>
                        <Typography variant="body1" fontWeight={600} gutterBottom marginBottom={0}
                                    sx={{ flex: "none" }}
                        >
                            {folderChosen?.name ?? "Nie wybrano folderu"}
                        </Typography>
                    </Stack>

                    <Button variant="text" onClick={() => setIsDialogOpen(true)}>
                        Zmień
                    </Button>
                </Box>
            </Paper>
            <ChooseFolderDialog
                title="Wybierz folder by rozpocząć"
                open={isDialogOpen}
                companyId={companyId}
                jobFolderClaimReqs={[4]}
                onClose={() => setIsDialogOpen(false)}
                onSubmit={(id: number, name: string) => {handleChooseFolderDialogSubmit(id, name)}}
            />
        </>
    );
}