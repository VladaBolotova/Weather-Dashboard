// const APIKey = "090c01416bd9fb914720dfa9cb80f458";

// var city;

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;





// fetch(queryURL)

function GetInfo(){
    const cityName = document.getElementById("search-city");
    const cityList = document.getElementById("city-list");
    cityList.innerHTML = "--"+cityName.value+"--"


fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +cityName.value+ "&appid=223570223a859abd2a47ee0f27ed73e1")
.then(response => response.json())
.then(data =>{
    for (i=0;i<5;i++){
        document.getElementById("current-city" +(i+1)+"temperature").innerHTML = "temperature:" + Number(data.list[i].main.temp -302.79).toFixed(1)+"°";
    }
    for (i=0;i<5;i++){
        document.getElementById("current-city" +(i+1)+"humidity").innerHTML = "humidity:" + Number(data.list[i].main.humidity +"%");
    }
    for (i=0;i<5;i++){
        document.getElementById("current-city" +(i+1)+"wind-speed").innerHTML = "wind-speed:" + Number(data.list[i].wind.speed *5.14).toFixed(1);
    }
})

.catch(err => alert("Something went wrong"))
}

const w= new Date();
const weekday =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function weekDay(day){
    if(day +w.getDay() > 6){
        return day +w.getDay()-7;
    }
    else{
        return day +w.getDay();
    }
    }

for(i=o;i<5;i++){
    document.getElementById(" " +(i+1)).innerHTML = weekday[weekDay];
}