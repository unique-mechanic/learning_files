import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "uma2";
const yourPassword = "uma2";
const yourAPIKey = "c9752a75-3e64-4238-b3a3-c5345277baa2";
const yourBearerToken = "0089a31c-ec17-4c4c-9dbc-17178368b7df";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data);
    console.log(result);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
    axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    })
      .then(response => {
        // Handle successful response
        console.log('Data:', response.data);
        const result = JSON.stringify(response.data);
        res.render("index.ejs", { content: result });
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });
});

app.get("/apiKey", (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  axios.get("https://secrets-api.appbrewery.com/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      }
    })
      .then(response => {
        // Handle successful response
        console.log('Data:', response.data);
        const result = JSON.stringify(response.data);
        res.render("index.ejs", { content: result });
      })
      .catch(error => {
        // Handle error
        console.error('Error:', error);
      });

});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  axios.get("https://secrets-api.appbrewery.com/secrets/42", {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`,
    }
  })
    .then(response => {
      // Handle successful response
      console.log('Data:', response.data);
      const result = JSON.stringify(response.data);
      res.render("index.ejs", { content: result });
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
