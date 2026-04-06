import {Stack, TextField, Typography} from '@mui/material';
import {Controller, useFormContext} from "react-hook-form";
import {CreateUserProfileFormData} from "@/lib/schemas/createUserProfileSchema";
import React from "react";


export default function ConfirmEmailStep() {

    const { control, formState: { errors } } = useFormContext<CreateUserProfileFormData>();

    return (
        <>
            <Typography variant="h4">Potwierdzenie email</Typography>
            <Stack sx={{ mt: 2, maxWidth: "600px" }}>
                <Typography>
                    Prosimy o przejście na stronę wysłaną mailowo w celu potwierdzenia email.
                </Typography>

                {/*<Controller*/}
                {/*    name="code"*/}
                {/*    control={control}*/}
                {/*    render={({ field }) => (*/}
                {/*        <TextField*/}
                {/*            {...field}*/}
                {/*            sx={{ mt: 1.5 }}*/}
                {/*            label="Kod potwierdzenia"*/}
                {/*            fullWidth*/}
                {/*            required*/}
                {/*            error={!!errors.code}*/}
                {/*            helperText={errors.code?.message}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*/>*/}
            </Stack>
        </>
    );
}