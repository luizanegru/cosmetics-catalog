const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
// const cors = require("cors");

const staticHtmlPath = filename =>
  path.join(__dirname, "assets/${filename}.html");

app.use(express.static("assets"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  return res.sendFile(__dirname + "/assets/home.html");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.get("/assets/user", function(req, res) {
  return fs.readFile("/assets/user", function(err, data) {
    if (err) throw err;

    var users = JSON.parse(data);
    return res.status(200).send(users);
  });
});
