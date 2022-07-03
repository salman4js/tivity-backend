const Task = require("../models/Tasks.js");
const User = require("../models/User.js");

const createTask = async (req,res,next) => {
  try{
    const task = new Task({
      task : req.body.task,
      user : req.params.id
    })
    console.log(task.user)
    if(task){
      await User.findByIdAndUpdate({_id : task.user}, {$push : {tasks : task._id}})
    }
    res.send("Task Added")
    await task.save()
  } catch(err) {
    res.send(err);
  }
}



const allTasksUser = (req,res,next) => {
  Task.find({user : req.params.id})
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const taskUpdater = (req,res,next) => {
  Task.findByIdAndUpdate(req.body.taskId,{
    task : req.body.task
  })
  .then(data => {
    console.log(data)
    res.send("Task Updated!")
  })
  .catch(err => {
    console.log("Error Occured!")
    res.send("Error Occured!")
  })
}

const deleteTask = (req,res,next) => {
  Task.findByIdAndRemove(req.body.taskId)
  .then(data => {
    console.log(data)
    res.send("Task Deleted!")
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
}

module.exports = {
  createTask, allTasksUser, taskUpdater, deleteTask
}
