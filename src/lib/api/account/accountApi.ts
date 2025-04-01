import api from "@/lib/api/httpClient"
import {
    ChangePasswordRequest,
    ConfirmEmailRequest,
    CreateAccountRequest,
    LogInRequest, ResetPasswordRequest, SendEmailConfirmationLinkRequest, SendPasswordResetLinkRequest
} from "@/lib/api/account/accountApiInterfaces";



export const changePassword = async (req: ChangePasswordRequest) => {
    const response = await api.post("/account/change-password", {params: req});
    return response.data;
};

export const confirmEmail = async (req: ConfirmEmailRequest) => {
    const response = await api.post("/account/confirm-email", {params: req});
    return response.data;
};

export const createAccount = async (req: CreateAccountRequest) => {
    const response = await api.post("/account", req);
    return response.data;
};

export const deleteAccount = async () => {
    const response = await api.delete("/account");
    return response.data;
};

export const extendSession = async () => {
    const response = await api.post("/account/extend-session");
    return response.data;
};

export const getSessions = async () => {
    const response = await api.get("/account/sessions");
    return response.data;
};

export const logIn = async (req: LogInRequest) => {
    const response = await api.post("/account/login", {params: req});
    return response.data;
};

export const logOut = async () => {
    const response = await api.post("/account/logout");
    return response.data;
};

export const resetPassword = async (req: ResetPasswordRequest) => {
    const response = await api.post("/account/reset-password", {params: req});
    return response.data;
};

export const sendEmailConfirmationLink = async (req: SendEmailConfirmationLinkRequest) => {
    const response = await api.post("/account/send-email-confirmation-link", {params: req});
    return response.data;
};

export const sendPasswordResetLink = async (req: SendPasswordResetLinkRequest) => {
    const response = await api.post("/account/send-password-reset-link", {params: req});
    return response.data;
};