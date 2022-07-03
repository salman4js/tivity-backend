const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task : String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
})

module.exports = mongoose.model("Tasks", taskSchema);
