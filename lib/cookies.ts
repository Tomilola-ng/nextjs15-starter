"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function setCookie(
  key: string,
  value: string,
  options?: Partial<ResponseCookie>,
) {
  (await cookies()).set(key, value, options);
}

export async function getCookie(key: string) {
  const allCookies = await (await cookies()).get(key);
  return allCookies?.value;
}

export async function clearCookie(key: string) {
  (await cookies()).set(key, "", {
    expires: new Date(0),
    httpOnly: true,
  });
}
