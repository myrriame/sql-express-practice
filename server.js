const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://qomyoved:ZhyvOedvW_8knyyEzPqIhqORWtuxZ_ER@drona.db.elephantsql.com:5432/qomyoved");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create a full set of CRUD endpoints to:
// Create a specific item in the food_des table
// Read a specific item from the food_des table
// Update a specific item in the food_des table

// Delete a specific item in the food_des table

// Create an endpoint to fetch all items in the fd_group table

// Create an endpoint to fetch a single item in the fd_group given an fdgrp_cd

// Modify the endpoint in #3 to return a list of foods that belong to the food group


app.listen(PORT, () => {
  console.log(`Food API is running on port ${PORT}`);
});
