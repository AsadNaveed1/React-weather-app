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

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",searchParams).then(formatCurrentWeather);
    
    return formattedCurrentWeather;
}   

export default getFormattedWeatherData