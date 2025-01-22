"use client";

import { Bell, BellOff, Radio } from "lucide-react";
import { useMonitoring } from "@/contexts/monitoring-context";

export function MonitoringControls() {
  const {
    isPusherEnabled,
    setIsPusherEnabled,
    isSoundEnabled,
    setIsSoundEnabled,
  } = useMonitoring();

  return (
    <div className="fixed bottom-6 right-6 flex gap-2">
      <button
        onClick={() => setIsPusherEnabled(!isPusherEnabled)}
        className={`p-2 rounded-full transition-colors ${
          isPusherEnabled
            ? "bg-[#d4f932] text-black"
            : "bg-[#262626] text-[#a3a3a3]"
        }`}
        title={isPusherEnabled ? "Disable Alerts" : "Enable Alerts"}
      >
        {isPusherEnabled ? (
          <Bell className="w-5 h-5" />
        ) : (
          <BellOff className="w-5 h-5" />
        )}
      </button>
      <button
        onClick={() => setIsSoundEnabled(!isSoundEnabled)}
        className={`p-2 rounded-full transition-colors ${
          isSoundEnabled
            ? "bg-[#d4f932] text-black"
            : "bg-[#262626] text-[#a3a3a3]"
        }`}
        title={isSoundEnabled ? "Disable Sound" : "Enable Sound"}
      >
        {isSoundEnabled ? (
          <Radio className="w-5 h-5" />
        ) : (
          <Radio className="w-5 h-5 bg-[#262626] text-[#a3a3a3]" />
        )}
      </button>
    </div>
  );
}
