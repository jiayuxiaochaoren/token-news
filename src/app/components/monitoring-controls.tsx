"use client";

import { PauseIcon, BellOffIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function MonitoringControls() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-3">
          <Button
            className="bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-black font-medium px-6 py-5 h-auto shadow-lg shadow-[#CCFF00]/20"
            size="lg"
          >
            <PauseIcon className="w-5 h-5 mr-2" />
            Monitoring
          </Button>
          <Button
            size="icon"
            className="bg-[#ef4444] hover:bg-[#ef4444]/90 rounded-full w-12 h-12 shadow-lg shadow-[#ef4444]/20"
          >
            <BellOffIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
