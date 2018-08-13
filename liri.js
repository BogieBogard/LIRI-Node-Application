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
}

// 1. tweetsFunction
function tweetsFunction() {
  console.log("Checking to see if tweets function is working");
  var params = { screen_name: "LiriUtbc" };
  client.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      console.log(tweets);
    } else {
      console.log("Something went wrong :(");
      console.log(error);
    }
  });
}

//2. spotifyFunction
function spotifyFunction() {
  spotify
    .request("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx")
    .then(function(data) {
      console.log(data);
    })
    .catch(function(err) {
      console.error("Error occurred: " + err);
    });
}

//3. movieFunction
function movieFunction() {
  let movieName = "";
  let queryUrl = "";
  if (process.argv[3] === undefined) {
    // Grab or assemble the movie name and store it in a variable called "movieName"
    movieName = "Mr. Nobody";
  }
  // Then run a request to the OMDB API with the movie specified
  movieName = process.argv[3];
  queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  // Then create a request to the queryUrl
  request(queryUrl, function(error, response, body) {
    //console.log the response to see what the JSON looks like
    // console.log("This is response:", response);
    // If the request is successful
    if (!error && response.statusCode === 200) {
      console.log(response.body);
    } else {
      console.log("Something went wrong :( " + error);
    }
  });
}

//4. logTxtFunction
function logTxtFunction() {
  fs.readFile("./assets/random.txt", "utf8", function(error, data) {
    if (!error) {
      console.log("Raw " + data);
      let dataArray = data.split(",");
      console.log(dataArray[0]);
      console.log("Formatted " + dataArray);
    } else {
      console.log("Something went wrong :( " + error);
    };
  });
};
