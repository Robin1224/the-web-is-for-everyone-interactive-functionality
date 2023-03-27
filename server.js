// Import dependencies
import express from "express"; // import the express module
import dotenv from "dotenv"; // import the dotenv module
import { axiosGet, axiosPost } from "./helpers/axiosWrapper.js"; // import the axiosGet and axiosPost functions from the axiosWrapper.js file
import { index } from "./helpers/routes.js"; // import the router object from the routes.js file

dotenv.config(); // load environment variables from a .env file

const app = express(); // creating an instance of the express application

app.set("view engine", "ejs"); // setting the view engine to EJS

app.get("/", index); // setting the index route to the index function in the routes.js file;

app.listen(3000, () => { // starting the server and listening on port 3000
  console.log("Server is running on port 3000");
});