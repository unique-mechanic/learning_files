import express from "express";
import morgan from "morgan";

//importing body parser
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

  app.post("/submit", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    console.log(req.body);
    res.send(
      "<h1>Your new band name is</h1>" +
      "<h2>" + req.body.street + req.body.pet + "👌</h2>" 
      );
  });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use((req, res, next) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

