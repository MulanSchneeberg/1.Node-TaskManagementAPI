const express = require("express");
const app = express();
const port = 3000;
const tasksRouter = require("./routers/tasks-router");
const connectDB = require("./db/connection/connect");
const not_found = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();
// get all the tasks =app.get('/api/v1/tasks')
// create a new task= app.post('/api/v1/tasks')
// get single task= app.get('/api/v1/tasks/:id')
// update task=app.patch('/api/v1/tasks/:id')
// delete task=app.delete(''/api/v1/tasks/:id'')
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);
app.use(not_found);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("successfully connected to DB");
    app.listen(port, () => {
      console.log(`The application starts on port ${port} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
