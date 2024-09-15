/*  Student Name: Kisan Rai
    Student Number: C0910925
    File Name: WeatherJS.js
    Assignment Name: Weather Api
    Submission Date: Feb-28-2024
*/


const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const hourlyForecastDiv = document.querySelector('.hourly-forecast');

// Event listener for search button click
search.addEventListener('click', () => {
    const APIKey = 'aa37f491ecd2e0e72063ec4eddaeaaf6';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    const hourlyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${APIKey}`;

    // Clear previous weather information and hourly forecast
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    error404.style.display = 'none';
    hourlyForecastDiv.innerHTML = '';

    // Fetch current weather data
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(json => {
            // Handle 404 error
            if (json.cod === '404') {
                container.style.height = '400px';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            // Update weather information
            container.style.height = '590px';
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = '../images/clear.png';
                    document.body.style.backgroundImage = "url('../images/sunnyDay.jpg')";
                    break;
                case 'Rain':
                    image.src = '../images/rain.png';
                    document.body.style.backgroundImage = "url('../images/rainDay.jpg')";
                    break;
                case 'Snow':
                    image.src = '../images/snow.png';
                    document.body.style.backgroundImage = "url('../images/snowDay.jpg')";
                    break;
                case 'Clouds':
                    image.src = '../images/cloud.png';
                    document.body.style.backgroundImage = "url('../images/weatherBG2.jpg')";
                    break;
                case 'Haze':
                    image.src = '../images/mist.png';
                    document.body.style.backgroundImage = "url('../images/hazeDay.jpg')";
                    break;
                default:
                    image.src = '';
                    document.body.style.backgroundImage = "url('../images/weatherBG2.jpg')";
            }
            

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            // Display weather box and details with fade-in effect
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
        })
        .catch(error => {
            // Handle fetch error
            console.error('Error fetching current weather data:', error);
            container.style.height = '400px';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
        });

    // Fetch hourly forecast data
    fetch(hourlyForecastUrl)
        .then(response => response.json())
        .then(data => {
            // Filter data to get hourly forecast
            const hourlyData = data.list.filter(hour => new Date(hour.dt * 1000).getHours() % 1 === 0);

            // Display hourly forecast
            displayHourlyForecast(hourlyData);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
        });
});

// Function to display hourly forecast
function displayHourlyForecast(hourlyData) {
    hourlyData.forEach(hour => {
        const date = new Date(hour.dt * 1000);
        let hourTime = date.getHours();
        let ampm = hourTime >= 12 ? 'PM' : 'AM';
        hourTime = hourTime % 12 || 12; // Converting to 12-hour format

        const temperature = Math.round(hour.main.temp);
        const iconCode = hour.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        // Format date and day
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        // Create hourly forecast item
        const hourlyItem = document.createElement('div');
        hourlyItem.classList.add('hourly-item');

        // Create elements for icon, time, temperature, date, and day
        const iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.alt = hour.weather[0].description;

        const timeSpan = document.createElement('span');
        timeSpan.textContent = `${hourTime} ${ampm}`;

        const tempSpan = document.createElement('span');
        tempSpan.textContent = `${temperature}°C`;

        const dateSpan = document.createElement('span');
        dateSpan.textContent = formattedDate;

        // Append elements to hourly forecast item
        hourlyItem.appendChild(iconImg);
        hourlyItem.appendChild(timeSpan);
        hourlyItem.appendChild(tempSpan);
        hourlyItem.appendChild(dateSpan);

        // Add hourly forecast item to container
        hourlyForecastDiv.appendChild(hourlyItem);
    });
}
