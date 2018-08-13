//Code to read and set any environment variables with the dotenv package
//This program won't run unless you have your own .env file with functioning Twitter and Spotify API keys
require("dotenv").config();
//Adding the ability to read, write, and append files
const fs = require("fs");
//Adding the request node package so the program can make a request to the servers
const request = require("request");
//Twitter and Spotify node packages
const Twitter = require("twitter");
const Spotify = require("node-spotify-api");
//Import any/all exports of keys.js
const myKeys = require("./assets/keys.js");
//Adding Twitter and Spotify variables
const spotify = new Spotify(myKeys.spotify);
const client = new Twitter(myKeys.twitter);

//Using a swtich/case for the program's four commands
// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

console.log(myKeys.test);
console.log("test2");
console.log(myKeys.spotify);


