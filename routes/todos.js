const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

router.post("/create", Controllers.Todos.create);
router.post("/delete", Controllers.Todos.destroy);
router.post("/show", Controllers.Todos.show);
router.post("/showall", Controllers.Todos.showAll);
router.post("/update", Controllers.Todos.update);

module.exports = router;
