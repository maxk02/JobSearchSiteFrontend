"use client";

import {useRouter, useSearchParams} from 'next/navigation';
import {Button, Container, Paper, Stack, Step, StepLabel, Stepper} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {ArrowForward} from '@mui/icons-material';
import React, {useState} from 'react';
import ConfirmEmailStep from "@/app/register/profile/_ui/ConfirmEmailStep";
import BasicInfoStep from "@/app/register/profile/_ui/BasicInfoStep";
import AvatarStep from "@/app/register/profile/_ui/AvatarStep";
import {addUserProfile} from "@/lib/api/userProfiles/userProfilesApi";
import {AddUserProfileRequest} from "@/lib/api/userProfiles/userProfilesApiInterfaces";
import {ConfirmEmailRequest} from "@/lib/api/account/accountApiInterfaces";
import {confirmEmail} from "@/lib/api/account/accountApi";
import {CreateUserProfileFormData, createUserProfileSchema} from "@/lib/schemas/createUserProfileSchema";


const steps = ['Potwierdzenie email', 'Podstawowe dane', 'Zdjęcie'];

export default function RegisterProfilePage() {

    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const searchParams = useSearchParams();
    const router = useRouter();
    const step = parseInt(searchParams.get('step') || '1', 10) - 1;
    const activeStep = Math.max(0, Math.min(step, steps.length - 1));

    const methods = useForm<CreateUserProfileFormData>({
        resolver: zodResolver(createUserProfileSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: null,
            code: ''
        },
        mode: 'onChange'
    });

    const { handleSubmit, trigger } = methods;

    const onSubmit = async (data: CreateUserProfileFormData) => {
        if (activeStep === 0) {
            const isStep1Valid = await trigger(["code"], { shouldFocus: true });

            if (!isStep1Valid) {
                return;
            }

            const request: ConfirmEmailRequest = {
                code: data.code
            };

            const result = await confirmEmail(request);

            if (result.success) {
                router.push(`/register/profile?step=${activeStep + 2}`);
            }
            else {
                console.log(`Confirm email error ${result.status}`);
            }
        }
        else if (activeStep < steps.length - 1) {
            router.push(`/register/profile?step=${activeStep + 2}`);
        }
        else {
            const request: AddUserProfileRequest = {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
            };

            const result = await addUserProfile(request, avatarFile);
            if (result.success) {
                router.push(`/account/profile`);
            }
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            router.push(`/register/profile?step=${activeStep}`);
        }
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <ConfirmEmailStep />
            case 1:
                return <BasicInfoStep />;
            case 2:
                return <AvatarStep setAvatarFile={setAvatarFile} />;
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
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
                                {activeStep < steps.length - 1 ? 'Dalej' : 'Zarejestruj się'}
                            </Button>
                        </Stack>
                    </form>
                </FormProvider>
            </Paper>
        </Container>
    );
}