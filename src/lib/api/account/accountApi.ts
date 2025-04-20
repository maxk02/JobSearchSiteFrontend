import {
    ChangePasswordRequest,
    ConfirmEmailRequest,
    CreateAccountRequest,
    ExtendSessionResponse,
    LogInRequest,
    LogInResponseDto,
    ResetPasswordRequest,
    SendEmailConfirmationLinkRequest,
    SendPasswordResetLinkRequest
} from "@/lib/api/account/accountApiInterfaces";
import fetchData from "@/lib/api/fetchData";


export const changePassword = async (req: ChangePasswordRequest) => {
    return await fetchData<ChangePasswordRequest>("/account/change-password", "POST", req);
};

export const confirmEmail = async (req: ConfirmEmailRequest) => {
    return await fetchData<ConfirmEmailRequest>("/account/confirm-email", "POST", req);
};

export const createAccount = async (req: CreateAccountRequest) => {
    return await fetchData<CreateAccountRequest>("/account", "POST", req);
};

export const deleteAccount = async () => {
    return await fetchData<unknown>("/account", "DELETE");
};

export const extendSession = async () => {
    return await fetchData<unknown, ExtendSessionResponse>("/account/extend-session", "POST");
};

export const terminateSession = async (token: string) => {
    return await fetchData<unknown>(`/account/sessions/${token}`, "DELETE");
};

export const logIn = async (req: LogInRequest) => {
    return await fetchData<LogInRequest, LogInResponseDto>("/account/login", "POST", req);
};

export const logOut = async () => {
    return await fetchData<unknown>("/account/logout", "POST");
};

export const resetPassword = async (req: ResetPasswordRequest) => {
    return await fetchData<ResetPasswordRequest>("/account/reset-password", "POST", req);
};

export const sendEmailConfirmationLink = async (req: SendEmailConfirmationLinkRequest) => {
    return await fetchData<SendEmailConfirmationLinkRequest>("/account/send-email-confirmation-link", "POST", req);
};

export const sendPasswordResetLink = async (req: SendPasswordResetLinkRequest) => {
    return await fetchData<SendPasswordResetLinkRequest>("/account/send-password-reset-link", "POST", req);
};