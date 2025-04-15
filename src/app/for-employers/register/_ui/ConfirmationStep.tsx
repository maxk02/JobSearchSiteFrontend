import { Alert, Avatar, Stack, Typography } from '@mui/material';
import { Info } from '@mui/icons-material';
import { useFormContext } from 'react-hook-form';
import { CompanyFormData } from '@/lib/schemas/companySchema';
import React from "react";

export default function ConfirmationStep() {
    const { getValues } = useFormContext<CompanyFormData>();
    const values = getValues();

    return (
        <>
            <Typography variant="h4">Potwierdzenie</Typography>
            <Stack sx={{ mt: 2 }}>
                <Alert severity="info" icon={<Info />} sx={{ maxWidth: "650px" }}>
                    <Typography>Po potwierdzeniu rejestracji prosimy przeprowadzić transakcję testową na konto:</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                        PL92 2490 0005 0000 4600 1234 5678
                    </Typography>
                    <Typography>z konta powiązanego z rejestrowaną firmą z opisem:</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                        Rejestracja na stronie znajdzprace.pl jankowalski9226@gmail.com
                    </Typography>
                </Alert>

                <Stack gap={1}>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Sprawdź swoje dane:
                    </Typography>
                    <Avatar variant="rounded" src="/company2.webp" sx={{ width: 50, height: 50, m: 0 }} />
                    <Typography sx={{ fontSize: "1.05em" }}>Nazwa: {values.name}</Typography>
                    <Typography sx={{ fontSize: "1.05em" }}>NIP: {values.nip}</Typography>
                    {values.description && <Typography sx={{ fontSize: "1.05em" }}>Opis: {values.description}</Typography>}
                </Stack>
            </Stack>
        </>
    );
}