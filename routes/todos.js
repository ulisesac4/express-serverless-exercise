const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/", Controllers.Todos.create);
router.delete("/", Controllers.Todos.destroy);
router.get("/:id", Controllers.Todos.show);
router.get("/", Controllers.Todos.showAll);
router.patch("/:id", Controllers.Todos.update);

module.exports = router;
