const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createATasks,
  getATask,
  patchATask,
  deleteATasK,
} = require("../controllers/task-controllers");

// get all the tasks =app.get('/api/v1/tasks')
// create a new task= app.post('/api/v1/tasks')
// get single task= app.get('/api/v1/tasks/:id')
// update task=app.patch('/api/v1/tasks/:id')
// delete task=app.delete(''/api/v1/tasks/:id'')
router.route("/").get(getAllTasks).post(createATasks);
router.route("/:id").get(getATask).patch(patchATask).delete(deleteATasK);

module.exports = router;
