import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request URL: ", req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
  //console.log("response: " + res.get("Head")); doesn't do anything. Returns undefined.
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
