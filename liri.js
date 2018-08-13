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
// 1. `my-tweets`
// 2. `spotify-this-song`
// 3. `movie-this`
// 4. `do-what-it-says`
switch (process.argv[2]) {
    case "my-tweets":
    tweetsFunction();
    break;

    case "spotify-this-song":
    spotifyFunction();
    break;

    case "movie-this":
    movieFunction();
    break;

    case "do-what-it-says":
    logTxtFunction();
    break;
};

// 1. tweetsFunction
function tweetsFunction() {
    console.log("Checking to see if tweets function is working");
    var params = {screen_name: 'LiriUtbc'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      } else {
        console.log("Fuck! Something went wrong :(");
        console.log(error);
      }
    });
};

//2. spotifyFunction
function spotifyFunction() {
    
}

