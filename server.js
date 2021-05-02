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
app.post('/users', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  await db.none(`INSERT INTO users (name, email) VALUES ($1, $2);`, [name, email])
  res.send(`${name} was created`);
})



// Create a POST endpoint that allows you to create a Comment 
app.post('/comments', async (req, res) => {
  const post_id = req.body.post_id;
  const user_id = req.body.user_id;
  const comment = req.body.comment;

  await db.any(`INSERT INTO comments (post_id, user_id, comment) VALUES ($1, $2, $3);`, [post_id, user_id, comment])
  res.send('comment created');
})

// Create a PUT endpoint that allows you to update a User 
app.put('/users', async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  await db.none(`UPDATE users SET email = $1, name = $2 WHERE id = $3`, [email, name, id]);


  res.send(`${name} has been updated`);

});

// Create a PUT endpoint that allows you to update a Comment
app.put('/comments', async (req, res) => {

  const comment = req.body.comment;
  const id = req.body.id;

  await db.none(`UPDATE comments SET comment = $1 WHERE id = $2`, [comment, id]);

  res.send('comment updated');
})

// Create a GET endpoint that allows you to retrieve a User's Comments
app.get('/users/:comments', async (req, res) => {
  const comments = await db.any(`SELECT * FROM comments WHERE users = ${req.params.users}`).then(() => {
    return comments;
  })



  res.send(comments);
})


app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
