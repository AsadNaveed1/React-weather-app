import React from 'react'


function Forcast(props) {
  return (
    <div>

      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{props.title}</p>
      </div>

      <hr className='my-2'/>



      <div className='flex flex-row items-center justify-between text-white'>


        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                04:30 PM
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>22°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                05:30 PM
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>25°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                06:30 PM
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>23°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                07:30 PM
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>29°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                08:30 PM
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>30°</p>
        </div>




      </div>


      
    </div>
  )
}

export default Forcast
