const mongoose = require("mongoose");
const date = Date.now()

const expenseSchema = new mongoose.Schema({
  title : String,
  amount : {type : String, default : 0},
  type : String,
  expense : String,
  date : { type: String},
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
})

module.exports = mongoose.model("Expenses", expenseSchema)
