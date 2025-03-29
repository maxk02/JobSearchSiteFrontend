import api from "@/lib/api/httpClient"


//
export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
}

export const changePassword = async (req: ChangePasswordRequest) => {
    const response = await api.post("/account/change-password", req);
    return response.data;
};


//
export interface ConfirmEmailRequest {
    token: string;
}

export const confirmEmail = async (req: ConfirmEmailRequest) => {
    const response = await api.post("/account/confirm-email", req);
    return response.data;
};


//
export interface CreateAccountRequest {
    email: string;
    password: string;
}

export const createAccount = async (req: CreateAccountRequest) => {
    const response = await api.post("/account", req);
    return response.data;
}


//
export const deleteAccount = async () => {
    const response = await api.delete("/account");
    return response.data;
}


//
export const extendSession = async () => {
    const response = await api.post("/account/extend-session");
    return response.data;
}


//
export const getSessions = async () => {
    const response = await api.get("/account/sessions");
    return response.data;
}


//
export interface LogInRequest {
    email: string;
    password: string;
    device?: string;
    os?: string;
    client?: string;
}

export const logIn = async (req: LogInRequest) => {
    const response = await api.post("/account/login", req);
    return response.data;
}


//
export const logOut = async () => {
    const response = await api.post("/account/logout");
    return response.data;
}


//
export interface ResetPasswordRequest {
    token: string;
    newPassword: string;
}

export const resetPassword = async (req: ResetPasswordRequest) => {
    const response = await api.post("/account/reset-password", req);
    return response.data;
}


//
export interface SendEmailConfirmationLinkRequest {
    email: string;
}

export const sendEmailConfirmationLink = async (req: ResetPasswordRequest) => {
    const response = await api.post("/account/send-email-confirmation-link", req);
    return response.data;
}


//
export interface SendPasswordResetLinkRequest {
    email: string;
}

export const sendPasswordResetLink = async (req: ResetPasswordRequest) => {
    const response = await api.post("/account/send-password-reset-link", req);
    return response.data;
}