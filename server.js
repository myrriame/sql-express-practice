const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://azhfhwpn:5VPylMsT0XOBlEO8RxxKXAOjumxSDY6u@queenie.db.elephantsql.com:5432/azhfhwpn");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create an endpoint to retrieve all Classes
// Create an endpoint to retrieve all Students
// Create an endpoint to retrieve all Teachers
// Create an endpoint to retrieve all Students given a specific Class ID
// Create an endpoint to retrieve all Classes given a specific Teacher ID
// Create an endpoint to retrieve a single Class given a specific ID
// Create an endpoint to retrieve a single Student given a specific ID
// Bonus:
// Modify your endpoint in Question 6 by also adding a list of Students that belong to the class in a students key


app.listen(PORT, () => {
  console.log(`Classroom API is running on port ${PORT}`);
});
