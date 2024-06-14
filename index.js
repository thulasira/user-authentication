const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const Connection = require("./database/db");
const authRoute = require("./route/route");

const PORT = process.env.PORT || 5050;

// Initialize database connection
Connection();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes setup
app.use("/api", authRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

module.exports = app;
