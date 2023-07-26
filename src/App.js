import './App.css';
import Forcast from './components/Forcast';
import Input from './components/Input';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import TopButton from './components/TopButton';
import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
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
