"use server";

import { ALERT_LIMIT, DINGCAT_USER_DID } from "@/constants";
import { dingcatDb } from "@/db/prisma";
import { MessageStruct } from "@/types/alert";
import { unstable_cache } from "next/cache";

export const getAlertsList = async ({ page = 1 }: { page: number }) => {
  // 使用 unstable_cache 包装数据获取，设置较短的缓存时间
  const getCachedAlerts = unstable_cache(
    async () => {
      try {
        const user_did = `did:privy:${DINGCAT_USER_DID}`;
        const alerts = await dingcatDb.$transaction(async (tx) => {
          return await tx.alert_messages.findMany({
            select: {
              message: true,
            },
            where: {
              user_did: user_did,
            },
            orderBy: {
              created_at: "desc",
            },
            take: ALERT_LIMIT,
            skip: (page - 1) * ALERT_LIMIT,
          });
        });

        return alerts?.map((alert) => alert.message as MessageStruct);
      } catch (error) {
        console.error("Database query error:", error);
        return [];
      } finally {
        await dingcatDb.$disconnect();
      }
    },
    ["alerts-list"],
    {
      revalidate: 5, // 5 秒后重新验证
      tags: ["alerts"], // 用于手动使缓存失效
    }
  );

  return getCachedAlerts();
};
