"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Box, Button, Container, Paper, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CompanyFormData, companySchema } from '@/lib/schemas/companySchema';
import { ArrowForward } from '@mui/icons-material';
import React, { useState } from 'react';
import { addCompany } from '@/lib/api/companies/companiesApi';
import BasicInfoStep from "@/app/for-employers/register/_ui/BasicInfoStep";
import LogoStep from "@/app/for-employers/register/_ui/LogoStep";
import ConfirmationStep from "@/app/for-employers/register/_ui/ConfirmationStep";
import VerificationStep from "@/app/for-employers/register/_ui/VerificationStep";



const steps = ['Podstawowe dane', 'Logo', 'Potwierdzenie', 'Weryfikacja'];

export default function RegisterCompanyPage() {

    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const searchParams = useSearchParams();
    const router = useRouter();
    const step = parseInt(searchParams.get('step') || '1', 10) - 1;
    const activeStep = Math.max(0, Math.min(step, steps.length - 1));

    const methods = useForm<CompanyFormData>({
        resolver: zodResolver(companySchema),
        defaultValues: {
            name: '',
            nip: '',
            description: '',
        },
        mode: 'onChange'
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: CompanyFormData) => {
        if (activeStep < steps.length - 2) {
            router.push(`/for-employers/register?step=${activeStep + 2}`);
        }
        else {
            const formData = new FormData();
            const request = {
                name: data.name,
                description: data.description,
                nip: data.nip
            };

            formData.append("request", JSON.stringify(request));
            if (avatarFile) {
                formData.append("file", avatarFile);
            }

            const result = await addCompany(formData);
            if (result.success) {
                router.push(`/for-employers/register?step=${activeStep + 2}`);
            }
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            router.push(`/for-employers/register?step=${activeStep}`);
        }
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <BasicInfoStep />;
            case 1:
                return <LogoStep setAvatarFile={setAvatarFile} />;
            case 2:
                return <ConfirmationStep />;
            case 3:
                return <VerificationStep />;
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
                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {renderStepContent(activeStep)}
                        <Stack direction="row" sx={{ justifyContent: "space-between", mt: 5 }}>
                            {
                                activeStep < steps.length - 1 &&
                                <>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{
                                            padding: 0,
                                            '&:hover': { backgroundColor: 'transparent' },
                                            '&:active': { backgroundColor: 'transparent' },
                                            '&:focus': { outline: 'none' },
                                            fontSize: "1.02em"
                                        }}
                                    >
                                        Wstecz
                                    </Button>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        endIcon={<ArrowForward />}
                                        sx={{ fontSize: "1.02em" }}
                                    >
                                        {activeStep < steps.length - 2 && 'Dalej'}
                                        {activeStep === steps.length - 2 && 'Potwierdź'}
                                    </Button>
                                </>
                            }
                        </Stack>
                    </form>
                </FormProvider>
            </Paper>
        </Container>
    );
}