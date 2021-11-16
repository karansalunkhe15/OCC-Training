//form validation using js
const express = require("express");
const server = express();
const port = 3000;
// To access request data in json format we are using below middleware
server.use(express.json());
// To access request data from urlencoding we are using below middlware
server.use(express.urlencoded({ extended: true }));

// '/'->default page/ home page
server.get("/", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  resp.sendFile(__dirname + "/index.html");
});
// '/welcome'->url path using GET
server.get("/welcome", (req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  const city = req.query.city;
  if (firstName.length == 0 || firstName === "") {
    console.log("First Name is required ");
    resp.send("First Name is required");
  } else {
    console.log("GET First Name :" + firstName);
    console.log("GET Last Name :" + lastName);
    console.log("GET City Name :" + city);
    resp.sendFile(__dirname + "/welcome.html");
  }
});
//share the css file
server.get("/css/style.css", (req, resp) => {
  resp.sendFile(__dirname + "/css/style.css");
});

//share the css file
server.get("/js/validate.js", (req, resp) => {
  resp.sendFile(__dirname + "/js/validate.js");
});

// '/welcome'->url path using POST
server.post("/welcome", (req, resp) => {
  const firstName = req.body.firstName;
  console.log("Post First Name: " + firstName);
  resp.setHeader("Content-Type", "text/html");
  resp.sendFile(__dirname + "/welcome.html");
});

server.listen(port, () => {
  console.log(`http://localhost:${port} started `);
});
