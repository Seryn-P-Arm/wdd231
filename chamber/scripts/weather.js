const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.querySelector('#forecast');

const apiKey = 'e07fec8b2e8d2bec9eb2c61cbef78997';
const lat = 49.7667;
const lon = 6.6450;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// get weather api
async function apiFetch() {
    try {
        // Fetch current weather
        const weatherResponse = await fetch(weatherUrl);
        if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
            displayCurrentWeather(weatherData);
        } else {
            throw Error(await weatherResponse.text());
        }

        // Fetch 3-day forecast
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }

    } catch (error) {
        console.log(error);
    }
}

// current weather
function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// forecast for the next 3 days
function displayForecast(data) {
    forecastContainer.innerHTML = ""; // Clear previous content

    const dailyTemps = {};
    data.list.forEach(entry => {
        const date = entry.dt_txt.split(" ")[0];
        if (!dailyTemps[date]) {
            dailyTemps[date] = entry.main.temp;
        }
    });

    const forecastDates = Object.keys(dailyTemps).slice(1, 4);

    forecastDates.forEach(date => {
        const temp = dailyTemps[date];
        const day = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `<strong>${day}</strong>: ${temp.toFixed(1)}°C`;

        forecastContainer.appendChild(forecastItem);
    });
}

apiFetch();
