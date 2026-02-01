import axiosClient from "@/lib/api/axiosClient";
import { AxiosError } from "axios";

type ApiResult<T> =
    | { success: true; data: NonNullable<T>; status: number }
    | {
    success: false;
    error: {
        message?: string;
        details?: unknown;
    };
    status: number;
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
            paramsSerializer: {
                serialize: (params) => {
                    const searchParams = new URLSearchParams();
                    
                    for (const key in params) {
                        const value = params[key];
                        
                        if (value === null || value === undefined) continue;

                        if (Array.isArray(value)) {
                            // Join arrays with commas: categoryIds=1,2
                            if (value.length > 0) {
                                searchParams.append(key, value.join(','));
                            }
                        } else {
                            searchParams.append(key, String(value));
                        }
                    }
                    return searchParams.toString();
                }
            }
        });

        // Check if status code is in the 2xx range
        if (response.status >= 200 && response.status < 300) {
            // Ensure data exists
            if (method === "GET" && response.data == null) {
                return {
                    success: false,
                    error: {
                        message: "No data returned from the server",
                    },
                    status: response.status,
                };
            }
            return { success: true, data: response.data, status: response.status };
        } else {
            // Handle non-2xx status codes as errors
            return {
                success: false,
                error: {
                    message: response.data?.message || "Request failed with unexpected status code",
                    details: response.data?.details,
                },
                status: response.status,
            };
        }
    } catch (error) {
        const axiosError = error as AxiosError<{ message: string; code?: number; details?: unknown }>;

        return {
            success: false,
            error: {
                message: axiosError.response?.data?.message || axiosError.message || "An unexpected error occurred",
                details: axiosError.response?.data?.details,
            },
            status: axiosError.response?.status || 500,
        };
    }
}