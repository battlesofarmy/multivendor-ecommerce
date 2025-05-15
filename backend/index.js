require("dotenv").config();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({
  origin:[ 'http://localhost:3000', 'https://multivendor-frontend-lyart.vercel.app'],
  credentials: true
}));

mongoose.connect(process.env.DB_URL)
.then(()=> console.log("MongoDb Conneted Successfully"))
.catch((err)=> console.log("Connection Error on mongodb hello world"))




const productHandler = require('./routeHandlers/productHandler');
const userHandler = require('./routeHandlers/userHanlder');
const cartHandler = require('./routeHandlers/cartHandler');
app.use('/products', productHandler);
app.use('/user', userHandler);
app.use('/cart', cartHandler);





// Server test home route
app.get("/", (req, res) => {
  console.log("world");
  res.send("Hello");
});

// Server run on port 5000
app.listen(port, ()=>{
  console.log("Server is rurring in port", 5000)
})