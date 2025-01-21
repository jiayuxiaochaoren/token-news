import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { IncrementTweetsStats } from "@/types/tweets";
import { HotTokenInfo } from "@/types/tokens";

export async function GET(request: NextRequest) {
  try {
    const url = `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/tokens/getHotTokensWithTimer`;

    const response = await axios.post(url, {
      timer: "5m",
    });

    const data = response?.data?.data as HotTokenInfo[];
    data?.sort((a, b) => (b?.tmpSmartBuy || 0) - (a?.tmpSmartBuy || 0));
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  }
}
