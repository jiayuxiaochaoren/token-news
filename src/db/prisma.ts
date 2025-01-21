// read only db

import { PrismaClient as PumpPrismaClient } from "../../prisma/generated/pumpnews";
import { PrismaClient as DingcatPrismaClient } from "../../prisma/generated/dingcat";
const createPrismaPumpnewsClient = () =>
  new PumpPrismaClient({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

const createPrismaDingcatClient = () =>
  new DingcatPrismaClient({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  pumpnewsPrisma: ReturnType<typeof createPrismaPumpnewsClient> | undefined;
  dingcatPrisma: ReturnType<typeof createPrismaDingcatClient> | undefined;
};

export const pumpnewsDb = createPrismaPumpnewsClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.pumpnewsPrisma = pumpnewsDb;
}

export const dingcatDb = createPrismaDingcatClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.dingcatPrisma = dingcatDb;
}
