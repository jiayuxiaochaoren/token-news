"use client";

import { createContext, useContext, useState } from "react";

interface TokenContextType {
  selectedToken: string;
  setSelectedToken: (address: string) => void;
}

const TokenContext = createContext<TokenContextType>({
  selectedToken: "",
  setSelectedToken: () => {},
});

export function TokenProvider({ children }: { children: React.ReactNode }) {
  const [selectedToken, setSelectedToken] = useState("");

  return (
    <TokenContext.Provider value={{ selectedToken, setSelectedToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
}
