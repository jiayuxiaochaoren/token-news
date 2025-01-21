import { ArrowUpIcon, Sparkles } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { MetricCard } from "./metric-card";
import { AnimatedNumber } from "@/app/components/ui/animated-number";
import { Image } from "@/app/components/ui/image";
import { useEffect, useState } from "react";

export function TokenCard() {
  const [price, setPrice] = useState(0.01);
  const [marketCap, setMarketCap] = useState(10000000);
  const [percentChange, setPercentChange] = useState(122.23);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => prev + (Math.random() - 0.5) * 0.001);
      setMarketCap((prev) => prev + (Math.random() - 0.5) * 100000);
      setPercentChange((prev) => prev + (Math.random() - 0.5) * 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border border-[#d4f932]/20 bg-[#000000]/40 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4f932] to-[#22c55e] animate-pulse"></div>
      <div className="space-y-6">
        {/* Token Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOMO-VTlUX0vVtUTCXehyges0DuMYrvruVc.png"
              alt="Cuba Flag"
              width={32}
              height={32}
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#d4f932]">CUBA</span>
                <span className="text-sm text-[#a3a3a3]">27T4B...ump</span>
              </div>
              <div className="text-sm text-[#a3a3a3]">Official Cuba Coin</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-xl font-bold text-[#ffffff]">
                <AnimatedNumber value={price} prefix="$" fixed={4} />
              </span>
              <span className="text-[#a3a3a3]">
                {" "}
                | MC <AnimatedNumber value={marketCap} prefix="$" />
              </span>
            </div>
            <div className="flex items-center text-[#d4f932] gap-1">
              <ArrowUpIcon className="h-4 w-4" />
              <AnimatedNumber value={percentChange} fixed={2} />%
            </div>
            <div className="text-[#d4f932] text-2xl font-bold">
              X<AnimatedNumber value={5} />
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard
            value={891}
            label="Smart Buy"
            change="+122"
            icon="wallet"
          />
          <MetricCard value={123} label="Tweets" change="+23" icon="twitter" />
          <MetricCard
            value={223300}
            label="Vol / 5min"
            change="+122.2%"
            icon="bar-chart-3"
          />
          <MetricCard value={2343} label="Holders" change="+122" icon="users" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            className="bg-[#ffffff]/5 hover:bg-[#ffffff]/10 border-0"
          >
            🐦 Tweets
          </Button>
          <Button className="bg-[#d4f932] text-[#000000] hover:bg-[#d4f932]/90 animate-pulse">
            <Sparkles className="w-4 h-4 mr-2" />
            Trade Now!
          </Button>
        </div>
      </div>
    </Card>
  );
}
