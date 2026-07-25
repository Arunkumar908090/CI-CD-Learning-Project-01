const request = require("supertest");
const app = require("../app");

describe("GET /", () => {

    test("should return status 200", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

    });

    test("should return JSON message", async () => {

        const response = await request(app).get("/");

        expect(response.body.message)
            .toBe("Hello from Simple App (Node)");

    });

});
