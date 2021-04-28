const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://hyeeumfv:1YwH3PINc4cZLU1YqnL2Lix1AtNwci7s@queenie.db.elephantsql.com:5432/hyeeumfv");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create a GET endpoint that returns all Users
app.get('/users', async (req, res) => {
  const users = await db.any("SELECT * FROM users").then((users) => {
    return users;
  })


  res.send(users);
})


// Create a GET endpoint that returns all Comments
app.get('/comments', async (req, res) => {
  const comments = await db.any("SELECT * FROM comments").then((comments) => {
    return comments;
  })



  res.send(comments);
})


// Create a POST endpoint that allows you to create a User



// Create a POST endpoint that allows you to create a Comment 


// Create a PUT endpoint that allows you to update a User 


// Create a PUT endpoint that allows you to update a Comment


// Create a GET endpoint that allows you to retrieve a User's Comments



app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
