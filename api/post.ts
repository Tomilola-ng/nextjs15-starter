/**
 * Handles POST requests to API
 */

import { getAccessToken } from "@/lib/auth";

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

interface ErrorResponse {
  error: {
    status_code: number;
    message: string;
  };
}

/**
 * Generic POST function
 * @param url - The URL to post
 * @param payload - The payload to send (JSON or FormData)
 * @returns A promise that resolves to the API response
 */
export const postApi = async <T>(
  url: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: Record<string, any> | FormData,
): Promise<T | ErrorResponse> => {
  const accessToken = await getAccessToken();
  const isFormData = payload instanceof FormData;

  const response = await fetch(`${endpoint}${url}`, {
    method: "POST",
    headers: isFormData
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
    body: isFormData ? payload : JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      `Request failed with status ${response.status}: ${response.statusText}`,
    );
  }

  return response.json();
};
