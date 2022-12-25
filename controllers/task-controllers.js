const { Tasks } = require("../db/schemas/task"); // if Tasks without{} error=>Tasks.find is not a function
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../error/CustomError");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Tasks.find({});
  return res.status(200).json({ tasks });
});

const createATasks = asyncWrapper(async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
});

const getATask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOne({ _id: taskID });
  if (!task) {
    createCustomError(`Can not find a task with ID ${taskID}`, 404);
  }
  res.status(200).json({ task });
});

const patchATask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
  });
  if (!task) {
    return next(
      createCustomError(`Can not find a task with ID ${taskID}`, 404)
    );
  }
  res.status(200).json({ task });
});

const deleteATasK = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Tasks.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Can not find a task with ID ${taskID}`, 404)
    );
  }
  res.status(200).json(`task with ID ${taskID} is deleted`);
});

module.exports = {
  getAllTasks,
  createATasks,
  getATask,
  patchATask,
  deleteATasK,
};
