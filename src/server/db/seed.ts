import { db } from ".";
import { topics } from "./schema";

const topicsData = [
  "Community",
  "Housing",
  "Jobs",
  "Services",
  "Discussion Forums",
  "For Sale",
  "Gigs",
];
console.log("SEEDING START : DB TOPICS ======");
await db.insert(topics).values(
  topicsData.map((t) => {
    return {
      name: t,
    };
  }),
);

// console.log("SEEDING END: DB TOPICS ======");

// console.log("SEEDING START : DB CATEGORIES ======");
// const categories = await db.insert(schema.categories).values(12);
// console.log("SEEDING END: DB CATEGORIES ======");
