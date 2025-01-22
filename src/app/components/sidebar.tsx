"use client";

import { AlertCircle, BarChart2, Copy, Menu, UsersIcon } from "lucide-react";
import { Image } from "@/app/components/ui/image";
import { useEffect, useState } from "react";
import { useLoading } from "@/contexts/loading-context";
import { MessageStruct } from "@/types/alert";
import {
  abbreviateString,
  formatCurrency,
  roundPriceWithoutSub,
} from "@/_lib/helper";
import dayjs from "dayjs";
import { Channel } from "pusher-js";
import { pusher } from "@/_lib/pusher";
import { useToken } from "@/contexts/token-context";
import useSWR from "swr";
import { fetcher } from "@/_lib/fetcher";
import { HotTokenInfo } from "@/types/tokens";
import { DINGCAT_USER_DID } from "@/constants";
import { useMonitoring } from "@/contexts/monitoring-context";

type ViewMode = "alert" | "rank";

export function Sidebar({ defaultList }: { defaultList: MessageStruct[] }) {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>("alert");
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoading } = useLoading();
  const [list, setList] = useState<MessageStruct[]>(defaultList);
  const { setSelectedToken, selectedToken } = useToken();
  console.log("selectedToken", selectedToken);
  const { isPusherEnabled, isSoundEnabled } = useMonitoring();
  const [tokenAlertCounts, setTokenAlertCounts] = useState<
    Record<string, number>
  >({});

  const handleTokenSelect = (tokenAddress: string, index: number) => {
    setSelectedToken(tokenAddress);
    setSelectedId(index);
    setIsLoading(true);
  };

  const { data: hotTokenData, isLoading: hotTokenLoading } = useSWR<
    HotTokenInfo[]
  >(`/api/tokens/rank`, fetcher, {
    refreshInterval: selectedToken ? 10000 : 0,
  });

  useEffect(() => {
    if (defaultList?.length > 0) {
      setSelectedToken(defaultList?.[0]?.tokenAddress);
    }
  }, [defaultList]);

  const playAlertSound = () => {
    const audio = new Audio("/warning-alarm-loop.mp3");
    audio.play().catch(console.error);
    console.log("playAlertSound");
  };

  useEffect(() => {
    if (!isPusherEnabled) return;

    const handleNewPusher = (fomoInfo: MessageStruct) => {
      if (fomoInfo) {
        setList((prev) => {
          const newList = [fomoInfo, ...prev];
          return newList;
        });

        if (isSoundEnabled) {
          setTokenAlertCounts((prev) => {
            const newCount = (prev[fomoInfo.tokenAddress] || 0) + 1;
            if (newCount >= 3) {
              playAlertSound();
              return {
                ...prev,
                [fomoInfo.tokenAddress]: 0,
              };
            }
            return {
              ...prev,
              [fomoInfo.tokenAddress]: newCount,
            };
          });
        }
      }
    };

    let channel: Channel;
    const event = "fomoAlert";

    channel = pusher.subscribe(`newTrans_solana_${DINGCAT_USER_DID}`);
    channel.bind(event, handleNewPusher);

    return () => {
      channel?.unbind(event, handleNewPusher);
    };
  }, [isPusherEnabled, isSoundEnabled]);

  return (
    <>
      <button
        className="lg:hidden fixed top-[60px] left-6 z-20 bg-[#262626] p-2 rounded-md hover:bg-[#363636] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-5 h-5" />
      </button>
      <aside
        className={`w-[320px] bg-[#171717] flex flex-col h-full fixed left-0 top-[52px] bottom-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="flex items-center gap-4 px-4 py-4">
          <button
            onClick={() => setViewMode("alert")}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors
              ${
                viewMode === "alert"
                  ? "text-[#ffffff] bg-[#262626]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
          >
            <AlertCircle className="w-4 h-4" />
            Alert
          </button>
          <button
            onClick={() => setViewMode("rank")}
            className={`flex items-center gap-2 text-sm rounded-lg px-4 py-2 transition-colors
              ${
                viewMode === "rank"
                  ? "text-[#ffffff] bg-[#262626]"
                  : "text-[#a3a3a3] hover:text-[#ffffff]"
              }`}
          >
            <BarChart2 className="w-4 h-4" />
            Rank
          </button>
        </nav>
        <div className="flex-1 overflow-auto px-4">
          {viewMode === "alert" ? (
            <div className="space-y-2 pb-4">
              {list?.length > 0 ? (
                list.map((alert, index) => (
                  <div
                    key={`${index}-${alert?.alertTime}`}
                    onClick={() =>
                      handleTokenSelect(alert?.tokenAddress, index)
                    }
                    className={`cursor-pointer rounded-xl border transition-all
                    ${
                      selectedId === index
                        ? "border-[#d4f932] bg-[#262626]/20"
                        : "border-[#262626] hover:border-[#404040]"
                    }`}
                  >
                    <div className="p-2">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <Image
                            src={alert?.token_image ?? ""}
                            alt={alert?.symbol ?? ""}
                            width={38}
                            height={38}
                          />
                        </div>
                        <div className="flex-1 min-w-0 ml-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base font-medium text-[#ffffff]">
                                {alert?.symbol}
                              </span>
                              <span className="text-sm text-[#a3a3a3]">
                                {abbreviateString(alert?.tokenAddress ?? "")}
                              </span>
                              <Copy className="w-3.5 h-3.5 text-[#a3a3a3]" />
                            </div>
                            <span className="text-[#d4f932] font-bold">
                              X{alert?.alertCount || 1}
                            </span>
                          </div>

                          <div className="flex  items-center justify-between mb-2">
                            <span className="text-sm text-[#737373] ">
                              {alert?.name}
                            </span>

                            <span className="text-[#d4f932] text-sm">
                              {dayjs
                                .unix(alert?.alertTime || dayjs().unix())
                                .format("HH:mm:ss")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 text-sm mt-2">
                        <div className="flex items-center gap-2 text-[#ffffff]">
                          <span>
                            Price{" "}
                            {roundPriceWithoutSub(Number(alert?.priceUsd))}
                          </span>
                          <span className="text-[#404040]">|</span>
                          <span>
                            MC {formatCurrency(Number(alert?.marketCap ?? 0))}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[#ffffff]">
                          <span>Smart Buy {alert?.totalSmartbuy ?? 0}</span>
                          <span className="text-[#404040]">|</span>
                          <span>Tweets {alert?.tweetsCount}</span>
                        </div>
                        <div className="text-[#ffffff]">
                          <span>Holders {alert?.holders}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-[#a3a3a3]">
                  No alerts available
                </div>
              )}
            </div>
          ) : viewMode === "rank" ? (
            <div className="space-y-2 pb-4">
              {hotTokenData?.length || 0 > 0 ? (
                hotTokenData?.map((alert, index) => (
                  <div
                    key={`${index}-${alert?.tokenAddress}`}
                    onClick={() =>
                      handleTokenSelect(alert?.tokenAddress, index)
                    }
                    className={`cursor-pointer rounded-xl border transition-all
                ${
                  selectedId === index
                    ? "border-[#d4f932] bg-[#262626]/20"
                    : "border-[#262626] hover:border-[#404040]"
                }`}
                  >
                    <div className="p-2">
                      <div className="flex items-start gap-2 ">
                        <div className="flex-shrink-0">
                          <Image
                            src={alert?.token_image ?? ""}
                            alt={alert?.symbol ?? ""}
                            width={38}
                            height={38}
                          />
                        </div>

                        <div className="flex flex-col w-full">
                          <div className="flex items-center flex-row justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="text-base font-medium text-[#ffffff]">
                                {alert?.symbol}
                              </span>
                              <span className="text-sm text-[#a3a3a3]">
                                {abbreviateString(alert?.tokenAddress ?? "")}
                              </span>
                              <Copy className="w-3.5 h-3.5 text-[#a3a3a3]" />
                            </div>
                            <div className="flex items-center gap-1">
                              <UsersIcon className="w-4 h-4" />
                              <span className="text-[#d4f932] font-bold">
                                {alert?.tmpSmartBuy || 0}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-row items-center justify-between">
                            <span className="text-sm text-[#737373] mb-2">
                              {alert?.symbol}
                            </span>

                            {/* <span className="text-[#d4f932] text-sm">
                        {dayjs
                          .unix(alert?. || dayjs().unix())
                          .format("HH:mm:ss")}
                      </span> */}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1 text-sm mt-2">
                        <div className="flex items-center gap-2 text-[#ffffff]">
                          <span>
                            Price{" "}
                            {roundPriceWithoutSub(Number(alert?.priceUsd))}
                          </span>
                          <span className="text-[#404040]">|</span>
                          <span>
                            MC {formatCurrency(Number(alert?.marketCap ?? 0))}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[#ffffff]">
                          <span>Smart Buy {alert?.tmpSmartBuy ?? 0}</span>
                          <span className="text-[#404040]">|</span>
                          <span>Tweets {alert?.tweetsStats?.tweets}</span>
                        </div>
                        <div className="text-[#ffffff]">
                          <span>
                            Total Smart Buy {alert?.totalSmartBuy || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-[#a3a3a3]">
                  No rank available
                </div>
              )}
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}
