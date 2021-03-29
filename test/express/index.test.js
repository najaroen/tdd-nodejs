const request = require('supertest');
const app = require('../../index');

describe("get path /test", () => {
    test("It should response statusCode method GET", (done) => {
        request(app.app)
            .get("/test")
            .then((response) => {
                expect(response.statusCode).toBe(400);
                done();
            })
    })
})