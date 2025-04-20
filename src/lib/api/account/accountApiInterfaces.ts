import {AccountDataDto} from "@/lib/api/account/accountDtos";

export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface ConfirmEmailRequest {
    code: string;
}

export interface CreateAccountRequest {
    email: string;
    password: string;
}

export interface ExtendSessionResponse {
    newExpirationTimeUtc: string;
}

export interface LogInRequest {
    email: string;
    password: string;
}

export interface LogInResponseDto {
    tokenId: string;
    accountData: AccountDataDto;
}

export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
}

export interface SendEmailConfirmationLinkRequest {
    email: string;
}

export interface SendPasswordResetLinkRequest {
    email: string;
}