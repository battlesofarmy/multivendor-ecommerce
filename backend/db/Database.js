const mongoose = require('mongoose');

const connectDatabase = ()=> {

  // Check the db Connection
  mongoose.connect(process.env.DB_URL)
  .then(()=> console.log("MongoDb Conneted Successfully"))
  .catch((err)=> console.log("Connection Error on mongodb"))
}
module.exports = connectDatabase;