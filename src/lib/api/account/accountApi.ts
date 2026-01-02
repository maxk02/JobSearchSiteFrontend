import {
    ChangePasswordRequest,
    ConfirmEmailRequest,
    CreateAccountRequest,
    CreateAccountResponse,
    GetAccountDataResponse,
    LogInRequest,
    LogInResponse,
    ResetForgottenPasswordRequest,
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
    return await fetchData<CreateAccountRequest, CreateAccountResponse>("/account", "POST", req);
};

export const deleteAccount = async () => {
    return await fetchData<unknown>("/account", "DELETE");
};

export const getAccountData = async () => {
    return await fetchData<unknown, GetAccountDataResponse>("/account", "GET");
};

export const logIn = async (req: LogInRequest) => {
    return await fetchData<LogInRequest, LogInResponse>("/account/login", "POST", req);
};

export const logOut = async () => {
    return await fetchData<unknown>("/account/logout", "POST");
};

export const resetForgottenPassword = async (req: ResetForgottenPasswordRequest) => {
    return await fetchData<ResetForgottenPasswordRequest>("/account/reset-forgotten-password", "POST", req);
};

export const resendEmailConfirmationLink = async () => {
    return await fetchData<unknown>("/account/resend-email-confirmation-link", "POST");
};

export const sendPasswordResetLink = async (req: SendPasswordResetLinkRequest) => {
    return await fetchData<SendPasswordResetLinkRequest>("/account/send-password-reset-link", "POST", req);
};