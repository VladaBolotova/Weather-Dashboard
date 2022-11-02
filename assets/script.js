// const APIKey = "090c01416bd9fb914720dfa9cb80f458";

// var city;

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;





// fetch(queryURL)

function GetInfo(){
    const cityName = document.getElementById("search-city");
    const cityList = document.getElementById("city-list");
    cityList.innerHTML = "--"+cityName.value+"--"
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +cityName.value+ "&appid=223570223a859abd2a47ee0f27ed73e1")
.then(response => response.json())
.then(data =>{
    for (i=0;i<5;i++){
        document.getElementById("current-city" +(i+1)+"temperature").innerHTML = "temperature:" + Number(data.list[i].main.temp -302.79).toFixed(1)+"°";
    }
    for (i=0;i<5;i++){
        document.getElementById("current-city" +(i+1)+"humidity").innerHTML = "humidity:" + Number(data.list[i].main.humidity -73).toFixed(1)+"°";
    }
})

