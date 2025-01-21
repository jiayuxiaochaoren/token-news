export type TokenMarketInfo = {
  chainId?: string;
  url?: string;
  priceNative?: string;
  priceUsd?: string;
  txns?: {
    m5: { buys?: number; sells?: number };
    h1: { buys?: number; sells?: number };
    h6: { buys?: number; sells?: number };
    h24: { buys?: number; sells?: number };
  };
  volume?: { h24?: number; h6?: number; h1?: number; m5?: number };
  priceChange?: { h24?: number; h6?: number; h1?: number; m5?: number };
  liquidity?: { usd?: number; base?: number; quote?: number };
  fdv?: number;
  pairCreatedAt?: number;
  baseToken: { address: string; name: string; symbol: string };
  quoteToken: { address: string; name: string; symbol: string };
  pairAddress: string;
  info?: {
    imageUrl: string;
    socials: { type: string; url: string }[];
    websites: { label: string; url: string }[];
  };
  marketCap?: number;
};

export type BirdEyeTokenOverview = {
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  extensions: {
    coingeckoId: string;
    description: string;
    website: string;
    twitter: string;
    telegram: string;
  };
  logoURI: string;
  liquidity: number;
  price: number;
  supply: number;
  mc: number;
  realMc: number;
  holder: number;
  v24hUSD: number;
  v1hUSD: number;
  v30mUSD: number;
  v8hUSD: number;
};
