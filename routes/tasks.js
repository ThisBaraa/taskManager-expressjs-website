var express = require("express");
var router = express.Router();
var {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask,
} = require("../controllers/controll.tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;