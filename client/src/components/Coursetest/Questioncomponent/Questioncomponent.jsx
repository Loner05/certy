import React from "react";
import style from './Questioncomponent.module.css'
import { BiUserCircle } from 'react-icons/bi';
const Questioncomponent = () =>{

return(
<div className={style.questionContainer}>
    
    <div className={style.questionBox}>
    <div className={style.completionRate} style={{width:"40%"}}></div>
     <div className={style.question}>
      <div className={style.questionTitle}>
     
        <p>Como se limpia correctamente los implementos metalicos?</p>
      </div>
       <div className={style.answerBox}>
        <div className={style.answerOptions}>
         <ul>
          <li><input type="radio" value="answerA"/> opcion A</li>
          <li><input type="radio" value="answerB"/> opcion B</li>
          <li><input type="radio" value="answerC"/> opcion C</li>
          <li><input type="radio" value="answerD"/> opcion D</li>
         </ul>


        </div>
        <button className={style.sendButton}>Enviar Respuesta</button>
       </div>
       </div>
    </div>
</div>
)}


export default Questioncomponent