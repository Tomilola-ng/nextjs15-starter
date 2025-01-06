import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const authResponse = () => {
    // Run your authentication logic here
    return {
      status: 200,
      body: {
        accessToken: "",
      },
    };
  };

  if (authResponse()) {
    return NextResponse.next();
  } else {
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
