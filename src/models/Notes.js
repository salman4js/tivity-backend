const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title : String,
  note : String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
})

module.exports = mongoose.model("Notes", noteSchema);
