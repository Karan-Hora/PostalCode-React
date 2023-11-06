import React, { useState } from 'react'

import LocationInfo from './LocationInfo';
import Loader from './Loader';
import { toast } from "react-hot-toast";
 const PostalCodeForm = () => {

    const [locationData, setLocationData] = useState(null);
    const clearLocation = () => {
        setLocationData(null);
        setPostalCode('');
      };
    const [loading,setLoading]=useState(false);
    const [postalCode, setPostalCode] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
       
        try{
           
            const res=await fetch(`https://api.zippopotam.us/in/${postalCode}`);
            if(res.ok){

            
            const data=await res.json();
            setLocationData(data);
            }
            else{
              toast.error("Invalid Postal Code");
              clearLocation();

            }



        }
        catch(error){
            console.log("Error Occured");


        }
        setLoading(false);


    }
  

    
  return (
    <div className=' flex flex-col items-center justify-center w-11/12 h-screen '>
         <form >
          <div>
        <label    
        className=' font-serif font-bold text-2xl block'>
        Enter Postal Code:
          
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        </div>
        <div className=' mt-10 font-serif text-center'> 

        
        <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                              text-[12px] p-1 px-3 uppercase 
                                hover:bg-gray-700
                              hover:text-white transition duration-300 ease-in" onClick={handleFormSubmit} type="submit" >
          Submit

          
        </button>

        </div>
      </form>
      {loading?(<Loader/>):(<LocationInfo locationData={locationData} clearLocation={clearLocation}/>)}
     
    </div> 
  )
}
export default PostalCodeForm