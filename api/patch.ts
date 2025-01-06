/**
 * Handles PATCH requests to API
 */

import { getAccessToken } from "@/lib/auth";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

interface ErrorDetails {
  detail: string;
}

interface ErrorResponse {
  error: {
    status_code: number;
    message: string;
    details: ErrorDetails;
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
 * Generic PATCH function
 * @param url - The URL to patch
 * @param payload - The payload to send
 * @returns A promise that resolves to the API response
 */

export const patchApi = async <T, U>(
  url: string,
  payload: U
): Promise<ApiResponse<T>> => {
  const accessToken = await getAccessToken();

  const response = await fetch(`${endpoint}${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const data: ApiResponse<T> = await response.json();
  return data;
};

interface SamplePayload {
  id: string;
  value: string;
}

interface SampleResponse {
  id: string;
  updatedValue: string;
}

type PatchSampleResponse = ApiResponse<SampleResponse>;

export const patchSample = async (
  payload: SamplePayload
): Promise<PatchSampleResponse> => {
  return patchApi<SampleResponse, SamplePayload>("/sample/", payload);
};
