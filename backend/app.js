const express = require("express");
// const ErrorHandler = require("./middleware/error");
const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors({
  origin:[ 'http://localhost:3000', 'https://multivendor-frontend-lyart.vercel.app'],
  credentials: true
}));



const productHandler = require('./routeHandlers/productHandler');
app.use('/products', productHandler);



app.get("/", (req, res) => {
  console.log("world");
  res.send("Hello");
});

module.exports = app;




// app.use(cookieParser());


// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "config/.env",
//   });
// }

// import routes
// const user = require("./controller/user");
// const shop = require("./controller/shop");
// const product = require("./controller/product");
// const event = require("./controller/event");
// const coupon = require("./controller/coupounCode");
// const payment = require("./controller/payment");
// const order = require("./controller/order");
// const conversation = require("./controller/conversation");
// const message = require("./controller/message");
// const withdraw = require("./controller/withdraw");

// app.use("/api/v2/user", user);
// app.use("/api/v2/conversation", conversation);
// app.use("/api/v2/message", message);
// app.use("/api/v2/order", order);
// app.use("/api/v2/shop", shop);
// app.use("/api/v2/product", product);
// app.use("/api/v2/event", event);
// app.use("/api/v2/coupon", coupon);
// app.use("/api/v2/payment", payment);
// app.use("/api/v2/withdraw", withdraw);

// it's for ErrorHandling
// app.use(ErrorHandler);


