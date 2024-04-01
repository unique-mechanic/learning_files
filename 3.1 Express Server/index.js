//import express from express module
import express from "express";
const app = express();
const port = 3000;

//assigning port
app.listen(port, () => {
    console.log(`Server running on port ${port}.`); // callback function
});