# IWeather

IWeather is a fully responsive weather forecast app, build in React with use of WeatherAPI (https://www.weatherapi.com/)

## Starting page

After runing the app, you will see search bar. You just need to type location for which you want to check weather forecast (this app is using only english language, so type your locations in english e.g. "Warsaw", "New York", "Rome").

![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/bc156773-4890-4913-82b5-4a8cb9ae4c8c)


### Weather forecast

If you typed your searching location correct, you should receive actual weather conditions and weather forecast for next three days. Actual weather conditions contains weather icon, temperature, weather description, wind speed and percentage chance of rain. 
Below you will see weahter forecast for next three days, which contains name of the day, weather icon and temperature 

![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/5d609486-51c8-4c15-9db5-03905fade63a)

Notice, that if in your searched location is currently daytime, app theme will be in default blue and white colours. But if in your current location is nighttime (it must be past 22:00), colour theme of the app will turn to dark. 
![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/6c1112e9-b256-471d-8356-17d3237b54f4)

### Error handling 

In the case, when WeatherAPI can't find your location, you will receive error message in starting page
![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/f031f847-4ff0-497d-a438-817865ca1c0c)

