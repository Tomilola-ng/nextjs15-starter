/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encodeToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

export async function decodeToken(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function setUser(
  user: Partial<_user>,
  accessTokenFromLogin: string = "",
) {
  const expires = new Date(Date.now() + 86400 * 1000);
  const userSession = await encodeToken({ user, expires });

  (await cookies()).set("userSession", userSession, {
    expires,
    httpOnly: true,
  });
  if (accessTokenFromLogin) {
    await setAccessToken(accessTokenFromLogin);
  }
}

export async function setAccessToken(accessTokenFromLogin: string) {
  const expires = new Date(Date.now() + 86400 * 1000);
  const accessToken = await encodeToken({ accessTokenFromLogin, expires });

  (await cookies()).set("accessToken", accessToken, {
    expires,
    httpOnly: true,
  });
  return accessToken;
}

export async function removeUser() {
  (await cookies()).set("userSession", "", { expires: new Date(0) });
  (await cookies()).set("accessToken", "", { expires: new Date(0) });
  return NextResponse.redirect("/login");
}

export async function getUser() {
  const userSession = (await cookies()).get("userSession")?.value;
  if (!userSession) return null;

  try {
    const data: { user: _user; expires: string } = await decodeToken(userSession);
    if (new Date(data.expires) < new Date()) {
      return await removeUser();
    }
    return data.user;
  } catch {
    await removeUser();
    return null;
  }
}

export async function getAccessToken() {
  const accessToken = (await cookies()).get("accessToken")?.value;
  if (!accessToken) return "";

  try {
    const data = await decodeToken(accessToken);
    if (new Date(data.expires) < new Date()) {
      return await removeAccessToken();
    }
    return data.accessTokenFromLogin;
  } catch {
    await removeAccessToken();
    return "";
  }
}

export async function removeAccessToken() {
  (await cookies()).set("accessToken", "", { expires: new Date(0) });
  return NextResponse.redirect("/login");
}
