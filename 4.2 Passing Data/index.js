import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    htmlContent: "<h1>Enter your full name here</h1>",
  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  var count = req.body.fName + req.body.lName;
  count =  count.length;
  const data = {
    htmlContent: `<h1>There are ${count} letters in your name.</h1>`,
    type: {name: "Uma", job: "IT"} //test
  };
  //res.send();
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
