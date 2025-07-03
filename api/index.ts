import axios from "axios";
import { getAccessToken } from "@/lib/token";

const authAxiosFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  // timeout: 8000,
});

authAxiosFetch.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `JWT ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { authAxiosFetch };

export const axiosFetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  // timeout: 8000,
});

export const isErr = (error: unknown) => axios.isAxiosError(error);
