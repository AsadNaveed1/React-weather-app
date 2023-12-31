import React from 'react'
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown

} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

function TemperatureAndDetails(props) {

  const {details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone} = props.weather
  return (
    <div>

      <div className="flex items-center justify-center text-xl py-4 text-cyan-300">
         <p >{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">

        <img src={iconUrlFromCode(icon)} alt="" className='w-20' />
        <p className='text-5xl ml-12'>{`${temp.toFixed()}°`}</p>
        
        <div className='flex flex-col space-y-2'>

               <div className='flex font-light text-sm items-center'>
                 <UilTemperature size={18} className="mr-1"/>
                 Feels like:
                 <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
               </div>
               <div className='flex font-light text-sm items-center'>
                 <UilTear size={18} className="mr-1"/>
                 Humidity:
                 <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
               </div>
               <div className='flex font-light text-sm items-center'>
                 <UilWind size={18} className="mr-1"/>Wind:
                 <span className='font-medium ml-1'>{`${speed.toFixed()} km/h`}</span>
               </div>

     
        </div>
      </div>

      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun/>
        <p className='font-light'>Rise:{" "}<span className='font-medium ml-1'>05:20 AM</span></p>
        <p className='font-light'>|</p>
        <UilSunset/>
        <p className='font-light'>Set:<span className='font-medium ml-1'>07:35 PM</span></p>
        <p className='font-light'>|</p>
        <UilArrowUp/>
        <p className='font-light'>High:<span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span></p>
        <p className='font-light'>|</p>
        <UilArrowDown/>
        <p className='font-light'>Low:<span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span></p>
        <p className='font-light'>|</p>
      </div>
      
    </div>
  )
}

export default TemperatureAndDetails
