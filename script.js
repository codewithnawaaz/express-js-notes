const express = require("express");
const app = express();

app.set("view engine", "ejs");
// dynamic rout change user name as per req
app.use(express.static("./public"));
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/profile/:username", function (req, res) {
  res.send(`hi i am ${req.params.username}`);
});
app.listen(3000);
