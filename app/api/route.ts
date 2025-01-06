import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Wetin you dey find? Werey!!!" },
    { status: 200 }
  );
}
