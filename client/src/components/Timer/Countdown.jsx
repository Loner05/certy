import React, { useState, useEffect } from 'react';
import {getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils'

import {} from '../Coursetest/Questioncomponent/Questioncomponent';
import { useDispatch } from 'react-redux';
import { remainTestTime } from '../../redux/actions';
const Countdown = ({countdownTimestampMs}) => {

console.log(countdownTimestampMs)
  let defaultTime = {

    seconds: '00',
    minutes: '00',
    hours: '00'
  }
  
  const [remainingTime, setRemainingTime] = useState(defaultTime);
  
  const[seconds, setSeconds] = useState("")
   // Establece el tiempo inicial en 5 minutos
  //  if(countdownTimestampMs <= Date.now()){
  //   window.location.href = 'http://127.0.0.1:5173/testscore'
  //   useDispatch(remainTestTime(false))
  //  }
  useEffect(() => {
  
    const interval = setInterval(() => {
      
        updateRemainingTime(countdownTimestampMs)

        
    }, 1000); // Actualiza el contador cada minuto (60000 milisegundos)

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown){
     
   setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))

  }



  return (
    <div>

{remainingTime.hours}:
 
      {remainingTime.minutes}:
      {remainingTime.seconds}
    </div>
  );
};

export default Countdown;