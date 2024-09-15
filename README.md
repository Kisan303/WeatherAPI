Weather API Responsive Application 
Documentation
Development Notes
HTML Structure (Weather.html)
1. The HTML file (Weather.html) provides the structure for the Weather API application.
2. It includes elements for the search box, weather information display, hourly forecast, and error 
message for invalid city.
3. The <div class="container"> wraps the entire content of the application.
4. Inside the container, there is a search box with an input field and a search button (<button>).
5. The error message for an invalid city is displayed within the <div class="not-found"> element.
6. The weather information is displayed within the <div class="weather-box"> element, including an 
image, temperature, and description.
7. Weather details such as humidity and wind speed are displayed in the <div class="weatherdetails"> section.
8. The hourly forecast is displayed within the <div class="container2"> element, allowing for 
horizontal scrolling of forecast items.
CSS Styles (style.css)
1. The CSS file (style.css) contains styles for the Weather API application, providing a visually 
appealing layout.
2. Styles are defined for the main container, search box, weather box, weather details, hourly forecast, 
and error message.
3. Custom styles are applied to input fields, buttons, weather information, hourly forecast items, and 
error messages.
4. Animation effects are included for a smooth user experience, such as the fadeIn effect for displaying 
weather information.
5. Responsive Design For: Mobile (max-width: 480px), Tablet (max-width: 768px) and by Default 
Responsiveness for Desktop to adjust better readability for different size of devices.
JavaScript Functions (WeatherJS.js)
1. The JavaScript file (WeatherJS.js) contains functions to interact with the OpenWeatherMap API 
and update the UI accordingly.
2. An event listener is added to the search button to trigger weather data fetching when clicked.
3. The fetchCurrentWeather() function fetches current weather data from the OpenWeatherMap API 
based on the entered city.
4. It updates the weather image, temperature, description, humidity, and wind speed in the UI.
5. Handles 404 errors if the city is not found.
6. Updates the background image based on the weather condition.
7. The fetchHourlyForecast() function fetches hourly forecast data from the API and calls 
displayHourlyForecast() to display it.
8. The displayHourlyForecast() function formats and displays the hourly forecast data in the UI.
9. CSS classes are dynamically added and removed to create fadeIn effects for weather information 
display.
Notes on Functionality
1. Search Functionality:
• Users can enter a city name in the search box and click the search button to get weather 
information.
• If an invalid city is entered, an error message is displayed.
2. Weather Information:
• The application displays the current weather image, temperature, description, humidity, and wind 
speed.
• The background image changes based on the weather condition.
3. Hourly Forecast:
• Below the current weather information, there is a horizontal scrollable list of hourly forecast 
items.
• Each item displays the weather icon, time, temperature, date, and day.
4. Error Handling:
• The application handles errors such as invalid city names and API fetch failures.
• An error message is displayed for invalid cities.
Conclusion
The Weather API is responsive application provides users with current weather information and hourly 
forecast for a specific city. It interacts with the OpenWeatherMap API to fetch and display weather data in 
a visually appealing manner. Users can search for a city, view current weather details, and scroll through 
hourly forecasts.The combination of HTML, CSS, and JavaScript allows for a dynamic and interactive user 
experience, enhancing the usability of the application.