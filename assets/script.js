var APIKey = "090c01416bd9fb914720dfa9cb80f458";

var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)