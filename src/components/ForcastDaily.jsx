import React from 'react'


function ForcastDaily(props) {
  return (
    <div>

      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{props.title}</p>
      </div>

      <hr className='my-2'/>



      <div className='flex flex-row items-center justify-between text-white'>


        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                Wed
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>26°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                Thu
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>30°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                Fri
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>25°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                Sat
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>29°</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
                Sun
            </p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-12 my-1'/>
            <p className='font-medium'>32°</p>
        </div>




      </div>


      
    </div>
  )
}

export default ForcastDaily
