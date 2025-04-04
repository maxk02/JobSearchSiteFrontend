import axiosClient from "@/lib/api/axiosClient";
import {AxiosError} from "axios";


type ApiResult<T> =
    | { success: true; data: T; status: number }
    | {
        success: false;
        error: {
            message?: string;
            details?: unknown;
        };
        status: number
    };

export default async function fetchData<TRequest = unknown, TResponse = unknown>(
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    data?: TRequest,
    headers?: Record<string, string>
): Promise<ApiResult<TResponse>> {
    try {
        const response = await axiosClient({
            url: endpoint,
            method,
            data: method !== "GET" ? data : undefined,
            params: method === "GET" ? data : undefined,
            headers: headers,
        });

        return { success: true, data: response.data, status: response.status };
    } catch (error) {
        const axiosError = error as AxiosError<{ message: string; code?: number; details?: unknown }>;

        return {
            success: false,
            error: {
                message: axiosError.response?.data?.message,
                details: axiosError.response?.data?.details,
            },
            status: axiosError.response?.status || 500,
        };
    }
}