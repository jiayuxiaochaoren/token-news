import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Image } from "@/app/components/ui/image";
import { BirdEyeTokenSimpleOverview, TokenMarketInfo } from "@/types/market";
import {
  abbreviateString,
  formatCurrency,
  roundPriceWithoutSub,
} from "@/_lib/helper";
import TraderLinks from "./trader-links";

export function TokenHeader({
  birdeyeData,
  tokenImage,
}: {
  birdeyeData: BirdEyeTokenSimpleOverview;
  tokenImage: string;
}) {
  return (
    <div className="flex items-center justify-between bg-[#262626]/50 rounded-lg p-4">
      <div className="flex items-center gap-3">
        <Image
          src={tokenImage}
          alt={birdeyeData?.symbol || ""}
          width={48}
          height={48}
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">{birdeyeData?.symbol}</span>
            {/* <span className="text-lg">▼</span> */}
            <span className="text-sm text-[#a3a3a3]">
              {abbreviateString(birdeyeData?.tokenAddress)}
            </span>
          </div>
          <div className="text-sm text-[#a3a3a3]">{birdeyeData?.name}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-xl font-bold">
              ${roundPriceWithoutSub(birdeyeData?.price)}
            </span>
            <span className="text-[#a3a3a3] mx-2">|</span>
            <span className="text-xl font-bold">
              MC {formatCurrency(birdeyeData?.mc)}
            </span>
          </div>
          <div className="flex items-center text-[#d4f932] gap-1">
            {birdeyeData?.priceChange?.h1 &&
            birdeyeData?.priceChange?.h1 > 0 ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500" />
            )}
            <span
              className={`${
                birdeyeData?.priceChange?.h1 && birdeyeData?.priceChange?.h1 > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {birdeyeData?.priceChange?.h1?.toFixed(0)}%
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <TraderLinks tokenAddress={birdeyeData?.tokenAddress} />
        </div>
      </div>
    </div>
  );
}
