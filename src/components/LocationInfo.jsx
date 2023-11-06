import React from 'react'

 const LocationInfo = ({locationData,clearLocation}) => {
    if (!locationData) {
        
        return null;
      }
     
     
  return (
   
    <div>
 
<p className=' text-4xl font-serif font-bold mt-4 mb-4'>Location Information</p>


<ul>

    <li className='text-2xl font-serif font-bold mt-4 mb-4'>Country:{locationData.country}</li>
    {
        locationData.places.map((item,index)=>(
            <li className='text-2xl font-serif font-bold ' key={index}>
             <p className='mt-4 mb-4'>Place Name:{item["place name"]}</p>
             <p className='mt-4 mb-4'>State:{item.state}</p>
             <p className='mt-4 mb-4'> Latitude:{item.latitude}</p>
             <p>Longitude:{item.longitude}</p>
              </li>
    
        ))
    }
</ul>
<button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                              text-[12px] p-1 px-3 uppercase 
                                hover:bg-gray-700
                              hover:text-white transition duration-300 ease-in mt-4 mb-4" onClick={clearLocation}>Clear</button>

    </div>
  )
}

export default LocationInfo;
