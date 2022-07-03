const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email : String,
  username : String,
  password : String,
  profile : String,
  phonenumber : {type : String},
  tasks : [{
    type : mongoose.Schema.Types.Object,
    ref : "Tasks"
  }],
  notes : [{
    type : mongoose.Schema.Types.Object,
    ref : "Notes"
  }],
  meetings : [{
    type : mongoose.Schema.Types.Object,
    ref : "Meetings"
  }],
  expenses : [{
    type : mongoose.Schema.Types.Object,
    ref : "Expenses"
  }],
  incomes : [{
    type : mongoose.Schema.Types.Object,
    ref : "Incomes"
  }],
  balance : {type : Number, default : 0}
}, {timestamp : true})

module.exports = mongoose.model("User", userSchema);
