//Dynamic get values
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/info", (req, res) => {
  console.log(req.body);

  const fname = req.body.fname;
  const lname = req.body.lname;
  const city = req.body.city;
  const result = fname + " " + lname + " is from  " + city;
  res.send(result);
});

app.listen(3000, () => {
  console.log("server is listning 3000 port");
});
