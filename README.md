# iWeather

iWeather is a fully responsive weather forecast app, build in React with use of WeatherAPI (https://www.weatherapi.com/)

Check out live version: https://venerable-khapse-b096b3.netlify.app/

Update - 29.07.2023 - Unfortunetly, WeatherAPI link broke, and it generates forecast for next 2, not 3 days. App is still working, but with actual weather data, and forecast for next 2 days. I will try to fix it, when WeatherAPI will repair their API calls. 

## Starting page

After runing the app, you will see search bar. You just need to type location for which you want to check weather forecast (this app is using only english language, so type your locations in english e.g. "Warsaw", "New York", "Rome").

<img width="292" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/d524e635-82f7-4468-84c5-3dbc48f8b287">

### Weather forecast

If you typed your searching location correct, you should receive actual weather conditions and weather forecast for next three days. Actual weather conditions contains weather icon, temperature, weather description, wind speed and percentage chance of rain. 
Below you will see weahter forecast for next three days, which contains name of the day, weather icon and temperature 

<img width="294" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/d9906a8d-778f-44fa-ac49-84c1e1f299e3">


Notice, that if in your searched location is currently daytime, app theme will be in default blue and white colours. But if in your current location is nighttime (after sundown), colour theme of the app will turn to dark. 

<img width="301" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/22719246-f4ab-46f8-8c5c-652fbdc221f6">

### Error handling 

In the case, when WeatherAPI can't find your location, you will receive error message in starting page
<img width="373" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/3ccca28c-bf96-4b6f-a1f2-30056e107d76">

