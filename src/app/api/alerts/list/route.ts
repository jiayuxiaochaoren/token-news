import { NextRequest, NextResponse } from "next/server";
import { dingcatDb } from "@/db/prisma";
import { ALERT_LIMIT, DINGCAT_USER_DID } from "@/constants";
import { MessageStruct } from "@/types/alert";

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get("page") || "1";
  const pageInt = parseInt(page);
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
        skip: (pageInt - 1) * ALERT_LIMIT,
      });
    });
    const list = alerts?.map((alert) => alert.message as MessageStruct);
    return new NextResponse(JSON.stringify(list), {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Failed to fetch tweets" },
      { status: 500 }
    );
  } finally {
    await dingcatDb.$disconnect();
  }
}
