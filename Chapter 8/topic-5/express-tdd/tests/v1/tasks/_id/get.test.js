const request = require("supertest");
const app = require("../../../../app");
const { Task } = require("../../../../app/models");

describe("GET /v1/tasks/:id", () => {
  let task;

  beforeEach(async () => {
    task = await Task.create({
      name: "Test",
      prompt: "Hello",
    });

    return task;
  });

  afterEach(() => task.destroy());

  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/tasks/" + task.id)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            name: task.name,
            prompt: task.prompt,
          })
        );
      });
  });

  it("should response with 404 as status code", async () => {
    return request(app)
      .get("/v1/tasks/-100")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              message: expect.any(String),
            },
          })
        );
      });
  });
});
