const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.port || 5000;

const courses = require("./data/courses.json")

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(Port, () => {
  console.log("Server is running", Port);
});
