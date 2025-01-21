import {
  IncrementTweetsStats,
  TopTwitterAccount,
  TweetsStatsCount,
  TwitterStruct,
} from "./tweets";

export type AiAnalyze = {
  token_address: string;
  symbol: string;
  network: string;
  analyze_en: string;
  analyze_zh: string;
  tweets: TwitterStruct[];
  created_at: string;
  updated_at: string;
  social_links: SocialLink[];
  tweet_amount: number;
  pumpfun: PumpfunMetadata;
  smartbuy: number;
  stats: TweetsStatsCount;
  headline: string;
  replied_accounts: TopTwitterAccount[];
  increment_stats: IncrementTweetsStats;
  analysis: MultLangAnalyzeMap;
};

export type PumpfunMetadata = {
  id: string;
  deployer: string;
  deploy_timestamp: number;
  mint: string;
  name: string;
  symbol: string;
  decimals: number;
  initial_supply: number;
  total_supply: number;
  description: string;
  mint_authority: string;
  freeze_authority: string;
  twitter: string;
  telegram: string;
  website: string;
  uri: string;
  image_uri: string;
  is_complete: string;
  complete_timestamp: number;
  smartbuy?: number;
  totalSmartbuy?: number;
};

export type SocialLink = {
  name: string;
  url: string;
  analyze_zh: string;
  analyze_en: string;
};

export type AnalyzeTweetInfo = {
  author: string;
  text: string;
  created_time: number;
  followers?: number;
};

export type BedrockClaudeResp = {
  id: string;
  type: string;
  role: string;
  model: string;
  content: { type: string; text: string }[];
  stop_reason: string;
  stop_sequence?: string;
  usage: { input_tokens: number; output_tokens: number };
};

export type MultLangAnalyze = {
  headline: string;
  summary: string;
};

export enum Lang {
  EN = "lang-en",
  ZH_CN = "lang-zh-CN",
  ZH_TW = "lang-zh-TW",
  JA = "lang-ja",
  KO = "lang-ko",
}

export type MultLangAnalyzeMap = Record<Lang, MultLangAnalyze>;
