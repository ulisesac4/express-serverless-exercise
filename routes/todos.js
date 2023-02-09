const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.Todos.create);
router.delete("/delete", Controllers.Todos.destroy);
router.get("/show", Controllers.Todos.show);
router.get("/showall", Controllers.Todos.showAll);
router.patch("/update", Controllers.Todos.update);

module.exports = router;
