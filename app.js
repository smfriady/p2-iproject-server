if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const routes = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(express.json());

app.use(routes);
app.use(errorHandler);
module.exports = app;
