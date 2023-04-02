// Import dependencies
import express from "express"; // import the express module
import dotenv from "dotenv"; // import the dotenv module
import { axiosGet, axiosPost } from "./helpers/axiosWrapper.js";

dotenv.config(); // load environment variables from a .env file

const app = express(); // creating an instance of the express application

app.set("view engine", "ejs"); // setting the view engine to EJS

app.get("/", (request, response) => {
  const url = process.env.API_URL;

  const data = axiosGet(`${process.env.API_URL}/methods`, process.env.LOG_ERRORS).then((data) => {
    console.log(data);
    if (data != "error") {
      response.render('index', data);
    }
  })
});

app.listen(3000, () => { // starting the server and listening on port 3000
  console.log("Server is running on port 3000");
});