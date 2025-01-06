/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import { getAccessToken } from "@/lib/auth";

// Generic API response interface
interface ApiResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

// Custom error class
class AuthError extends Error {
  constructor(
    message: string,
    public status: boolean = false,
    public statusCode?: number,
  ) {
    super(message);
    this.name = "AuthError";
  }
}

// API client setup
const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_ENDPOINT,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});
const authApiClient = (token: string) =>
  axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_ENDPOINT,
    timeout: 2000,
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  });

// Error handler
const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiResponse<any>>;
    throw new AuthError(
      axiosError.response?.data?.message || axiosError.message,
      false,
      axiosError.response?.status,
    );
  }
  throw new AuthError("An unexpected error occurred", false);
};

// Auth functions
export const login = async (
  payload: Partial<_user>,
): Promise<ApiResponse<{ access_token: string; user: _user }>> => {
  try {
    const response = await apiClient.post<
      ApiResponse<{ access_token: string; user: _user }>
    >("/user/login", payload);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const register = async (
  payload: Partial<_user>,
): Promise<ApiResponse<_user>> => {
  try {
    const response = await apiClient.post<ApiResponse<_user>>("/user", payload);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const currentUser = async (): Promise<_user> => {
  try {
    const response = await authApiClient(await getAccessToken()).get<
      ApiResponse<_user>
    >("/user/logged-in");
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
