/**
 * @module Boletus/controller
 * @description Este modulo ofrece la administración de boletas de votantes
 */
const TodosService = require("../services/todos");

module.exports = {
  /**
   * @openapi
   * /todos:
   *   post:
   *     tags:
   *       - Todos
   *     summary: Creates a new todo
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - name
   *               - status
   *               - dueDate
   *               - notes
   *             properties:
   *               name:
   *                 type: string
   *               status:
   *                 type: string
   *                 enum:
   *                   - not started
   *                   - in progress
   *                   - completed
   *               dueDate:
   *                 type: string
   *                 format: date
   *               notes:
   *                 type: string
   *     responses:
   *       201:
   *         description: Todo created
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 todo:
   *                   type: object
   *                   properties:
   *                     name:
   *                       type: string
   *                     status:
   *                       type: string
   *                     dueDate:
   *                       type: string
   *                     notes:
   *                       type: string
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: All fields are required
   */
  create: async (req, res) => {
    const { name, status, dueDate, notes } = req.body;

    if (!name || !status || !dueDate || !notes) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const todo = await TodosService.create(name, status, dueDate, notes);
    res.json({ todo });
  },

  destroy: async (req, res) => {},

  show: async (req, res) => {},

  showAll: async (req, res) => {},

  update: async (req, res) => {},
};
