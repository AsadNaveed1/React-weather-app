import './App.css';
import Forcast from './components/Forcast';
import Input from './components/Input';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButton from './components/TopButton';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import getWeatherData from './services/weatherService';
import getFormattedWeatherData from './services/weatherService';

function App() {


    const fetchWeather = async() =>{
      const data = await getFormattedWeatherData({q: 'london'});
      console.log(data)
    }

    fetchWeather();



  return (
    <div className="mx-auto max-w-screen-md mt-1 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton/>
      <Input/>

      <TimeAndLocation/>
      <TemperatureAndDetails/>
      <Forcast  title="Hourly Forecast" />
      <Forcast  title="Daily Forecast" />

    </div>
  );
}

export default App;
