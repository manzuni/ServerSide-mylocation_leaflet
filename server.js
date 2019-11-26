//Server-only code

//Create express app
const express = require("express"); //I import this in order to be able to create an app
const app = express(); // the whole library comes in as a function that i can execute

//Testing with being able to see if request is from mobile or not (client)
//const index = navigator.appVersion.indexOf("Mobile");

//Start listening  - (port, callback)
app.listen(3000, () => console.log("Listening at Port: 3000.")); //This will be displayed in bash

//So when i run this and open localhost:3000 in the browser, i want to see index.html
//The way i do that is by telling express to host my static files!

//you can also give it just a file, but better to put in a folder
app.use(express.static("public"));

// 3. Parse incoming data as JSON ( to avoid seeing undefined in s's console log)
//Similar to line 14
app.use(express.json({limit:'1mb'}));

//Getting ready for POST request - I want to get lat long from client and have it on the server so i can save it to db later
//3 steps needed: Routing, JSON parsing, and GET request with fetch()

// 1. POST method route - What i am really doing is creating an API! Next i need to POST data from client to here
app.post('/api', (request, response) => {
  console.log('I got a request!')
  console.log(request.body);
  //response.end(); to finish. or just send some data back like below
  response.json({
    status: "O mers!",
    latitude: request.body.lat,
    longitude: request.body.lon
  }); 
});



