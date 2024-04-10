import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(response.data);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

// app.post("/", async (req, res) => {
//   //console.log(req.body);
//   console.log(req.body.type);
//   console.log(req.body.participants);
//   if(req.body.type && req.body.participants){
//     const activityType = req.body.type;
//     const participantsNum = req.body.participants;
//     console.log(activityType);
//     console.log(participantsNum)
//     try {
//       const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activityType}&participants=${participantsNum}`);
//       const result = response.data;
//       //console.log(response.data);
      
//       const randomNumber = Math.floor(Math.random()*response.data.length);
//       const result2 = result[randomNumber];
//       //
//       res.render("index.ejs", { data: result2 });
//     } catch (error) {
//       console.error("Failed to make request:", error.message);
//       res.render("index.ejs", {
//         error: error.message,
//       });
//     }
//   }else if(req.body.type){
//     const activityType = req.body.type;
//     console.log(activityType);
//     try {
//       const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activityType}`);
//       const result = response.data;
//       //console.log(response.data);
//       const randomNumber = Math.floor(Math.random()*response.data.length);
//       const result2 = result[randomNumber];
//       res.render("index.ejs", { data: result2 });
//     } catch (error) {
//       console.error("Failed to make request:", error.message);
//       res.render("index.ejs", {
//         error: error.message,
//       });
//     }
//   }else{
//     const participantsNum = req.body.participants;
//     console.log(participantsNum);
//     try {
//       const response = await axios.get(`https://bored-api.appbrewery.com/filter?participants=${participantsNum}`);
//       const result = response.data;
//       //console.log(response.data);
//       const randomNumber = Math.floor(Math.random()*response.data.length);
//       const result2 = result[randomNumber];
//       res.render("index.ejs", { data: result2 });
//     } catch (error) {
//       console.error("Failed to make request:", error.message);
//       res.render("index.ejs", {
//         error: error.message,
//       });
//     }
//   }

//   // Step 2: Play around with the drop downs and see what gets logged.
//   // Use axios to make an API request to the /filter endpoint. Making
//   // sure you're passing both the type and participants queries.
//   // Render the index.ejs file with a single *random* activity that comes back
//   // from the API request.
//   // Step 3: If you get a 404 error (resource not found) from the API request.
//   // Pass an error to the index.ejs to tell the user:
//   // "No activities that match your criteria."
//   //res.render("index.ejs",);
// });

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});


//-------------You can always code better----------------

app.post("/", async (req, res) => {
      let response;
    try {
      if(req.body.type && req.body.participants){
        const activityType = req.body.type;
        const participantsNum = req.body.participants;
        response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activityType}&participants=${participantsNum}`);
      }else if(req.body.type){
        const activityType = req.body.type;
        response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${activityType}`);
      }else{
        const participantsNum = req.body.participants;
        response = await axios.get(`https://bored-api.appbrewery.com/filter?participants=${participantsNum}`);
      }
      const result = response.data;
      const randomNumber = Math.floor(Math.random()*response.data.length);
      const result2 = result[randomNumber];
    
      res.render("index.ejs", { data: result2 });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });