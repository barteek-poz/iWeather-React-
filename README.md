<h1>iWeather</h1>

iWeather is a fully responsive weather forecast app, build in React with use of WeatherAPI (https://www.weatherapi.com/)

Check out live version: https://iweather-react.netlify.app/

<h2>Starting page</h2>

After runing the app, you will see search bar. You just need to type location for which you want to check weather forecast (this app is using only english language, so type your locations in english e.g. "Warsaw", "New York", "Rome").

<img width="292" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/d524e635-82f7-4468-84c5-3dbc48f8b287">

<h2>Weather forecast</h2>

If you typed your searching location correct, you should receive actual weather conditions and weather forecast for next three days. Actual weather conditions contains weather icon, temperature, weather description, wind speed and percentage chance of rain. 
Below you will see weahter forecast for next three days, which contains name of the day, weather icon and temperature 

![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/e5953841-ecf8-44dc-ae19-8e6914d39c71)



Notice, that if in your searched location is currently daytime, app theme will be in default blue and white colours. But if in your current location is nighttime (after sundown), colour theme of the app will turn to dark. 
![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/6fa13ab0-781d-4b6f-b343-8bb7668b6c23)

![image](https://github.com/barteek-poz/iWeather-React-/assets/109816351/33c70aac-b11e-45d0-8ddf-e8fcd1fee015)


<h2>Error handling</h2>

In the case, when WeatherAPI can't find your location, you will receive error message in starting page
<img width="373" alt="image" src="https://github.com/barteek-poz/iWeather-React-/assets/109816351/3ccca28c-bf96-4b6f-a1f2-30056e107d76">

