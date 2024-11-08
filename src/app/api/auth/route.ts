import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    return NextResponse.json({
      success: false,
      message: "Invalid email address",
    });
  }

  // Basic password validation - at least 8 characters
  if (password.length < 8) {
    return NextResponse.json({
      success: false,
      message: "Password must be at least 8 characters long",
    });
  }

  return NextResponse.json({ success: true, token: "mock_token" });
}
