import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "../server/routes/products.js";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lupin";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Reuse the connection across invocations on the same warm serverless instance.
let connectionPromise = null;
function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return Promise.resolve();
  if (!connectionPromise) connectionPromise = mongoose.connect(MONGODB_URI);
  return connectionPromise;
}

app.use(async (_req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/products", productsRouter);

export default app;
