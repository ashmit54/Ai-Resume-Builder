const express =require("express");
const cookieParser = require("cookie-parser");
const cors =require("cors");

const app=express(); //server ka instance create kiya

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(express.json()); //middleware use kiya express.json jisse req.body mein data read kr paaye
/*  require all the routes here */

app.use(cookieParser());
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes")

/* using all the routes here */
app.use("/api/auth",authRouter); /* auth related jitni bhi api hoti hai usko access krne ke liye /api/auth 
prefix lgana jruri hai */
app.use("/api/interview", interviewRouter)


module.exports=app;