require("dotenv").config(); 
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
// app.use(cors({
//   origin:[ 'http://localhost:3000', 'https://multivendor-frontend-lyart.vercel.app'],
//   credentials: true
// }));
app.use(cors());

mongoose.connect(process.env.DB_URL)
.then(()=> console.log("MongoDb Conneted Successfully"))
.catch((err)=> console.log("Connection Error on mongodb hello world"))




const productHandler = require('./routeHandlers/productHandler');
const userHandler = require('./routeHandlers/userHanlder');
const cartHandler = require('./routeHandlers/cartHandler');
const eventHandler = require('./routeHandlers/eventhanlder');

app.use('/products', productHandler);
app.use('/user', userHandler);
app.use('/cart', cartHandler);
app.use('/event', eventHandler);

const Product = require('./schemaModels/productSchemaModel');
const Event = require('./schemaModels/evnetSchemaModel');


const fs = require("fs");
const path = require("path");


// Allow frontend connection
app.use(cors());
app.use(express.json());

// Set up Multer to temporarily store uploaded files
// const upload = multer({ dest: "server/uploads/" });

// // Handle product upload
// app.post("/products/upload", upload.array("images", 2), async (req, res) => {
//   try {
//     const imageDir = path.join(__dirname, "../client/src/images");
//     if (!fs.existsSync(imageDir)) {
//       fs.mkdirSync(imageDir, { recursive: true });
//     }

//     const imageUrls = [];

//     req.files.forEach((file, index) => {
//       const ext = path.extname(file.originalname);
//       const newFileName = `product-${Date.now()}-${index}${ext}`;
//       const destPath = path.join(imageDir, newFileName);
//       fs.renameSync(file.path, destPath);
//       imageUrls.push({ url: `/images/${newFileName}` });
//     });

//     req.body.images = imageUrls;
//     req.body.originalPrice = Number(req.body.originalPrice);
//     req.body.discountPrice = Number(req.body.discountPrice);
//     req.body.stock = Number(req.body.stock);
//     req.body.ratings = Number(req.body.ratings);
//     req.body.createdAt = new Date();
//     req.body.soldOut = 0;

//     const result = await Product(req.body).save();
//     res.status(200).send(result);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

const multer = require('multer')
const {put} = require('@vercel/blob')
const storage = multer.memoryStorage();
const upload = multer({ storage });


app.post("/products/upload", upload.array("images", 2), async (req, res) => {
  try {
    const uploadedImages = [];

    for (const file of req.files) {
      const blob = await put(`product-${Date.now()}-${file.originalname}`, file.buffer, {
        access: "public",
        token: "vercel_blob_rw_Qs8TU1vnT8DcWHAc_zdpU9ws5lQqgXajAH1DdxzZy7nff34", // Replace with your actual token
        contentType: file.mimetype,
        contentLength: file.size,
      });

      uploadedImages.push({ url: blob.url });
    }

    req.body.images = uploadedImages;
    req.body.originalPrice = Number(req.body.originalPrice);
    req.body.discountPrice = Number(req.body.discountPrice);
    req.body.stock = Number(req.body.stock);
    req.body.ratings = Number(req.body.ratings);
    req.body.createdAt = new Date();
    req.body.soldOut = 0;
    // req.body.shop = {
    //   "name" : req.body.shop.name,
    //   "shopId" : req.body.shop.shopId,
    //   "description": req.body.shop.description,
    //   "avatar": req.body.shop.avatar,
    // }
    if (req.body.shop) {
        req.body.shop = JSON.parse(req.body.shop);
    }
    console.log(req.body) 
 
    const result = await Product(req.body).save();
    res.status(200).send(result);
  } catch (err) {
    console.error("Upload Error:", err.message);
    res.status(500).json({ error: "Failed to upload product" });
  }
});




app.post("/events/upload", upload.array("images", 2), async (req, res) => {

  console.log("EVnet upload highin");

  try {
    const uploadedImages = [];

    // Process images
    for (const file of req.files) {
      const timestamp = Date.now();
      const publicId = `event-${timestamp}-${file.originalname}`;
      const blob = await put(publicId, file.buffer, {
        access: "public",
        token: "vercel_blob_rw_Qs8TU1vnT8DcWHAc_zdpU9ws5lQqgXajAH1DdxzZy7nff34", // Secure this in env
        contentType: file.mimetype, 
        contentLength: file.size,
      });

      uploadedImages.push({
        publicId,
        url: blob.url,
      });
    }

    // Parse nested shop if needed
    if (req.body.shop) {
      req.body.shop = JSON.parse(req.body.shop);
    }

    const eventData = {
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      startDate: new Date(req.body.startDate),
      finishDate: new Date(req.body.finishDate),
      tags: req.body.tags,
      originalPrice: Number(req.body.originalPrice),
      discountPrice: Number(req.body.discountPrice),
      stock: Number(req.body.stock),
      ratings: req.body.ratings ? Number(req.body.ratings) : 0,
      soldOut: 0,
      createdAt: req.body.createdAt ? new Date(req.body.createdAt) : new Date(),
      images: uploadedImages,
      shop: req.body.shop,
    };
    console.log(eventData)

    const result = await Event(eventData).save();
    res.status(200).send(result);
  } catch (err) {
    console.error("Upload Error:", err.message);
    res.status(500).json({ error: "Failed to upload event/product" });
  }
});



// Server test home route
app.get("/", (req, res) => {
  console.log("world");
  res.send("Hello");
});

// Server run on port 5000
app.listen(port, ()=>{
  console.log("Server is rurring in port", 5000)
})