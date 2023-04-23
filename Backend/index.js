const commectDb = require("./db/connnectDb");
require("dotenv").config();
const mongoURL =
  // "mongodb://localhost:27017/notebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
  "mongodb+srv://Somnath000:som007007@nodeexpressprojects.c4mduyu.mongodb.net/notebook?retryWrites=true&w=majority";

const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

var cors = require("cors");

app.use(cors());

app.use(express.json());

// if (process.env.NODE_STATE === "production") {
//   app.use(express.static(path.resolve(path.dirname(__dirname), "build")));
//   console.log(path.resolve(path.dirname(__dirname), "build"));
//   app.get("*", (req, res) => {
//     res.sendFile(
//       path.resolve(path.dirname(__dirname), "build", "index.html"),
//       function (err) {
//         if (err) {
//           res.status(500).json(err);
//         }
//       }
//     );
//   });
// }

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
