import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json(
    { message: "Successful" },
    { status: 200 }
  );

  response.cookies.set("accessToken", "", { expires: new Date(0) });
  response.cookies.set("userSession", "", { expires: new Date(0) });

  return response;
}
