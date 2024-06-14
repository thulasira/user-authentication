const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const Connection = require("./database/db");
const PORT = 5050;
const authRoute = require("./route/route");
Connection();
// updatd code
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/api", authRoute);
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});