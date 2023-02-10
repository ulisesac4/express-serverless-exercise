const request = require("supertest");
const TodosService = require("../services/todos/index");
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

describe("DELETE /todos/:id", () => {
  let server = app;

  beforeEach(() => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should return 200 and a success message if the record was deleted", async () => {
    const id = await TodosService.create(
      "Some name",
      "open",
      "2023-02-10",
      "Some notes"
    );

    const response = await request(server).delete(`/todos/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ message: "Record deleted successfully" });
  });
});
