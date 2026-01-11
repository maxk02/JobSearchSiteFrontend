import {Button, Stack} from "@mui/material";
import {Done, Preview} from "@mui/icons-material";
import React from "react";

export default function CreateJobButtons() {

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
                startIcon={<Done />}
                sx={{
                    borderRadius: "50px",
                    alignSelf: "center",
                    width: "150px",
                }}
            >
                Utwórz
            </Button>
        </Stack>
    );
}