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

const topics = [
  "Community",
  "Housing",
  "Jobs",
  "Services",
  "Discussion Forums",
  "For Sale",
  "Gigs",
];
console.log("SEEDING START : DB TOPICS ======");
await db.insert(schema.topics).values(
  topics.map((t) => {
    return {
      name: t,
    };
  }),
);

// console.log("SEEDING END: DB TOPICS ======");

// console.log("SEEDING START : DB CATEGORIES ======");
// const categories = await db.insert(schema.categories).values(12);
// console.log("SEEDING END: DB CATEGORIES ======");
