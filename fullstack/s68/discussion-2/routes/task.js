const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const { verify } = require("../auth");

// log the middlewares in the console to check
// console.log("verify: ", verify);
// console.log("taskController: ", taskController);

router.get("/all", verify, taskController.getAllTasks)
router.post("/", verify, taskController.addTask)
router.patch("/:taskId", verify, taskController.updateTaskStatus)

module.exports = router;
