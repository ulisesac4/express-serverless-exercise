const request = require("supertest");
const app = require("../app/app").app;

describe("POST /todos", () => {
  let server = app;

  beforeEach(() => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should return 201 and the id of the newly created todo item", async () => {
    const response = await request(server).post("/todos").send({
      name: "Test Todo",
      status: "Incomplete",
      dueDate: "2023-02-10",
      notes: "Test notes",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("should return 400 if a required field is missing", async () => {
    const response = await request(server).post("/todos").send({
      name: "Test Todo",
      status: "Incomplete",
      dueDate: "",
      notes: "Test notes",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
