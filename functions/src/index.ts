/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import express, { Request, Response } from "express";

// Create and configure Express app - exported for testing
export const createApp = (): express.Application => {
  const app = express();

  // Middleware
  app.use(express.json());

  // Hello World endpoint
  app.get("/hello", (req: Request, res: Response) => {
    logger.info("Hello endpoint called!", { structuredData: true });
    res.json({ message: "Hello World from Firebase Functions!" });
  });

  // Health check endpoint
  app.get("/", (req: Request, res: Response) => {
    res.json({ status: "API is running" });
  });

  return app;
};

// Initialize Express app
const app = createApp();

// Export the Express app as a Firebase Function
export const api = onRequest(app);
