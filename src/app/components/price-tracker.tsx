"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { AnimatedNumber } from "@/app/components/ui/animated-number";
import { getPrice } from "@/app/actions/getPrice";
import { AlertTriangle, TrendingUp } from "lucide-react";

export function PriceTracker() {
  const [isTracking, setIsTracking] = useState(false);
  const { data, error } = useSWR(isTracking ? "price" : null, getPrice, {
    refreshInterval: isTracking ? 5000 : 0,
  });

  const [urgencyLevel, setUrgencyLevel] = useState(0);

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setUrgencyLevel((prev) => (prev + 1) % 3);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  const getUrgencyColor = () => {
    switch (urgencyLevel) {
      case 0:
        return "bg-[#22c55e]";
      case 1:
        return "bg-[#d4f932]";
      case 2:
        return "bg-[#ef4444]";
      default:
        return "bg-[#22c55e]";
    }
  };

  return (
    <Card
      className={`bg-[#171717] border-2 ${getUrgencyColor()} p-6 transition-all duration-500`}
    >
      <h2 className="text-[#ffffff] text-2xl font-bold mb-4 flex items-center">
        <TrendingUp className="mr-2" /> Live Price Tracker
      </h2>
      <div className="flex items-center justify-between">
        <div className="text-[#ffffff]">
          Current Price:
          {data ? (
            <span className="ml-2 text-[#d4f932] text-3xl">
              $<AnimatedNumber value={Number.parseFloat(data.price)} />
            </span>
          ) : error ? (
            <span className="ml-2 text-[#ef4444]">Error fetching price</span>
          ) : (
            <span className="ml-2 text-[#a3a3a3]">--</span>
          )}
        </div>
        <Button
          onClick={toggleTracking}
          className={`${
            isTracking
              ? "bg-[#ef4444] hover:bg-[#ef4444]/90"
              : "bg-[#d4f932] hover:bg-[#d4f932]/90"
          } text-[#000000] animate-pulse`}
        >
          {isTracking ? (
            <>
              <AlertTriangle className="mr-2" /> Stop Tracking
            </>
          ) : (
            <>
              <TrendingUp className="mr-2" /> Start Tracking
            </>
          )}
        </Button>
      </div>
      {isTracking && (
        <p className="mt-4 text-[#d4f932] animate-pulse">
          Don't miss out! Prices are changing rapidly!
        </p>
      )}
    </Card>
  );
}
