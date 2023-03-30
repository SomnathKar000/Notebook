const mongoose = require("mongoose");
const mongoURL =
  // "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
  "mongodb+srv://Somnath000:som007007@nodeexpressprojects.c4mduyu.mongodb.net/notebook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURL, () => {
    console.log("Connected to MongoDB");
  });
};
module.exports = connectToMongo;
