import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === "user" && password === "password") {
    return NextResponse.json({ success: true, token: "mock_token" });
  } else {
    return NextResponse.json({
      success: false,
      message: "Invalid credentials",
    });
  }
}
