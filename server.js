const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");
const app=express();

require("dotenv/config");
mongoose.pluralize(null);
mongoose.set("strictQuery",true);


app.use(express.json());
app.use(cors());
app.options("*",cors());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorHandler);
// const router = require('./routes/index')
// app.use('/api' , router)


const users = require("./route/users");
app.use('/users' , users) 
mongoose
      .connect(process.env.CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("connected!"))
    .catch((err)=> {
        console.log(err);
    })

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server listen successfully: http://localhost:${PORT}`);
});
