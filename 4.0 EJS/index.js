import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const today = new Date();
var dayofWeek = today.getDay();

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    dayofWeek = 0;
    if (dayofWeek === 0 || dayofWeek === 6){
        res.render("index.ejs", {
            dayType: "the Weekend", advice: "it's time to relax"
        });
    }else{
        res.render("index.ejs", {
            dayType: "a weekday", advice: "it's time to work hard"
        });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
// app.get("/", (req, res) => {
//     //res.sendFile(__dirname + "/index.html");
//     dayofWeek = 5;
//     if (dayofWeek === 0 || dayofWeek === 6){
//         res.send("<h1>Hey! It's the weekend, it's time to relax</h1>")
//     }else{
//         res.send("<h1>Hey! It's a weekday, it's time to work hard</h1>")
//     }
//     //res.send("It is " + dayofWeek);
// });


