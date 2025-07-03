/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosFetch } from "@/api";
import { setAccessToken, setUserData } from "@/lib/token";
import { redirect } from "next/navigation";

export async function loginServer(email: string, password: string) {
  try {
    const response = await axiosFetch.post("/auth/login/", {
      email,
      password,
    });
    const { access, user } = response.data.data;

    await setAccessToken(access);
    await setUserData(user);

    redirect("/dashboard");
  } catch (error: any) {
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      const errorMessage =
        errorData.error_message?.[0]?.message ??
        "Failed to log in. Please try again.";

      if (errorMessage === "User is not active.") {
        return {
          success: false,
          error: "Your account is not active. Please activate it to continue.",
          redirect: "/activate-account",
        };
      }
      return { success: false, error: errorMessage };
    }

    if (error.message === "NEXT_REDIRECT") {
      throw error;
    }

    return {
      success: false,
      error: "An unexpected error occurred.",
    };
  }
}
