"use client"

import { useState } from "react"
import { HistoryCard } from "./history-card"
import { TweetsDrawer } from "./tweets-drawer"

export function HistoryList() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const historyItems = [
    { multiplier: 3, time: "00:23:23" },
    { multiplier: 2, time: "00:23:23" },
    { multiplier: 1, time: "00:23:23" },
    { multiplier: 1, time: "00:23:23" },
    { multiplier: 1, time: "00:23:23" },
    { multiplier: 2, time: "00:23:23" },
    { multiplier: 2, time: "00:23:23" },
    { multiplier: 2, time: "00:23:23" },
  ]

  return (
    <>
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4">History</h2>
        <div className="space-y-2 overflow-x-auto">
          {historyItems.map((item, i) => (
            <div
              key={i}
              onClick={() => setDrawerOpen(true)}
              className="cursor-pointer transition-colors hover:bg-white/5"
            >
              <HistoryCard {...item} />
            </div>
          ))}
        </div>
      </section>
      <TweetsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} />
    </>
  )
}

