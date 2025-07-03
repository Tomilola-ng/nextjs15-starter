/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const userDataString = req.cookies.get("userData")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login?NotLoggedIn=True", req.url));
  }

  if (!userDataString) {
    return NextResponse.redirect(new URL("/login?NotLoggedIn=True", req.url));
  }

  try {
    const user = JSON.parse(userDataString);

    if (!user || typeof user !== "object" || !user.id) {
      throw new Error("Invalid user data");
    }

    const response = NextResponse.next();
    response.headers.set("x-user", JSON.stringify(user));
    return response;
  } catch (error) {
    return NextResponse.redirect(new URL("/login?NotLoggedIn=True", req.url));
  }
}

export const config = {
  matcher: [
    "/admin",
    "/dashboard",
    "/dashboard/:path*",
    "/super-admin",
    "/super-admin/:path*",
  ],
};
