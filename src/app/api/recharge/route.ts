import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const { phoneNumber, amount, serviceType } = await request.json();

  try {
    const response = await axios.post("https://vtu-provider.com/api/recharge", {
      phoneNumber,
      amount,
      serviceType,
      apiKey: process.env.VTU_API_KEY,
    });

    if (response.data.success) {
      return NextResponse.json({
        success: true,
        message: "Recharge successful!",
      });
    } else {
      return NextResponse.json({ success: false, message: "Recharge failed." });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Server error",
      error: (error as Error).message,
    });
  }
}
