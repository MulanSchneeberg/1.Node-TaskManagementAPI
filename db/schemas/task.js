const mongoose = require("mongoose");
const { Schema } = mongoose;
const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [20, "must not be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

const Tasks = mongoose.model("Tasks", TaskSchema);
module.exports = { Tasks };
