import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { AiAnalyze } from "@/types/analyze";

export async function GET(request: NextRequest) {
  const tokenAddress = request.nextUrl.searchParams.get("tokenAddress") || "";
  try {
    if (!tokenAddress) {
      return NextResponse.json(
        { error: "Token address is required" },
        { status: 400 }
      );
    }
    const url = `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/tweets/getTokenDataByTokenAddress`;

    const response = await axios.post(url, {
      tokenAddress: tokenAddress,
    });

    const data = response?.data?.data as AiAnalyze;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  }
}
