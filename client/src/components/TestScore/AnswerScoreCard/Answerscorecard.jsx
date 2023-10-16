import React from "react";
import style from './Answerscorecard.module.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';


const Answerscorecard = ({question, selectedAnswer, correct})=>{
  correct = true
    //tengo que traerme el id del test que acabo de responder
    // debo evaluaer esas preguntas si la respuestas del usuario coincide con la respuesta correcta 
    // agrego esas preguntas con la respuesta del usuario
    

return(
    <div className={style.mainScoreCard} >
     <h4>{question}</h4>
      <p>{selectedAnswer}</p>
      {
        // 
        correct  ? <AiFillCheckCircle/>
       :  <AiFillCloseCircle/>


      }
    </div>
)}


export default Answerscorecard


