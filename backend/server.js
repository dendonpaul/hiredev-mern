const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5001;

const Connection = require("./db/Connection");

if (Connection) {
  console.log("DB Connected");
  app.listen(port, () => console.log(`Server Running on PORT: ${port}`));
} else {
  console.log("DB Connection Failed");
}
