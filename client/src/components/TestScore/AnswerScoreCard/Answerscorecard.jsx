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
      <div className={style.ansQuest}>
     <h4>{question}</h4>
      <p>{selectedAnswer}</p>
      </div>
      <div className={style.checkIcon}>
      {
        // 
        correct  ? <p><AiFillCheckCircle/></p>
       :  <p><AiFillCloseCircle/></p>


      }
      </div>
    </div>
)}


export default Answerscorecard


