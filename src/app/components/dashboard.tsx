"use client";

import { useState, useEffect, useMemo } from "react";
import { TokenHeader } from "@/app/components/token-header";
import { AISummary } from "@/app/components/ai-summary";
import { MetricCard } from "@/app/components/metric-card";
import { TradingViewChart } from "@/app/components/trading-view-chart";
import { SocialFeed } from "@/app/components/social-feed";
import {
  TokenHeaderSkeleton,
  MetricCardSkeleton,
  ChartSkeleton,
  AISummarySkeleton,
  Skeleton,
} from "@/app/components/ui/skeletons";
import { useLoading } from "@/contexts/loading-context";
import { useToken } from "@/contexts/token-context";
import useSWR from "swr";
import { getMarketData, getTokenOverviewByBirdEye } from "../actions/market";
import { TokenMarketInfo } from "@/types/market";
import { fetcher } from "@/_lib/fetcher";
import { AiAnalyze } from "@/types/analyze";
import { IncrementTweetsStats, TwitterStruct } from "@/types/tweets";

type SocialViewMode = "like" | "views" | "latest" | "followers";

export function Dashboard() {
  const { isLoading, setIsLoading } = useLoading();
  const { selectedToken } = useToken();
  const [socialViewMode, setSocialViewMode] = useState<SocialViewMode>("like");

  const {
    data: marketData,
    error: marketError,
    isLoading: marketLoading,
  } = useSWR(selectedToken || null, getMarketData, {
    refreshInterval: selectedToken ? 5000 : 0,
  });

  const { data: tokenData, isLoading: tokenLoading } = useSWR<AiAnalyze>(
    selectedToken ? `/api/tokens/basic?tokenAddress=${selectedToken}` : null,
    fetcher,
    {
      refreshInterval: selectedToken ? 8000 : 0,
    }
  );

  const { data: tweetsData, isLoading: tweetsLoading } = useSWR<{
    tweets: TwitterStruct[];
    totalCount: number;
  }>(
    selectedToken
      ? `/api/tweets?tokenAddress=${selectedToken}&category=${socialViewMode}&page=1&pageSize=20`
      : null,
    fetcher,
    {
      refreshInterval: selectedToken ? 20000 : 0,
    }
  );

  const { data: birdeyeData, error: birdeyeError } = useSWR(
    selectedToken ? `/api/tokens/trades?tokenAddress=${selectedToken}` : null,
    fetcher,
    {
      refreshInterval: selectedToken ? 5000 : 0,
    }
  );

  // const { data: incrementData, isLoading: incrementLoading } =
  //   useSWR<IncrementTweetsStats>(
  //     selectedToken
  //       ? `/api/tokens/increments?tokenAddress=${selectedToken}`
  //       : null,
  //     fetcher,
  //     {
  //       refreshInterval: selectedToken ? 20000 : 0,
  //     }
  //   );

  useEffect(() => {
    if (selectedToken && tokenData) {
      setIsLoading(false);
    }
  }, [selectedToken, tokenData]);

  const tokenImage = useMemo(() => {
    return marketData?.info?.imageUrl || tokenData?.pumpfun?.uri;
  }, [tokenData, marketData]);

  const holders = useMemo(() => {
    return birdeyeData?.holder || 0;
  }, [birdeyeData]);

  console.log(birdeyeData, selectedToken, "bird");

  return (
    <div className="space-y-6 lg:ml-[320px]">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {isLoading && marketLoading ? (
        <TokenHeaderSkeleton />
      ) : (
        <TokenHeader
          tokenImage={tokenImage || ""}
          marketData={marketData as TokenMarketInfo}
        />
      )}
      {isLoading ? (
        <AISummarySkeleton />
      ) : (
        <AISummary analyze={tokenData?.analysis?.["lang-zh-CN"] as any} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <>
            <MetricCardSkeleton />
            <MetricCardSkeleton />
            <MetricCardSkeleton />
            <MetricCardSkeleton />
          </>
        ) : (
          <>
            <MetricCard
              title="Smart Buy"
              value={tokenData?.smartbuy || 0}
              icon="lightbulb"
              changes={{
                fiveMin: "0",
                oneHour: "0",
                sixHours: "0",
              }}
            />
            <MetricCard
              title="Tweets"
              value={tokenData?.stats?.tweets || 0}
              icon="twitter"
              changes={{
                fiveMin: (tokenData?.increment_stats?.m5 || 0).toString(),
                oneHour: (tokenData?.increment_stats?.h1 || 0).toString(),
                sixHours: (tokenData?.increment_stats?.h6 || 0).toString(),
              }}
            />
            <MetricCard
              title="Vol"
              value={marketData?.volume?.h24 || 0}
              icon="bar-chart"
              changes={{
                fiveMin: `$${(marketData?.volume?.m5 || 0).toLocaleString()}`,
                oneHour: `$${(marketData?.volume?.h1 || 0).toLocaleString()}`,
                sixHours: `$${(marketData?.volume?.h6 || 0).toLocaleString()}`,
              }}
            />
            <MetricCard
              title="Holders"
              value={holders}
              icon="users"
              changes={{
                fiveMin: "0",
                oneHour: "0",
                sixHours: "0",
              }}
            />
          </>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Overview: MC & Tweets</h2>
          {isLoading ? <ChartSkeleton /> : <TradingViewChart />}
        </div>
        <div className="w-full lg:w-[400px] flex flex-col">
          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
            <button
              onClick={() => setSocialViewMode("like")}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                socialViewMode === "like"
                  ? "bg-[#262626] text-[#ffffff]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
            >
              Like
            </button>
            <button
              onClick={() => setSocialViewMode("views")}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                socialViewMode === "views"
                  ? "bg-[#262626] text-[#ffffff]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
            >
              Views
            </button>
            <button
              onClick={() => setSocialViewMode("latest")}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                socialViewMode === "latest"
                  ? "bg-[#262626] text-[#ffffff]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setSocialViewMode("followers")}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors whitespace-nowrap ${
                socialViewMode === "followers"
                  ? "bg-[#262626] text-[#ffffff]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
            >
              Followers
            </button>
          </div>
          <div className="bg-[#262626]/50 rounded-lg overflow-hidden h-[calc(100vh-52px-6rem)] lg:h-[calc(100vh-52px-10rem)] overflow-y-auto">
            {isLoading ? (
              <div className="p-4 space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <Skeleton className="h-4 w-24 mb-1" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                        <Skeleton className="h-3 w-16" />
                      </div>
                      <Skeleton className="h-4 w-full mt-2" />
                      <Skeleton className="h-4 w-4/5 mt-1" />
                      <div className="flex gap-4 mt-2">
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-3 w-16" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <SocialFeed
                viewMode={socialViewMode}
                tweets={tweetsData?.tweets || []}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
