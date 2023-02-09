const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "2mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

app.use(function (err, req, res, next) {
  console.log("Last error", err);
});

app.use("/", routes);
app.listen(5000, () => console.log("Server is up"));
