const TodosService = require("../services/todos");

module.exports = {
  create: async (req, res) => {
    const { name, status, dueDate, notes } = req.body;

    if (!name || !status || !dueDate || !notes) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const todo = await TodosService.create(name, status, dueDate, notes);
    res.status(201).json({ todo });
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

  show: async (req, res) => {
    const { id } = req.params;

    const todo = await TodosService.show(id);
    if (todo.Item) {
      return res.json({ todo });
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
