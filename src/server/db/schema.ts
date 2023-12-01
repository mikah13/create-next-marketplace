import { relations, sql } from 'drizzle-orm';
import {
  bigint,
  float,
  index,
  int,
  mysqlTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
  boolean,
} from 'drizzle-orm/mysql-core';
import { type AdapterAccount } from 'next-auth/adapters';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `marketplace_${name}`);

export const reviews = mysqlTable('review', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  productId: bigint('productId', { mode: 'number' }).notNull(),
  reviewerId: bigint('reviewerId', { mode: 'number' }).notNull(),
  rating: int('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow(),
});

export const topics = mysqlTable('topics', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  createdAt: timestamp('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const categories = mysqlTable('category', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  topicId: varchar('topicId', { length: 255 }).notNull(),
  createdAt: timestamp('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const products = mysqlTable(
  'product',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    sellerId: varchar('sellerId', { length: 255 }).notNull(),
    categoryId: varchar('categoryId', { length: 255 }).notNull(),
    name: varchar('name', { length: 255 }).notNull(),
    description: varchar('description', { length: 16383 }),
    price: float('price').notNull(),
    quantity: int('quanity').notNull(),
    isPublished: boolean('isPublished').notNull(),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow(),
  },
  (product) => {
    return {
      searchCluster: index('search_cluster').on(product.name, product.description),
    };
  },
);

export const productImages = mysqlTable('productImage', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  url: varchar('url', { length: 255 }).notNull(),
  productId: varchar('productId', { length: 255 }).notNull(),
  createdAt: timestamp('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const users = mysqlTable(
  'user',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull(),
    emailVerified: timestamp('emailVerified', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    image: varchar('image', { length: 255 }),
  },
  (user) => ({
    sellerIdx: index('seller_idx').on(user.id),
  }),
);

export const accounts = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: int('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: text('id_token'),
    session_state: varchar('session_state', { length: 255 }),
    refresh_token_expires_in: int('refresh_token_expires_in'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
    userIdIdx: index('userId_idx').on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  products: many(products),
  reviews: many(reviews),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  users: one(users, { fields: [products.sellerId], references: [users.id] }),
  productImages: many(productImages),
  reviews: many(reviews),
  categories: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}));

export const productImagesRelations = relations(productImages, ({ one }) => ({
  product: one(products, {
    fields: [productImages.productId],
    references: [products.id],
  }),
}));

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  topics: one(topics, {
    fields: [categories.topicId],
    references: [topics.id],
  }),
  products: many(products),
}));
export const topicsRelations = relations(topics, ({ one, many }) => ({
  categories: one(categories),
}));

export const reviewsRelations = relations(reviews, ({ one, many }) => ({
  users: one(users, { fields: [reviews.reviewerId], references: [users.id] }),
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
  }),
}));
export const sessions = mysqlTable(
  'session',
  {
    sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
    userId: varchar('userId', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (session) => ({
    userIdIdx: index('userId_idx').on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);
