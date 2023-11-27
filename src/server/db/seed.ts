import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "@/env.mjs";
import * as schema from "./schema";

export const db = drizzle(
  new Client({
    url: env.DATABASE_URL,
  }).connection(),
  { schema },
);

console.log("SEEDING START : DB CATEGORIES ======");
const newCategories = await db.insert(schema.categories).values(12);
console.log("SEEDING END: DB CATEGORIES ======");
