import mongoose from "mongoose";
import type { MongoClient } from "mongodb";

import {
  RateLimiterMongo,
  RateLimiterMemory,
  RateLimiterRes,
} from "rate-limiter-flexible";

export const LOGIN_POINTS = 5;
export const LOGIN_DURATION = 60;

type Limiter = RateLimiterMongo | RateLimiterMemory;

// Cache across hot reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var __loginLimiter: Limiter | undefined;
}

export function getLoginLimiter(): Limiter {
  if (global.__loginLimiter) return global.__loginLimiter;

  const db = mongoose.connection?.db;

  const client =
    typeof mongoose.connection.getClient === "function"
      ? mongoose.connection.getClient()
      : (mongoose.connection as unknown as { client?: MongoClient }).client;

  if (db && client) {
    global.__loginLimiter = new RateLimiterMongo({
      storeClient: client, // native MongoClient
      dbName: db.databaseName,
      tableName: "rate_limits", // Mongo collection name
      points: LOGIN_POINTS,
      duration: LOGIN_DURATION,
    });
  } else {
    // Fallback (per-instance) — fine for local dev
    global.__loginLimiter = new RateLimiterMemory({
      points: LOGIN_POINTS,
      duration: LOGIN_DURATION,
    });
  }

  return global.__loginLimiter!;
}

export type { RateLimiterRes };

// ---------------Contact api-------------------------------------

export const CONTACT_POINTS = 3; // e.g. 3 requests
export const CONTACT_DURATION = 300; // per 5 minutes

export function getContactLimiter(): Limiter {
  // Reuse the same pattern as login
  const db = mongoose.connection?.db;
  const client =
    typeof mongoose.connection.getClient === "function"
      ? mongoose.connection.getClient()
      : (mongoose.connection as unknown as { client?: MongoClient }).client;

  if (db && client) {
    return new RateLimiterMongo({
      storeClient: client,
      dbName: db.databaseName,
      tableName: "rate_limits",
      points: CONTACT_POINTS,
      duration: CONTACT_DURATION,
      keyPrefix: "contact",
    });
  }

  return new RateLimiterMemory({
    points: CONTACT_POINTS,
    duration: CONTACT_DURATION,
    keyPrefix: "contact",
  });
}

// ---------------------Sign up api---------------------------------------
export const SIGNUP_POINTS = 3; // max attempts
export const SIGNUP_DURATION = 60 * 15; // 1 hour

export function getSignupLimiter(): Limiter {
  // Reuse the same pattern as login
  const db = mongoose.connection?.db;
  const client =
    typeof mongoose.connection.getClient === "function"
      ? mongoose.connection.getClient()
      : (mongoose.connection as unknown as { client?: MongoClient }).client;

  if (db && client) {
    return new RateLimiterMongo({
      storeClient: client,
      dbName: db.databaseName,
      tableName: "rate_limits",
      points: SIGNUP_POINTS,
      duration: SIGNUP_DURATION,
      keyPrefix: "signup",
    });
  }

  return new RateLimiterMemory({
    points: SIGNUP_POINTS,
    duration: SIGNUP_DURATION,
    keyPrefix: "signup",
  });
}
