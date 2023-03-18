const express = require("express");
const app = express();
const port = process.env.PORT || 5001;
require("dotenv").config();
const Connection = require("./db/Connection");

if (Connection) {
  console.log("DB Connected");
  app.listen(port, () => console.log(`Server Running on PORT: ${port}`));
} else {
  console.log("DB Connection Failed");
}
