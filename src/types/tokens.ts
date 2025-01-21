import { TweetsStatsCount } from "./tweets";

export type HotTokenInfo = {
  tokenAddress: string;
  symbol: string;
  token_image?: string;
  decimals?: number;
  priceChange?: {
    m5?: number;
    h1?: number;
    h6?: number;
    h24?: number;
    priceTimer?: number;
  };
  totalSmartBuy?: number;
  tmpSmartBuy?: number;
  priceUsd?: string;
  network?: string;
  marketCap?: number;
  liquidity?: { usd?: number; base?: number; quote?: number };
  volume?: { h24?: number; h6?: number; h1?: number; m5?: number };
  fdv?: number;
  tweetsStats?: TweetsStatsCount;
};
