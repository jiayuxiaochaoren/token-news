"use client";

import { BIRDEYE_API_HOST, BIRDEYE_API_KEY } from "@/constants";
import { BirdEyeTokenOverview, TokenMarketInfo } from "@/types/market";
import axios from "axios";

export async function getMarketData(tokenAddress: string) {
  const response = await fetch(
    `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
  );
  const data = (await response.json())?.pairs as TokenMarketInfo[];

  return data?.[0];
}
export const getTokenOverviewByBirdEye = async (tokenAddress: string) => {
  if (!tokenAddress) return null;
  const uri = `${BIRDEYE_API_HOST}/defi/token_overview?address=${tokenAddress}`;
  const resp = await axios.get(uri, {
    headers: { "X-API-KEY": BIRDEYE_API_KEY, "x-chain": "solana" },
    timeout: 10000,
  });

  const tokenOverview = resp?.data?.data as BirdEyeTokenOverview;

  return {
    holder: tokenOverview?.holder || 0,
    price: tokenOverview?.price || 0,
    mc: tokenOverview?.mc || 0,
    volume: {
      m30: tokenOverview?.v30mUSD || 0,
      h1: tokenOverview?.v1hUSD || 0,
      h8: tokenOverview?.v8hUSD || 0,
    },
  };
};
