import { FaSearchLocation } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { useState } from "react";
const Inputs = ({setQuery,setUnits}) => {
  const [city,setCity] =useState("");

  const handleSearchClick =()=> {
    if (city!=="") setQuery({q:city});
  };
  const handleLocationClick =()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const{latitude ,longitude} = position.coords
        setQuery({lat:latitude,lon:longitude})
      })
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <div className="flex justify-around my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input value={city} onChange={(e) => setCity(e.currentTarget.value)} onKeyPress={handleKeyPress} type="text" placeholder="search by city._." className="text-gray-500 text-xl font-light p-1 w-full shadow-xl capitalise rounded-2xl
        focus: outline-none placeholder: lowercase" />
        <FaSearchLocation size={25} className="cursor-pointer transition ease-in-out hover:scale-125 " onClick={handleSearchClick}/>
        <BiCurrentLocation size={30} className="cursor-pointer transition ease-in-out hover:scale-125 " onClick={handleLocationClick}/>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center" >
        <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={()=> setUnits("metric")}>°C</button>
        <p className="text-2xl font-medium mx-1">|</p>
        <button className="text-2xl font-medium transition ease-out hover:scale-125"onClick={()=> setUnits("imperial")}>°F</button>
      </div>
    </div>
  )
}

export default Inputs