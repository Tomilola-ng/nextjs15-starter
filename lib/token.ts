/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function setAccessToken(token: string) {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function setUserData(userData: _user) {
  const cookieStore = await cookies();

  cookieStore.set("userData", JSON.stringify(userData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
}

export async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
}

export async function getUserData() {
  const cookieStore = await cookies();
  const userDataString = cookieStore.get("userData")?.value;

  if (!userDataString) return null;

  try {
    return JSON.parse(userDataString);
  } catch (error) {
    return null;
  }
}

export async function clearTokens() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("userData");
}

export async function removeAccessToken() {
  (await cookies()).set("accessToken", "", { expires: new Date(0) });
  return NextResponse.redirect("/login");
}
