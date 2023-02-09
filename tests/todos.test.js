const request = require("supertest");
const app = require("../app/app");

describe("POST /todos", () => {
  let server;

  beforeEach(() => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should create a new todo", async () => {
    const res = await request(server)
      .post("/todos")
      .send({
        name: "Test Todo",
        status: "not started",
        dueDate: "2023-03-10",
        notes: "This is a test todo",
      })
      .expect(201);

    expect(res.body).toHaveProperty("todo");
    expect(res.body.todo).toHaveProperty("name", "Test Todo");
    expect(res.body.todo).toHaveProperty("status", "not started");
    expect(res.body.todo).toHaveProperty("dueDate", "2023-03-10");
    expect(res.body.todo).toHaveProperty("notes", "This is a test todo");
  });

  it("should return bad request if required fields are missing", async () => {
    const res = await request(server)
      .post("/todos")
      .send({
        name: "Test Todo",
        status: "not started",
      })
      .expect(400);

    expect(res.body).toHaveProperty("error", "All fields are required");
  });
});
