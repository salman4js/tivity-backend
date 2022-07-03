const User = require("../models/User");
const Task = require("../models/Tasks")


const signin = (req,res,next) => {
  const user = new User({
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    profile : req.body.profile,
    phonenumber : req.body.phonenumber
  })
  user.save()
  .then(user => {
    res.send(true)
    console.log(user)
  })
  .catch(err => {
    res.send("Error Occured", + err)
  })
}

const allUsers = (req,res,next) => {
  User.find({})
  .then(data => {
    res.send(data)
    console.log(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const updateData = (req,res,next) => {
  User.findByIdAndUpdate(req.params.id,{
    username : req.body.username,
    email : req.body.email,
    phonenumber : req.body.phonenumber,
    profile : req.body.profile
  })
  .then(data => {
    console.log("User data updated successfully!")
    res.send(true)
  })
  .catch(err => {
    console.log(err)
    res.send("Some stupid error!")
  })
}

const singleUser = (req,res,next) => {
  id = req.params.id
  User.find({_id : id })
  .then(data => {
    res.send(data)
    console.log(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
}

const deleteUser = (req,res,next) => {
  User.findByIdAndRemove(req.body.id)
  .then(data => {
    res.send("User Deleted!")
  })
}

const login = (req,res,next) => {
  email = req.body.email,
  password = req.body.password

  User.findOne({email : email})
  .then(user => {
      if(user){
        if(user.password !== password){
          res.send(false)
        } else {
          res.send(user._id)
        }
      } else {
        res.send("0")
      }
  })
}

const updateBalance = (req,res,next) => {
  const user = new User({
    balance : req.body.balance
  })
  user.save()
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}


module.exports = {
 signin, allUsers, deleteUser, login, updateBalance, singleUser, updateData
}
