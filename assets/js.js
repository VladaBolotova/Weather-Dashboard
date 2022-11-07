
   var weathericon = response.weather[0].icon;
   var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
   var date=new Date(response.dt*1000).toLocaleDateString();
   $("#current-city").html(response.name +"("+date+")" +"<img src="+iconurl+">");




//add a list//

var cityInput = document.getElementById("city-name");
var cityList = document.getElementById("city-list");


function handleFormSearch(event) {
    event.preventDefault();

    var list = $('input[name="search-city"]').val();

if(!list) {
    console.log('No city filled out in form');
    return;
}

cityList.append('<li>' + list + '<li>');

$('input[name="search-city"]').val('');

}

cityInput.onabort('submit', handleFormSearch);