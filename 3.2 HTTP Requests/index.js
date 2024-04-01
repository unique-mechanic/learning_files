import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me </h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About  </h1>");
});

//assigning port
app.listen(port, () => {
    console.log(`Server running on port ${port}.`); // callback function
});