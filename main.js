const API_key='cee46cbe3a1da6a2f88ca0eec0aac006';

const myForm = document.getElementById('myForm');
const submitButton = document.getElementById('submitButton')
const cityInput = document.getElementById('cityName')

myForm.addEventListener('submit', function(event){
  event.preventDefault();
  getWeather(cityName.value);
});

function getWeather(cityName) {
    const key = 'cee46cbe3a1da6a2f88ca0eec0aac006';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + cityName + `&appid=` + key)  
    .then(function(resp) { 
      return resp.json() }) 
   
    .then(function(data) {
      postWeather (data);


    console.log(data)
    })
    .catch(function() {
      console.error('Please search City again.')
      
    });
  }



function postWeather(data) {
    const temperature = data.main.temp;    
    const fahrenheit = Math.round(parseFloat((temperature - 273.15) * 9/5 + 32));
    const humidity = data.main.humidity;
    const mintemp = data.main.temp_min;
    const maxtemp = data.main.temp_max;
    const maxTemp = Math.round(parseFloat((maxtemp - 273.15) * 9/5 + 32));
    const minTemp = Math.round(parseFloat((mintemp - 273.15) * 9/5 + 32));
    
    const description = data.weather[0].description;
    const upperdescription = description.charAt(0).toUpperCase() + description.slice(1);


    const icon = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/` + icon + `@2x.png`;
    
    document.getElementById('icon').innerHTML = "<img src='" + iconUrl + "' alt='Weather Icon'>";
    document.getElementById('temp').innerHTML = 'Temperature now: ' + fahrenheit + '&deg;';
    document.getElementById('description').innerHTML = upperdescription;
    
    document.getElementById('location').innerHTML = data.name;
    document.getElementById('maxTemp').innerHTML = 'High: ' + maxTemp + '&deg;';
    document.getElementById('minTemp').innerHTML = 'Low: ' + minTemp + '&deg;';
    document.getElementById('humidity').innerHTML = 'Humidity: ' + humidity + '%';
}






