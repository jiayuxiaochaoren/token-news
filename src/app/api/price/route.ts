import { NextResponse } from "next/server"

export async function GET() {
  // 模拟从外部 API 获取价格数据
  const price = Math.random() * 1000
  return NextResponse.json({ price: price.toFixed(2) })
}

