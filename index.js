const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.port || 5000;

const courses = require("./data/courses.json")

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id",(req,res)=> {
  const id = req.params.id;
  // console.log(id);
  const selectedCourse = courses.find(c => c.id == id)
  if(!selectedCourse){
    res.send('your data is not found')
  }
   res.send(selectedCourse)
})

app.listen(Port, () => {
  console.log("Server is running", Port);
});
