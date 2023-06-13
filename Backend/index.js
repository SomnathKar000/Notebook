const commectDb = require("./db/connnectDb");
require("dotenv").config();
const mongoURL = process.env.DB_URL;
const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

var cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const start = async () => {
  try {
    await commectDb(mongoURL);
    app.listen(port, () => {
      console.log(`Notebook app Backend listening http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
