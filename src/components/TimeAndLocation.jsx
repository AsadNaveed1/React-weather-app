import React from 'react'
import { formatToLocalTime } from '../services/weatherService';

function TimeAndLocation(props) {

  const {dt, timezone, name, country } = props.weather;

  
  return (



    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
        {formatToLocalTime(dt, timezone)}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>
            {`${name}, ${country}`}
        </p>
      </div>
      
    </div>
  )
}

// thr `${}` This is a JavaScript ES6 feature: The old way to concatenate a string :
//
//var user = 'abc' + myuser;
// ES6:
//var user = `abc${myuser}`;

export default TimeAndLocation
 