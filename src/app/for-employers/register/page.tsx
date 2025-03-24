"use client";

import {useRouter, useSearchParams} from 'next/navigation';
import {
    Alert,
    Avatar,
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {CompanyFormData, companySchema} from '@/lib/schemas/companySchema';
import {ArrowForward, DeleteForever, Info} from "@mui/icons-material";
import ImageUploadArea from "@/app/_ui/ImageUploadArea";
import React from "react";


const steps = ['Podstawowe dane', 'Logo', 'Potwierdzenie', 'Weryfikacja'];


export default function RegisterCompanyPage() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const step = parseInt(searchParams.get('step') || '1', 10) - 1;
    const activeStep = Math.max(0, Math.min(step, steps.length - 1));

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<CompanyFormData>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            name: '',
            nip: '',
            description: '',
        },
    });

    const onSubmit = (data: CompanyFormData) => {
        if (activeStep < steps.length - 1) {
            router.push(`/for-employers/register?step=${activeStep + 2}`);
        } else {
            console.log('Formularz wysłany:', data);
            router.push('/companies/success');
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            router.push(`/for-employers/register?step=${activeStep}`);
        }
    };

    const renderStepHeader = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <Typography variant="h4">
                        {steps[activeStep]}
                    </Typography>
                );
            case 1:
                return (
                    <Typography variant="h4">
                        {steps[activeStep]}
                    </Typography>
                );
            case 2:
                return (
                    <Typography variant="h4">
                        {steps[activeStep]}
                    </Typography>
                );
            case 3:
                return (
                    <Typography variant="h4">
                        Weryfikacja w toku
                    </Typography>
                );
            default:
                return null;
        }
    }

    const renderStepContent = (step: number) => {
        const values = getValues();

        switch (step) {
            case 0:
                return (
                    <Stack gap={2} sx={{ mt: 3.5 }}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Nazwa"
                                    fullWidth
                                    required
                                    error={!!errors.name}
                                    helperText={errors.name?.message}
                                />
                            )}
                        />
                        <Controller
                            name="nip"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Numer NIP"
                                    fullWidth
                                    required
                                    slotProps={{
                                        htmlInput: { maxLength: 10 }
                                    }}
                                    error={!!errors.nip}
                                    helperText={errors.nip?.message}
                                />
                            )}
                        />
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Publiczny opis firmy"
                                    fullWidth
                                    multiline
                                    rows={5}
                                />
                            )}
                        />
                    </Stack>
                );
            case 1:
                return (
                    <Stack sx={{ gap: 2, mt: 2 }}>
                        <Typography>
                            Tu możesz dodać logo firmy, które będzie widoczne na ofertach pracy i w innych miejscach.
                        </Typography>

                        <Alert
                            severity="info"
                            icon={<Info />}
                            sx={{ maxWidth: "500px" }}
                        >
                            <Typography>
                                Maksymalny rozmiar: 3MB. Dozwolone formaty: .jpg, .png.
                            </Typography>
                        </Alert>
                        <Stack direction="row" sx={{ gap: 2 }}>
                            <Paper
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1.3,
                                    width: 270,
                                    height: 250,
                                    border: "2px dashed lightgray",
                                }}
                            >
                                <Avatar variant="rounded" src="/company2.webp" sx={{ width: 128, height: 128, m: 0 }} />
                                <Typography textAlign="center">Obecne zdjęcie</Typography>
                                <Button
                                    size="small"
                                    color="error"
                                    startIcon={<DeleteForever />}
                                    sx={{
                                        padding: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:active': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}
                                >
                                    Usuń
                                </Button>
                            </Paper>
                            <Box sx={{ width: 270, height: 250 }}>
                                <ImageUploadArea onFileUpload={() => {}} />
                            </Box>
                        </Stack>
                    </Stack>
                );
            case 2:
                return (
                    <Stack sx={{ mt: 2 }}>
                        <Alert
                            severity="info"
                            icon={<Info />}
                            sx={{ maxWidth: "650px" }}
                        >
                            <Typography>
                                Po potwierdzeniu rejestracji prosimy przeprowadzić transakcję testową na konto:
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                PL92 2490 0005 0000 4600 1234 5678
                            </Typography>
                            <Typography>
                                z konta powiązanego z rejestrowaną firmą z opisem:
                            </Typography>
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
                );
            case 3:
                return (
                    <Stack sx={{ mt: 2 }}>
                        <Alert
                            severity="info"
                            icon={<Info />}
                            sx={{ maxWidth: "650px" }}
                        >
                            <Typography>
                                Prosimy przeprowadzić transakcję testową na konto:
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                PL92 2490 0005 0000 4600 1234 5678
                            </Typography>
                            <Typography>
                                z konta powiązanego z rejestrowaną firmą z opisem:
                            </Typography>
                            <Typography sx={{ fontWeight: "bold" }}>
                                Rejestracja na stronie znajdzprace.pl jankowalski9226@gmail.com
                            </Typography>
                        </Alert>

                        <Stack gap={1}>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Dane rejestrowanej firmy:
                            </Typography>
                            <Avatar variant="rounded" src="/company2.webp" sx={{ width: 50, height: 50, m: 0 }} />
                            <Typography sx={{ fontSize: "1.05em" }}>Nazwa: {values.name}</Typography>
                            <Typography sx={{ fontSize: "1.05em" }}>NIP: {values.nip}</Typography>
                            {values.description && <Typography sx={{ fontSize: "1.05em" }}>Opis: {values.description}</Typography>}
                        </Stack>
                    </Stack>
                );
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="md">

            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Paper sx={{ width: "100%", my: 5, px: 10, py: 6 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {renderStepHeader(activeStep)}
                    <Box>{renderStepContent(activeStep)}</Box>
                    <Stack>
                        <Stack direction="row" sx={{ justifyContent: "space-between", mt: 5 }}>
                            <Button disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{
                                        padding: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:active': {
                                            backgroundColor: 'transparent',
                                        },
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                        fontSize: "1.02em"
                                    }}
                            >
                                Wstecz
                            </Button>
                            <Button variant="contained"
                                    type="submit"
                                    endIcon={<ArrowForward />}
                                    sx={{ fontSize: "1.02em" }}>
                                {activeStep < steps.length - 1 && activeStep !== steps.length - 2 && 'Dalej'}
                                {activeStep === steps.length - 2 && 'Potwierdź'}
                                {activeStep === steps.length - 1 && 'Przejdź do profilu'}
                            </Button>
                        </Stack>
                    </Stack>
                </form>
            </Paper>

        </Container>
    );
}