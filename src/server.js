const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");


const app = express();
app.use(bodyParser.json());
app.use(cors());

const serverRoute = require("./routes/Route");

const mongodb = "mongodb+srv://tivity:pamelia2@cluster0.elmfx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongodb,{
  useNewUrlParser : true,
})

mongoose.connection.on("connected", () => {
  console.log("Database connected!");
})

mongoose.connection.on("error", (err) => {
  console.log("Some stupid error!", err)
})

app.use("/.netlify/functions/server",serverRoute)

module.exports.handler = serverless(app)
