const express =require("express");

const app=express(); //server ka instance create kiya

app.use(express.json()); //middleware use kiya express.json jisse req.body mein data read kr paaye
/*  require all the routes here */
const authRouter = require("./routes/auth.routes");


/* using all the routes here */
app.use("/api/auth",authRouter); /* auth related jitni bhi api hoti hai usko access krne ke liye /api/auth 
prefix lgana jruri hai */

module.exports=app;