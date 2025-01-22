import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { BIRDEYE_API_HOST, BIRDEYE_API_KEY } from "@/constants";
import {
  BirdEyeTokenOverview,
  BirdEyeTokenSimpleOverview,
} from "@/types/market";

export async function GET(request: NextRequest) {
  const tokenAddress = request.nextUrl.searchParams.get("tokenAddress") || "";
  try {
    if (!tokenAddress) {
      return NextResponse.json(
        { error: "Token address is required" },
        { status: 400 }
      );
    }

    const uri = `${BIRDEYE_API_HOST}/defi/token_overview?address=${tokenAddress}`;
    const resp = await axios.get(uri, {
      headers: { "X-API-KEY": BIRDEYE_API_KEY, "x-chain": "solana" },
      timeout: 10000,
    });

    const tokenOverview = resp?.data?.data as BirdEyeTokenOverview;
    const data: BirdEyeTokenSimpleOverview = {
      name: tokenOverview?.name || "",
      symbol: tokenOverview?.symbol || "",
      tokenAddress: tokenOverview?.address || "",
      holder: tokenOverview?.holder || 0,
      price: tokenOverview?.price || 0,
      mc: tokenOverview?.mc || 0,
      volume: {
        m30: tokenOverview?.v30mUSD || 0,
        h1: tokenOverview?.v1hUSD || 0,
        h8: tokenOverview?.v8hUSD || 0,
        h24: tokenOverview?.v24hUSD || 0,
      },
      priceChange: {
        h1: tokenOverview?.priceChange1hPercent || 0,
        h6: tokenOverview?.priceChange6hPercent || 0,
        h24: tokenOverview?.priceChange24hPercent || 0,
        m30: tokenOverview?.priceChange30mPercent || 0,
      },
      tokenImage: tokenOverview?.logoURI,
    };
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  }
}
