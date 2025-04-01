import {UserSessionDto} from "@/lib/api/account/accountApiDtos";

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

export interface ExtendSessionResponse {
    newExpirationTimeUtc: string;
}

export interface GetUserSessionsResponse {
    userSessions: UserSessionDto[];
}

export interface LogInRequest {
    email: string;
    password: string;
    device: string | null;
    os: string | null;
    client: string | null;
}

export interface LogInResponse {
    token: string;
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