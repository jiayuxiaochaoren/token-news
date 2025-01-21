import { Card } from "@/app/components/ui/card";

interface HistoryCardProps {
  multiplier: number;
  time: string;
}

export function HistoryCard({ multiplier, time }: HistoryCardProps) {
  return (
    <Card className="bg-white/5 border-0 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOMO-VTlUX0vVtUTCXehyges0DuMYrvruVc.png"
            alt="Cuba Flag"
            className="w-6 h-6 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold">CUBA</span>
              <span className="text-sm text-muted-foreground">27T4B...ump</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Official Cuba Coin
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span>Price $0.01</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span>MC 10.0M</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span>Smart Buy 25</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span>Tweets 233</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <span>Holders 1234</span>
          <div className="text-[#CCFF00] text-lg font-bold ml-2 tabular-nums">
            X{multiplier}
          </div>
          <div className="text-white/40 text-sm tabular-nums">{time}</div>
        </div>
      </div>
    </Card>
  );
}
