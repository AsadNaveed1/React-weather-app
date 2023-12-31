import './App.css';
import Forcast from './components/Forcast';
import Input from './components/Input';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButton from './components/TopButton';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import ForcastDaily from './components/ForcastDaily';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "Hong Kong" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  // useffect will run the first time the component is loaded then after that
  // it will load each time the dependecy change thats why we use 
  //useeffect
  useEffect(()=>{

    const fetchWeather = async() =>{

      const message = query.q? query.q: 'current location.'
      toast.info('Fetching Weather for '+ message)
         const data = await getFormattedWeatherData({...query, units}).then((data)=>
         {

 
          toast.success(
            `Successfully fetched weather for ${data.name}, ${data.country}.`
          );
          setWeather(data)
         });

    }

    fetchWeather();


  }, [query, units])


  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";

  }


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButton setQuery = {setQuery}/>
      <Input setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
               <div>
               <TimeAndLocation weather={weather}/>
               <TemperatureAndDetails  weather={weather}/>
               <Forcast  title="Hourly Forecast" />
               <ForcastDaily  title="Daily Forecast" />
 
          </div>  
      )}

      <ToastContainer autoClose={2000} theme="colored" newestOnTop={true} />

    </div>
  );
}

export default App;
