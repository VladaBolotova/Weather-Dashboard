
var APIKey="223570223a859abd2a47ee0f27ed73e1";

 var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
   
var city=document.getElementById("search-city");
var button=document.getElementById("Search");
var currentCity=document.getElementById("current-city");






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
 

 
fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city.value}&limit=1&appid=${APIKey}`).then(function(response){
    return response.json();
}).then(function(cityInfo){
    var lab=cityInfo[0].lat
    
    var lon=cityInfo[0].lon
console.log(cityInfo);

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lab}&lon=${lon}&appid=${APIKey}`).then(function(response){
   return response.json();
} ).then(function(data){ 
    console.log("data", data);
var fiveDaysForecast=get5DaysForecast(data);
  var weathericon = fiveDaysForecast[0].weather[0].icon;
    var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
    var date=new Date(fiveDaysForecast[0].dt*1000).toLocaleDateString();
    $("#current-city").html(cityInfo[0].name +"("+date+")" +"<img src="+iconurl+">");
    
   
   console.log(fiveDaysForecast);
   var dataTemp = fiveDaysForecast[0].main.temp
   var currentTemp = document.getElementById('temperature')
   currentTemp.textContent = ' ' + Math.round(dataTemp -273.15) + 'C'


   var dataHumidity = fiveDaysForecast[0].main.humidity
   var currentHumidity = document.getElementById('humidity')
   currentHumidity.textContent = ' ' +dataHumidity + '%'


   var dataWind = fiveDaysForecast[0].wind.speed
   var currentWind = document.getElementById('wind-speed')
   currentWind.textContent = ' ' +dataWind 

//    var data1Humidity = fiveDaysForecast[1].main.humidity
//    var firstDayHumidity = document.getElementById('fHumidity0')
//    firstDayHumidity.textContent = ' ' +data1Humidity + '%'

      
for (i=0;i<5;i++){
    var date= new Date((data.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
    var iconcode= data.list[((i+1)*8)-1].weather[0].icon;
    var iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";
    var tempK= data.list[((i+1)*8)-1].main.temp;
    var tempF=(((tempK-273.5)*1.80)+32).toFixed(2);
    var humidity= data.list[((i+1)*8)-1].main.humidity;
    var windS = data.list[((i+1)*8)-1].wind.speed;

    $("#fDate"+i).html(date);
    $("#fImg"+i).html("<img src="+iconurl+">");
    $("#fTemp"+i).html(tempF+"&#8457");
    $("#fHumidity"+i).html(humidity+"%");
    $("#fWindSpeed"+i).html(windS);

}

});
})
})
