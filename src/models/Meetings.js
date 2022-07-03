const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
  meeting : String,
  title : String,
  time : String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
})

module.exports = mongoose.model("Meetings", meetingSchema);
