import {AccountDataDto} from "@/lib/api/account/accountDtos";

export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export interface ConfirmEmailRequest {
    token: string;
}

export interface CreateAccountRequest {
    email: string;
    password: string;
}

export interface CreateAccountResponse {
    id: number;
}

export interface LogInRequest {
    email: string;
    password: string;
}

export interface LogInResponse {
    tokenId: string;
    accountData: AccountDataDto;
}

export interface ResetForgottenPasswordRequest {
    token: string;
    newPassword: string;
}

export interface SendPasswordResetLinkRequest {
    email: string;
}