// const express = require("express");
// require("dotenv").config({path : "./.env"})

// const app = express();

// // Logger
// const logger = require("morgan");
// app.use(logger("tiny"))

// // Routes Code
// app.use("/", require("./routes/indexRouter"))

// //  error handling

// const ErrorHandler = require("./utils/ErrorHandler");
// app.all("*", (req, res , next)=> {
//     next(new ErrorHandler(`url not found ${req.url}`, 404))
// })

// app.listen(process.env.PORT ,
//      console.log(`sever running port ${process.env.PORT}`))

const express = require("express");
require("dotenv").config({path : "./.env"})
const logger = require("morgan")

const app = express();

// Logger

app.use(logger("tiny"))
app.get("/", (req, res) => {
    res.send("Hello dosto");


})
// server running status
app.listen(process.env.PORT, 
    console.log(`Server running on ${process.env.PORT}`))
