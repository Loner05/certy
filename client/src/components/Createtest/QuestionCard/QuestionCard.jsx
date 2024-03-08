import React, { useState } from "react";
import style from "../QuestionCard/QuestionCard.module.css"
import { FaPlusCircle } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";
import ModalQuestionEdition from "../ModalQuestionEdition/ModalQuestionEdition";
const QuestionCard = ({key,question,answers}) =>{
  const updateQuestionAndAnswers = {
   Question: question,
   Answers: answers,
   //AnswerLength: updateQuestionAndAnswers.length

  }
  console.log("soy QuestionCard answers")
  console.log(updateQuestionAndAnswers)
  const[updateQuestion, setUpdateQuestion] = useState(updateQuestionAndAnswers)
  const[isModalOpen, setIsModalOpen] = useState("false")
  const[Answer, updateAnswer] = useState(answers)
console.log(`soy QuestionCard ${question}${answers}`)
console.log(question)
console.log(Answer)

const[active, setActivate]= useState(false)
const toggle = () =>{
  console.log("soy toogle")
  setActivate(false)
  setUpdateQuestion({Question: question, Answers: answers})
}

const handleAnswers = (e,index) =>{

  e.preventDefault()
  console.log(e.target.value)
   if(e.target.name === "addAnswer"){
  //  let answerOptionsNumUpdate = testQuestion.answerOptionsNum++

// setTestQuestion({...testQuestion, answerOptionsNum: answerOptionsNumUpdate +1})
updateAnswer([...Answer, {answer:" "}])
// [...answers, {value: ""}]"
// console.log(Answer)
   }

 if(e.target.name === "answer"){
   console.log(answers[0].value)
   console.log(`entre a answer y son e target${e.target.value}`)
 //   let named = `answer_${Object.keys(testQuestion.payload).length}`    
 //   console.log("entre a la funcion")
 //  let newItem= {[named]: e.target.value}
  
 //   setTestQuestion({...testQuestion, payload:newItem})
  let {value}= e.target
 let onChangeValue = [...answers]
 onChangeValue[index].value = value
 updateAnswer(onChangeValue)
   
   }
   if(e.target.name === "Question"){
setTestQuestion({...testQuestion, [e.target.name]: e.target.value})
 console.log(testQuestion)}

}

const handleSubmitUpdate = (e) =>{

e.preventDefault()

}

const handleQuestionChange = (e,index) =>{
  e.preventDefault()
   console.log(` soy e target value${e.target.value, e.target.name}`)
    
    if(e.target.name === "Question"){
    let answerOptionsNumUpdate = updateQuestion.AnswerLength++

// setTestQuestion({...testQuestion, answerOptionsNum: answerOptionsNumUpdate +1})
setUpdateQuestion({...updateQuestion, [e.target.name]: e.target.value})
 console.log(answers)
    }

  if(e.target.name === "answer"){
    console.log(answers[0].value)
    console.log(`entre a answer y son e target${e.target.value}`)
  //   let named = `answer_${Object.keys(testQuestion.payload).length}`    
  //   console.log("entre a la funcion")
  //  let newItem= {[named]: e.target.value}
   
  //   setTestQuestion({...testQuestion, payload:newItem})
   let {value}= e.target
  let onChangeValue = [...answers]
  onChangeValue[index].value = value
  setAnswers(onChangeValue)
    
    }
    if(e.target.name === "Question"){
setTestQuestion({...testQuestion, [e.target.name]: e.target.value})
  console.log(testQuestion)}

}

return(
<div className={style.MainCard}>
<ModalQuestionEdition active={active} toggle={toggle}>
 
<form action={handleSubmitUpdate}>
    <div className={style.formField}>
                <div><label htmlFor="">Pregunta</label></div>
               <div> <input type="text" onChange={handleQuestionChange} value={updateQuestion.Question} name="Question"/></div>
                </div>
                { 


updateQuestionAndAnswers && 
               
// updateQuestionAndAnswers.answers &&
// updateQuestionAndAnswers.Answers.map((input,index) => console.log(input.answer)) 
Answer.map((input,index) =>
                
                <div className={style.formField} >
                 { console.log(input.answer)}
                <div><label htmlFor="">Respuesta {index+1}</label></div>
                     <input type="text" onChange={(e)=>handleAnswers(e,index)} value={input.answer} name="answer"/>
                </div>)
                }
              <button className={style.borderButton} onClick={handleAnswers} name="addAnswer">Agregar Respuesta <FaPlusCircle/> </button>
              
              <button className={style.orangeButton} onClick={handleSubmitUpdate}>Guardar Pregunta </button>  
                
    </form>
  </ModalQuestionEdition>
  <ModalQuestionEdition isOpen={isModalOpen} closeModal={()=> setIsModalOpen(false)}/>
<button onClick={()=>  setActivate(true)}className={style.questionEditButton}><div><  FaEdit/></div></button>
<div className={style.cardContent}>
<div className={style.question}>
{question}
</div>
<div className={style.answersContainer}> 
{ Array.isArray(answers) &&
    answers.map(answer =>
    <div>
      {answer.answer}
   
    </div>)
}
</div>
</div>

</div>
)}

export default QuestionCard




// }
// return(

// <div>
// <ModalQuestionEdition active={active} toggle={toggle}>
 
// <h2>soy el modal activado!!!! OMG</h2>
// </ModalQuestionEdition>