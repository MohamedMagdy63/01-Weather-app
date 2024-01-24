// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// CORS allows us to manage a Cross-origin resource sharing policy so that our front end can talk to the server.
const cors = require("cors");

// Enable All CORS Requests
app.use(cors());

//body-parser allow the backend to access JSON data sent from the client using request.body in POST route handler.
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Initialize the main project folder
app.use(express.static("website"));

// Callback function to complete GET '/all'
const getAll = (req, res) => res.status(200).send(projectData);
// GET Route
app.get("/all", getAll);


// Callback function to complete POST '/add'
const postData = (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send(projectData);
  }
// GET Route
app.post("/add", postData);

const port = 8000;
const hostname = "127.0.0.1";

// function to test the server 
const listening = () =>
console.log(`Server running at http://${hostname}:${port}/`);

// spin up the server
app.listen(port, listening);



// /* Empty JS object to act as endpoint for all routes */
// projectData = {};

// /* Express to run server and routes */
// const express = require('express');

// /* Start up an instance of app */
// const app = express();

// /* Dependencies */
// const bodyParser = require('body-parser')
// /* Middleware*/
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// const cors = require('cors');
// app.use(cors());

// /* Initialize the main project folder*/
// app.use(express.static('website'));

// const port = 8000;
// /* Spin up the server*/
// const server = app.listen(port, listening);
//  function listening(){
//     // console.log(server);
//     console.log(`running on localhost: ${port}`);
//   };

// // GET route
// app.get('/all', sendData);

// function sendData (request, response) {
//   response.send(projectData);
// };

// // POST route
// app.post('/add', callBack);

// function callBack(req,res){
//   res.send('POST received');
// };

// // POST an animal
// const data = [];

// app.post('/animal', addAnimal);

// function addAnimal (req,res){
//     data.push(req.body);
// };















// // /* Dependencies */
// const bodyParser = require('body-parser')
// // /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// const express = require('express')
// const app =express()
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // // Cors for cross origin allowance
// const cors = require('cors');
// app.use(cors());
// app.use(express.static('website'))

// const port = 8000;
// const server = app.listen(port, listening);
// function listening(){
//     console.log("server running"); 
//     console.log(`running on localhost: ${port}`);
// }
// const data=[]
// app.post('/addMovie', addMovie)
// function addMovie(req,res){
//     data.push(req.body)
//     console.log(data)
// }
// /*SYNC REVIEW*/

// setTimeout(function(){ console.log('third') }, 3000);

// function sync(){
// console.log('first')
// }
// const newEntry={}
// const animalData=[]
// sync()
// console.log('second')
// /* Empty JS object to act as endpoint for all routes */
// app.post('/addAnimal',(req,res)=>{
//   newEntry={
//     animal:req.body.animal,
//     facts: req.body.fact,
//     fav: req.body.fav
//   }
//   animalData.push(newEntry)
//   res.send(animalData)
//   console.log(animalData)
// })