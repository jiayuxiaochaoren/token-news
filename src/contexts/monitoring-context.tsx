"use client";

import { createContext, useContext, useState } from "react";

interface MonitoringContextType {
  isPusherEnabled: boolean;
  setIsPusherEnabled: (enabled: boolean) => void;
  isSoundEnabled: boolean;
  setIsSoundEnabled: (enabled: boolean) => void;
}

const MonitoringContext = createContext<MonitoringContextType>({
  isPusherEnabled: true,
  setIsPusherEnabled: () => {},
  isSoundEnabled: true,
  setIsSoundEnabled: () => {},
});

export function MonitoringProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isPusherEnabled, setIsPusherEnabled] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  return (
    <MonitoringContext.Provider
      value={{
        isPusherEnabled,
        setIsPusherEnabled,
        isSoundEnabled,
        setIsSoundEnabled,
      }}
    >
      {children}
    </MonitoringContext.Provider>
  );
}

export function useMonitoring() {
  const context = useContext(MonitoringContext);
  if (!context) {
    throw new Error("useMonitoring must be used within a MonitoringProvider");
  }
  return context;
}
