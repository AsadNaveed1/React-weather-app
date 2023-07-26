import React from 'react'

function TopButton() {

    const cities = [
        {
            id: 1,
            title: "London",
          },
          {
            id: 2,
            title: "Sydney",
          },
          {
            id: 3,
            title: "Tokyo",
          },
          {
            id: 4,
            title: "Toronto",
          },
          {
            id: 5,
            title: "Paris",
          },
        ];

        return <div className='flex items-center justify-around mt-3 mb-6'>
            {cities.map((city)=>(
                <button key={city.id} className='text-white text-lg font-medium transition ease-out hover:scale-105'>{city.title}</button>

            ))}
        </div>
}




export default TopButton
