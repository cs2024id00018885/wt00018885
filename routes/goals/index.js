const express = require("express");
const router = express.Router();
const goalController = require("../../controllers/goals");

router.get("/", goalController.getAll);
router.get("/add", goalController.getAdd);
router.post("/add", goalController.postAdd);
router.get("/edit/:id", goalController.getEdit);
router.post("/edit/:id", goalController.postEdit);
router.get("/delete/:id", goalController.deleteGoal);

module.exports = router;
