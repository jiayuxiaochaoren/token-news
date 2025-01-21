import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Image } from "@/app/components/ui/image";
import { TokenMarketInfo } from "@/types/market";
import { abbreviateString } from "@/_lib/helper";

export function TokenHeader({
  marketData,
  tokenImage,
}: {
  marketData: TokenMarketInfo;
  tokenImage: string;
}) {
  return (
    <div className="flex items-center justify-between bg-[#262626]/50 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <Image
          src={tokenImage}
          alt={marketData?.baseToken?.symbol || ""}
          width={48}
          height={48}
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              {marketData?.baseToken?.symbol}
            </span>
            {/* <span className="text-lg">▼</span> */}
            <span className="text-sm text-[#a3a3a3]">
              {abbreviateString(marketData?.baseToken?.address)}
            </span>
          </div>
          <div className="text-sm text-[#a3a3a3]">
            {marketData?.baseToken?.name}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <span className="text-xl font-bold">${marketData?.priceUsd}</span>
          <span className="text-[#a3a3a3] mx-2">|</span>
          <span className="text-xl font-bold">MC ${marketData?.marketCap}</span>
        </div>
        <div className="flex items-center text-[#d4f932] gap-1">
          {marketData?.priceChange?.h1 && marketData?.priceChange?.h1 > 0 ? (
            <ArrowUpIcon className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 text-red-500" />
          )}
          <span
            className={`${
              marketData?.priceChange?.h1 && marketData?.priceChange?.h1 > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {marketData?.priceChange?.h1}%
          </span>
        </div>
      </div>
    </div>
  );
}
