
var APIKey="223570223a859abd2a47ee0f27ed73e1";

 var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
   
var city=document.getElementById("search-city");
var button=document.getElementById("Search")





function get5DaysForecast(apiResponse) {
    return apiResponse.list.reduce(function(days,current) {
        var currentDate=current.dt_txt.split(" ")[0];
        if(!days.find(function(day) {
            return day.dt_txt.includes(currentDate);
        })) {
            return [...days,current];
        }
        return days;
    },[])
}


button.addEventListener("click",function(){
 console.log(city.value)
 

 
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=5&appid=${APIKey}`).then(function(response){
    return response.json();
}).then(function(data){
    var lab=data[0].lat
    var lon=data[0].lon
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lab}&lon=${lon}&appid=${APIKey}`).then(function(response){
   return response.json();
}).then(function(data){
   var fiveDaysForecast=get5DaysForecast(data);
   console.log(fiveDaysForecast);
   var dataTemp = fiveDaysForecast[0].main.temp
   var currentTemp = document.getElementById('temperature')
   currentTemp.textContent = ' ' + Math.round(dataTemp -273.15) + 'C'
});
})
})
//Example usage
/*
When the button is clicked,
Then we get the user's input from the input tag and then call the api*/