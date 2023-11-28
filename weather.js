const url="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="&appid=6e57a628da7bd09a8256b2aab4901757";

async function checkWeather(city){
    let promise=fetch(url + 'units=metric' + '&q=' + city  + apiKey);
    promise.then ((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.weather[0].main);

        document.querySelector(".main").innerHTML = data.weather[0].main;
        
        if(data.weather[0].main == "Clouds"){
            document.querySelector(".weather-icon").src = "clouds1.png";
        }
        else if(data.weather[0].main == "Clear"){
            document.querySelector(".weather-icon").src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            document.querySelector(".weather-icon").src = "rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            document.querySelector(".weather-icon").src = "snow.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            document.querySelector(".weather-icon").src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            document.querySelector(".weather-icon").src = "mist.png";
        }
        else if(data.weather[0].main == "Haze"){
            document.querySelector(".weather-icon").src = "clear.png";
        }
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';
    })
} 
checkWeather('indore');  //default city

let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value);
})