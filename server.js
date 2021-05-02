const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://azhfhwpn:5VPylMsT0XOBlEO8RxxKXAOjumxSDY6u@queenie.db.elephantsql.com:5432/azhfhwpn");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Create an endpoint to retrieve all Classes
app.get('/classes', async (req, res) => {
  const classes = await db.any("SELECT * FROM classes").then((classes) => {
    return classes;
  })


  res.send(classes);
})
// Create an endpoint to retrieve all Students
app.get('/students', async (req, res) => {
  const students = await db.any("SELECT * FROM students").then((students) => {
    return students;
  })


  res.send(students);
})
// Create an endpoint to retrieve all Teachers
app.get('/teachers', async (req, res) => {
  const teachers = await db.any("SELECT * FROM teachers").then((teachers) => {
    return teachers;
  })


  res.send(teachers);
})
// Create an endpoint to retrieve all Students given a specific Class ID

// Create an endpoint to retrieve all Classes given a specific Teacher ID

// Create an endpoint to retrieve a single Class given a specific ID


// Create an endpoint to retrieve a single Student given a specific ID


// Bonus:
// Modify your endpoint in Question 6 by also adding a list of Students that belong to the class in a students key


app.listen(PORT, () => {
  console.log(`Classroom API is running on port ${PORT}`);
});
