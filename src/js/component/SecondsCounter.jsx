import React, { useState, useEffect } from 'react';
import { BiAlarm } from "react-icons/bi";


const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);

  const toggleCounter = () => {
    setIsActive(prevState => !prevState);
  };

  useEffect(() => {
    const interval= setInterval(()=>{
      const digitsArray= seconds.toString().padStart(4, "0").split("");

      setDigits(digitsArray);
      setSeconds((prevSeconds)=> prevSeconds + 1);
    },1000);

    return() => clearInterval(interval);
}, [seconds]);

  return (
    
    <div className='container row d-flex bg-black d-grid vh-100 m-auto'>
      <div className='display-1 text-warning mt-5'><BiAlarm />      </div>

      <div className='col' ><p className='fs-1 bg-white'>{digits[0]}</p></div>
      <div className='col'><p className='fs-1 bg-white'>{digits[1]}</p></div>
      <div className='col'><p className='fs-1 bg-white'>{digits[2]}</p></div>
      <div className='col'><p className='fs-1 bg-white'>{digits[3]}</p></div>
      
    </div>
  );
};

export default SecondsCounter;
