const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/auth/register", () => {
    it("should response with 200 as status code", async () => {
        const name = "Member";
        const email = "member1@gmail.com";
        const password = "123";

        return request(app)
            .post("/v1/auth/register")
            .set("Content-Type", "application/json")
            .send({name, email, password})
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body).toEqual(
                    expect.objectContaining({
                        accessToken,
                    })
                );
            });
    });
});
