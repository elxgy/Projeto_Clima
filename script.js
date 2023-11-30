const apiKey = "0d16600eecbc1759735052e715b64084";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");


function setWeatherIcon(weather) {
    if (weather === "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    } else if (weather === "Clear") {
        weatherIcon.src = "images/sun.png";
    } else if (weather === "Rain") {
        weatherIcon.src = "images/rainy.png";
    } else if (weather === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (weather === "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (weather === "Snow") {
        weatherIcon.src = "images/snow.png";
    }
}

async function checkweather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        setWeatherIcon(data.weather[0].main);

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
    
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
