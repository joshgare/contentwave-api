import request from "supertest";
import express from "express";
import * as logger from "firebase-functions/logger";
import { createApp } from "../index";

describe("API Endpoints", () => {
  let app: express.Application;

  beforeEach(() => {
    // Create a fresh Express app for each test using the exported function
    app = createApp();
  });

  describe("GET /hello", () => {
    it("should return a hello world message", async () => {
      const response = await request(app).get("/hello").expect("Content-Type", /json/).expect(200);

      expect(response.body).toEqual({
        message: "Hello World from Firebase Functions!",
      });
    });

    it("should log the request", async () => {
      await request(app).get("/hello");

      expect(logger.info).toHaveBeenCalledWith("Hello endpoint called!", { structuredData: true });
    });
  });

  describe("GET /", () => {
    it("should return API status", async () => {
      const response = await request(app).get("/").expect("Content-Type", /json/).expect(200);

      expect(response.body).toEqual({
        status: "API is running",
      });
    });
  });

  describe("Invalid routes", () => {
    it("should return 404 for non-existent routes", async () => {
      await request(app).get("/non-existent").expect(404);
    });
  });

  describe("JSON body parsing", () => {
    it("should parse JSON bodies correctly", async () => {
      // Add a test POST endpoint for this test
      app.post("/test-json", (req, res) => {
        res.json({ received: req.body });
      });

      const testData = { name: "Test", value: 123 };
      const response = await request(app)
        .post("/test-json")
        .send(testData)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.body).toEqual({
        received: testData,
      });
    });
  });
});
