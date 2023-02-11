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
      status: "completed",
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

describe("GET /todos/:id", () => {
  let server = app;

  beforeEach(async () => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should return 200 and the Todo data when fetching an existing Todo", async () => {
    const createdTodo = await request(server).post("/todos").send({
      name: "Test Todo",
      status: "completed",
      dueDate: "2023-02-10",
      notes: "Test notes",
    });
    const id = createdTodo.body.id;

    const response = await request(app).get(`/todos/${id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.todo.id).toBe(id);
    expect(response.body.todo.name).toBe("Test Todo");
    expect(response.body.todo.notes).toBe("Test notes");
    expect(response.body.todo.dueDate).toBe("2023-02-10");
    expect(response.body.todo.status).toBe("completed");
  });

  it("should return 404 and an error message when fetching a non-existing Todo", async () => {
    const response = await request(app).get("/todos/fake-id");

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      message: "Element with that id is not found",
    });
  });
});

describe("GET /todos", () => {
  let server = app;

  beforeEach(async () => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should return 200 and all Todos with no filter", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(200);
    expect(response.body.todos).toBeInstanceOf(Array);
    expect(response.body.todos.length).toBeGreaterThan(0);
  });

  it("should return 200 and filtered Todos when a status query parameter is passed", async () => {
    const status = "completed";
    const response = await request(app).get(`/todos?status=${status}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.todos).toBeInstanceOf(Array);
    expect(response.body.todos.length).toBeGreaterThan(0);
    response.body.todos.forEach((todo) => {
      expect(todo.status).toBe(status);
    });
  });
});

describe("PATCH /todos/{id}", () => {
  let server = app;

  beforeEach(async () => {
    server = app.listen();
  });

  afterEach(() => {
    server.close();
  });

  it("should return 200 and update a Todo when all required information is provided", async () => {
    const temp = await request(server).post("/todos").send({
      name: "Test Todo",
      status: "in progress",
      dueDate: "2023-02-10",
      notes: "Test notes",
    });

    const id = temp.body.id;
    const payload = {
      name: "New name",
      status: "completed",
      dueDate: "2023-02-10",
      notes: "New notes",
    };

    const response = await request(app).patch(`/todos/${id}`).send(payload);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Updated succesfully");
  });
});
