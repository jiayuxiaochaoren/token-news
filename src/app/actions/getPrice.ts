"use server"

export async function getPrice(): Promise<{ price: string }> {
  // 模拟从外部 API 获取价格数据
  const price = Math.random() * 1000
  return { price: price.toFixed(2) }
}

