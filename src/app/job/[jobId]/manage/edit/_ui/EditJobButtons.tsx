import {Button, Stack} from "@mui/material";
import {Preview, Save} from "@mui/icons-material";
import React from "react";

export default function EditJobButtons() {
    return (
        <Stack direction="row" flexWrap="wrap" spacing={2} sx={{ alignSelf: "center" }}>
            {/* <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Preview />}
                sx={{
                    borderRadius: "50px",
                    alignSelf: "center",
                    width: "150px",
                }}
            >
                Podgląd
            </Button> */}
            <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                startIcon={<Save />}
                sx={{
                    borderRadius: "50px",
                    alignSelf: "center",
                    width: "150px",
                }}
            >
                Zapisz
            </Button>
        </Stack>
    );
}