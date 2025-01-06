/**
 * Handles fetch requests to API
 */

import { getAccessToken } from "@/lib/auth";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

interface ErrorResponse {
  error: {
    status_code: number;
    message: string;
    details: { detail: string };
  };
}

interface SuccessResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

type ApiResponse<T> = ErrorResponse | SuccessResponse<T>;

/**
 * Generic fetch function
 * @param url - The URL to fetch
 * @returns A promise that resolves to the API response
 */
export const fetchApi = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(`${endpoint}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
    cache: "no-store",
  });
  const data: ApiResponse<T> = await response.json();
  return data;
};
