const TodosService = require("../services/todos");

module.exports = {
  /**
   * @openapi
   * paths:
   *   /todos:
   *     post:
   *       parameters:
   *         - in: body
   *           name: body
   *           required: true
   *           description: Todo item to create
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 description: The name of the todo item
   *               status:
   *                 type: string
   *                 enum: ["not started", "in progress", "completed"]
   *                 description: The status of the todo item
   *               dueDate:
   *                 type: string
   *                 format: date-time
   *                 description: The due date of the todo item
   *               notes:
   *                 type: string
   *                 description: Notes related to the todo item
   *       responses:
   *         201:
   *           description: Successful creation of a new todo item
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: string
   *                     format: uuid
   *                     description: The unique identifier of the todo item
   *         400:
   *           description: All fields are required
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   error:
   *                     type: string
   *                     description: Error message
   */
  create: async (req, res) => {
    const { name, status, dueDate, notes } = req.body;

    if (!name || !status || !dueDate || !notes) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const id = await TodosService.create(name, status, dueDate, notes);

    res.status(201).json({ id });
  },
  /**
   * @openapi
   * paths:
   *   /todos/{id}:
   *     delete:
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: ID of the Todo to delete
   *           schema:
   *             type: string
   *       responses:
   *         200:
   *           description: Success
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   message:
   *                     type: string
   *                     example: Record deleted successfully
   *         400:
   *           description: Bad Request
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   error:
   *                     type: string
   *                     example: There is nothing to delete
   */
  destroy: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "There is nothing to delete" });
    }

    await TodosService.destroy(id);
    res.json({ message: "Record deleted successfully" });
  },
  /**
   * @openapi
   * paths:
   *   /todos/{id}:
   *     get:
   *       parameters:
   *         - in: path
   *           name: id
   *           required: true
   *           description: ID of the Todo to retrieve
   *           schema:
   *             type: string
   *       responses:
   *         200:
   *           description: Success
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   todo:
   *                     type: object
   *                     properties:
   *                       id:
   *                         type: string
   *                         example: 5a0e3318-38f9-4a9b-a497-411050042f91
   *                       name:
   *                         type: string
   *                         example: Test Todo
   *                       notes:
   *                         type: string
   *                         example: This is a test todo
   *                       dueDate:
   *                         type: string
   *                         example: 2023-03-10
   *                       status:
   *                         type: string
   *                         example: not started
   *         404:
   *           description: Not Found
   *           content:
   *             application/json:
   *               schema:
   *                 type: object
   *                 properties:
   *                   message:
   *                     type: string
   *                     example: Element with that id is not found
   */
  show: async (req, res) => {
    const { id } = req.params;

    const todo = await TodosService.show(id);

    if (todo.Item) {
      return res.json({ todo: todo.Item });
    } else {
      return res
        .status(404)
        .json({ message: "Element with that id is not found" });
    }
  },

  showAll: async (req, res) => {
    const { status } = req.query;

    const todos = await TodosService.showAll(status);

    res.json({ todos: todos.Items });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, status, dueDate, notes } = req.body;

    const result = await TodosService.update(id, name, status, dueDate, notes);

    res.json({ message: "Updated succesfully" });
  },
};
