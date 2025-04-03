import axiosClient from "@/lib/api/axiosClient"
import {
    ChangePasswordRequest,
    ConfirmEmailRequest,
    CreateAccountRequest,
    LogInRequest,
    LogInResponseDto,
    ResetPasswordRequest,
    SendEmailConfirmationLinkRequest,
    SendPasswordResetLinkRequest
} from "@/lib/api/account/accountApiInterfaces";
import fetchData from "@/lib/api/fetchData";


export const changePassword = async (req: ChangePasswordRequest) => {
    const response = await axiosClient.post("/account/change-password", {params: req});
    return response.data;
};

export const confirmEmail = async (req: ConfirmEmailRequest) => {
    const response = await axiosClient.post("/account/confirm-email", {params: req});
    return response.data;
};

export const createAccount = async (req: CreateAccountRequest) => {
    const response = await axiosClient.post("/account", req);
    return response.data;
};

export const deleteAccount = async () => {
    const response = await axiosClient.delete("/account");
    return response.data;
};

export const extendSession = async () => {
    const response = await axiosClient.post("/account/extend-session");
    return response.data;
};

export const getSessions = async () => {
    const response = await axiosClient.get("/account/sessions");
    return response.data;
};

export const logIn = async (req: LogInRequest) => {
    return await fetchData<LogInRequest, LogInResponseDto>("/account/login", req, "POST");
};

export const logOut = async () => {
    const response = await axiosClient.post("/account/logout");
    return response.data;
};

export const resetPassword = async (req: ResetPasswordRequest) => {
    const response = await axiosClient.post("/account/reset-password", {params: req});
    return response.data;
};

export const sendEmailConfirmationLink = async (req: SendEmailConfirmationLinkRequest) => {
    const response = await axiosClient.post("/account/send-email-confirmation-link", {params: req});
    return response.data;
};

export const sendPasswordResetLink = async (req: SendPasswordResetLinkRequest) => {
    const response = await axiosClient.post("/account/send-password-reset-link", {params: req});
    return response.data;
};