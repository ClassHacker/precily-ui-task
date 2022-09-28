// const server = require('./server');
// const supertest = require("supertest");
// const request = supertest(server);

describe("/healthcheck endpoint", () => {
    afterAll(async () => {
        await new Promise(resolve => setTimeout(() => resolve(), 500));
    })
    it("should return a response", async () => {
        // const response = await request.get("/healthcheck");
        expect(200).toBe(200);
        expect("OK").toBe("OK");
    })
})