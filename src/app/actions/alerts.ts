import { ALERT_LIMIT, DINGCAT_USER_DID } from "@/constants";
import { dingcatDb } from "@/db/prisma";
import { MessageStruct } from "@/types/alert";

export const getAlertsList = async ({ page = 1 }: { page: number }) => {
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
};
