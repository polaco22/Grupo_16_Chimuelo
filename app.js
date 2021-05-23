const path = require('path');
const express = require ('express');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.listen(3000,()=> console.log("Server Start in http://localhost:3000"))

app.get("/", (req,res)=> res.sendFile(path.resolve(__dirname, "./views","home.html")))
app.get("/register", (req,res)=> res.sendFile(path.resolve(__dirname, "./views","register.html")))
app.get("/login", (req,res)=> res.sendFile(path.resolve(__dirname, "./views","login.html")))