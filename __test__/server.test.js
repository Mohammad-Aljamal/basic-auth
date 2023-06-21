'use strict';

const { app } = require("../src/server");
const { db } = require("../src/auth/models/index");
const supertest = require("supertest");
const mockServerMethods = supertest(app);
beforeAll(async () => {
  await db.sync();
});
describe("Authentication Routes", () => {
  describe("POST /signup", () => {
    test("should create a new user", async () => {
      const response = await mockServerMethods
        .post("/signup")
        .send({ username: "motasem", password: "abc" });
      expect(response.status).toBe(201);
      expect(response.body.username).toBe("motasem");
    });
  });
})
afterAll(async () => {
  await db.drop();
});