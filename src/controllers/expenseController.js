const Expense = require("../models/Expenses.js");
const User = require("../models/User.js");

const addExpense = async(req,res,next) => {
  try {
    const expense = new Expense({
      title : req.body.title,
      amount : req.body.amount,
      type : req.body.type,
      expense : req.body.expense,
      date : req.body.date,
      user : req.params.id
    })
    if(expense){
      await User.findByIdAndUpdate({_id : expense.user},
      {$push : {expenses : expense._id}})
    }
    res.send("Expenses Added")
    await expense.save()
  } catch(err) {
    res.send(err);
  }
}

const allExpensesUser = (req,res,next) => {
  Expense.find({user : req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

const expenseType = (req,res,next) => {
  Expense.find({user : req.params.id, type : req.body.type})
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const received = (req,res,next) => {
  var income = []
  var expense = []

  Expense.find({user : req.params.id, type : "Expense"})
      .then(data => {
        data.map((item,key) => {
          expense.push(parseInt(item.amount))
        })
      }) 
    Expense.find({user : req.params.id, type : "Income"})
    .then(data => {
      data.map((item,key) => {
        income.push(parseInt(item.amount))
        
      })
     
      
      let sum = 0;
      let sub = 0;

      for(i = 0; i < income.length; i++){
        console.log(income[i])
        sum += income[i];
      }

      for(j = 0; j < expense.length; j++){
        sub += expense[j];
      }

      const bal = sum - sub;
      const balance = bal.toString()
      res.send(balance);
    })
}

const averageOthers = (req,res,next) => {
  var values = [];
  var income = 0;
  Expense.find({user : req.params.id, expense : req.body.expense})
  .then(data => {
    data.map((item,key) => {
      values.push(parseInt(item.amount))
    })
    let sum = 0;
    console.log(sum);
    for(i = 0; i < values.length; i++){
      sum += values[i]
    }
    console.log(values)
    console.log(sum);
    let average = sum / 2;
    console.log(average);
    Expense.find({user : req.params.id, type : "Income"})
    .then(data => {
      data.map((item,key) => {
        income += parseInt(item.amount)
      })
      console.log(income);
      var result = average / income * 100;
      res.send(result.toString())
    })
  })
  .catch(err => {
    console.log(err)
    res.send("Some Stupid Error!")
  })
}

const expenseArray = (req,res,next) => {
  var expenseCheck = []
  Expense.find({user : req.params.id, type : "Expense"})
  .then(data => {
    data.map((item,key) => {
      expenseCheck.push(parseInt(item.amount))
    })
    console.log(expenseCheck)
  })
}


module.exports = {
  allExpensesUser, addExpense, expenseType, received, expenseArray, averageOthers
}
