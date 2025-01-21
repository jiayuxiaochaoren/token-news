"use client"

import { useEffect, useRef, useState } from "react"
import { createChart, ColorType, type UTCTimestamp } from "lightweight-charts"

export function TradingViewChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [chartInstance, setChartInstance] = useState<any>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#a3a3a3",
      },
      grid: {
        vertLines: { color: "#404040" },
        horzLines: { color: "#404040" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    })

    setChartInstance(chart)

    const areaSeries = chart.addAreaSeries({
      lineColor: "#d4f932",
      topColor: "#d4f932",
      bottomColor: "rgba(212, 249, 50, 0.04)",
    })

    const volumeSeries = chart.addHistogramSeries({
      color: "#d4f932",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    })

    const currentDate = new Date()
    const data = Array.from({ length: 100 }, (_, i) => ({
      time: (Math.floor(currentDate.getTime() / 1000) - (100 - i) * 3600) as UTCTimestamp,
      value: Math.random() * 100 + 50,
      volume: Math.random() * 100,
    }))

    areaSeries.setData(data.map((d) => ({ time: d.time, value: d.value })))
    volumeSeries.setData(data.map((d) => ({ time: d.time, value: d.volume })))

    return () => {
      chart.remove()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current && chartInstance) {
        chartInstance.applyOptions({ width: chartContainerRef.current.clientWidth })
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [chartInstance])

  return <div ref={chartContainerRef} className="w-full h-[400px]" />
}

