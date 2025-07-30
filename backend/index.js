const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load .env

const connectDB = require("./config/db"); // DB connection

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.send("QuickForms backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
