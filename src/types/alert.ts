export type MessageStruct = {
  tokenAddress: string;
  symbol?: string;
  name?: string;
  token_image?: string;
  decimals?: number;
  fdv?: number;
  priceUsd?: string;
  holders?: number;
  LqUsd?: number;
  alertTime?: number;
  totalSmartbuy?: number;
  currentSmartbuy?: number;
  fomoSetting?: FomoSetting;
  network?: string;
  tweetsCount?: number;
  volume?: {
    h24?: number;
    h6?: number;
    h1?: number;
    m5?: number;
  };
  marketCap?: number;
  birdEyeTokenOverview?: TGAlertBirdEyeTokenOverview;
  alertCount?: number;
};

export type TGAlertBirdEyeTokenOverview = {
  decimals: number;
  symbol: string;
  logoURI: string;
  liquidity: number;
  price: string;
  supply: string;
  marketCap: number;
  holders: number;
  volume: number;
};

export type FomoSetting = {
  smartbuy: number;
  timer: number;
};
