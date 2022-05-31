const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const donors = require("./router/donor");
const receiver = require("./router/receiver");
dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("./router/auth"));
app.use("/api", receiver);
app.use(cookieParser());
app.use("/api", donors);
// const User = require('./model/userSchema');
// const user= require('./router/auth');
// Middleware
// const middleware = (req, res, next)=>{
//     console.log('Hello my middleware');
//     next();
// }

// app.get('/',middleware,async (req,res)=>{
//     res.send("Hello World");
// });
app.get("/about", async (req, res) => {
  res.send("Hello World ABout");
});
app.get("/contact", async (req, res) => {
  // res.cookie("Test",'gaurav')
  res.send("Hello World Contact");
});
// app.get('/signin',async (req,res)=>{
//     res.send("Hello World signin");
// });
// app.get('/signup',async (req,res)=>{
//     res.send("Hello World signup");
// });
mongoose
  .connect("mongodb://localhost/PlasmaWebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}...`));
