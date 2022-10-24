const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.port || 5000;

app.get("/", (req, res) => {
  res.send("Now server is Running");
});

app.listen(Port, () => {
  console.log("Server is running", Port);
});
