import { DateTime } from "luxon";

const API_KEY = 'd94d149fa52c798d642dffbef8556091';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

 //this is the default api till 2.5 after that it is query selector. 
 //A query string is a set of characters tacked onto the end of a URL. The query string begins after the question mark (?) and can include one or more parameters. Each parameter is represented by a unique key-value pair or a set of two linked data items.
 //https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}


//we use this function to manipulate our url such as adding our infotype and adding our parameters such as city name
const getWeatherData = (infoType, searchParams) =>
{
    const url = new URL(BASE_URL + '/' + infoType) //infoType
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})

    return fetch(url)
        .then((res)=> res.json())
        .then((data)=> data);
}




//url.search
//The search property of the URL interface is a search string, also called a query string, that is a string containing a '?' followed by the parameters of the URL.

//URLSearchParams
//URLSearchParams is a built-in JavaScript object that allows you to work with the query string of a URL. It provides methods for appending, deleting, getting, and setting key-value pairs in the query string

// fetch(url)
// fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.


// now in this function we take out all the necessary info that we need from the data we are getting from the api
//this is call destructuring  now the data is containing a lot of objects so t get stuf from each of that object we do like this
// weather is an array that contains an object so we take info from that differently
// to change the variable name we do => main: details
const formatCurrentWeather = (data) => {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;
  
    const { main: details, icon } = weather[0];
  
    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed,};
  };


  //in this function we get the weatherdata using params and call the formatcurrentweather function
  //getformattedweatherdata returns the variable formatedcurrentweather which has
  /**   
 country
: 
"GB"
details
: 
"Clouds"
dt
: 
1690465574
feels_like
: 
294.81
humidity
: 
82
icon
: 
"04d"
lat
: 
51.5085
lon
: 
-0.1257
name
: 
"London"
speed
: 
5.66
sunrise
: 
1690431369
sunset
: 
1690487857
temp
: 
294.48
temp_max
: 
296.07
temp_min
: 
291.51
*/



const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};



//ok so in the following function we have 2 variables formattedcurrentweather and formattedforcastweather
//formattedcurrentweather gives us all the info we need for thr current day
//formattedforcastweather gives us all the info we need for the future days
// for formattedforcastweather we first get the lat and long from the formattedcurrentweather data and pass it as param in getweatherdata function along with the units which we get from searchparams.unit (e.g london.unit)
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",searchParams).then(formatCurrentWeather);
    

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(formatForecastWeather);

    return { formattedCurrentWeather, formattedForecastWeather };

}   

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export default getFormattedWeatherData