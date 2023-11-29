const apiKey = "0d16600eecbc1759735052e715b64084";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const Fodase = document.querySelector(".weaIcon");

async function checkweather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        if(data.weather[0].main == "clouds"){
            Fodase.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "clear") {
            Fodase.src = "images/sun.png";
        }
        else if (data.weather[0].main == "rain") {
            Fodase.src = "images/rainy.png";
        }
        else if (data.weather[0].main == "drizzle") {
            Fodase.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "mist") {
            Fodase.src = "images/mist.png";
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
