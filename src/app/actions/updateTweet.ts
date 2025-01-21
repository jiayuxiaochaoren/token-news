"use server"

import { revalidatePath } from "next/cache"

export async function updateTweet(id: string, content: string) {
  // 这里应该是更新tweet的逻辑
  // 为了演示，我们只是模拟一个更新操作
  console.log(`Updating tweet ${id} with content: ${content}`)

  // 在实际应用中，这里会与数据库交互
  // 例如: await db.tweet.update({ where: { id }, data: { content } })

  // 重新验证路径，以便更新后的数据能被 SWR 获取
  revalidatePath("/api/tweets")

  return { success: true }
}

