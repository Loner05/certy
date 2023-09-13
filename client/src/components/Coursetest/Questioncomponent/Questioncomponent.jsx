import React, { useEffect,useState } from "react";
import style from './Questioncomponent.module.css'
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { clearQuestionAnswers, questionAnswers, testQuestions ,userAnswers} from "../../../redux/actions";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import axios from "axios";

const Questioncomponent = ({question,questionid,questiontotal,answers}) =>{
// console.log(question)
const dispatch = useDispatch()
const[checked,setChecked] = useState("")
let dbAnswer 
// const [page,setPage] = useState(0)
// console.log(`antes ${page}`)
const testeid = "9e9db805-16c8-472f-af72-54e54ea2d9c2"
let dbquest = useSelector(state => state.testQuestions)
 const statequestionanswers = useSelector(state => state.questionAnswers)
// const completion = ((page*100)/questiontotal)+'%'
const checkUserAnswers = async() =>{

   const token = window.localStorage.getItem('token');
   console.log(`soy toker userdbanswers ${token}`)
  
      let config ={
         headers:{
           authorization:`bearer ${token}`
         }
     
       }
     
       let data = {
         'HTTP_CONTENT_LANGUAGE': self.language,
         "UserId": "bbb8d9f6-0838-4ffb-bd22-ec27d4f54d21",
         "QuestionId": dbquest.question.categories[0].id,
         "AnswerId":  checked,
         "correct": true
       }
       try{
      let db= await axios.get('localhost:3001/test/useranswers',data, config)
      console.log(`soy dbuseranswers ${db.data}`)

      if(db){
       dbAnswer = db.data[db.data.length-1]
      
      }
   
   
   }catch(error){ console.log(error.message)}


}
useEffect(()=>{
   dispatch(questionAnswers(questionid))
   checkUserAnswers()

},[dispatch])
// const handleLoadQuestion =(value) =>{
//   if(value===-1){
//       if(page===0)setPage(0)
//       if(page>=1)setPage(page+value)
//   }if(value === 1){
//     if(page ===dbquest.total-1)setPage(dbquest.total-1)
//    if(page >= 0 && page <=dbquest.total-2)setPage(page+value)
//   }
// dispatch(clearQuestionAnswers())
// dispatch(testQuestions(testeid,page))
// dispatch(questionAnswers(questionid))
// console.log(`despues ${dbquest.categories[0].question}`)
// console.log(page)

// }

const onSelect= ({target:{value}}) =>{
setChecked(value)
console.log(checked)

}
const isChecked = (value) => value === checked


const handleAnswer = (e) =>{
e.preventDefault()
let payload ={
question: dbquest.question.categories[0].id,
answer: checked

}
dispatch(userAnswers(payload))
alert('respuesta enviada')
}

const alreadyanswered = axios.get()
return(
<div className={style.questionContainer}>
    
    <div className={style.questionBox}>
    <div className={style.completionRate} style={{width:40}}></div>
     <div className={style.question}>
      <div className={style.questionTitle}>
     {
        question &&
        <p>{question}</p>
     }
      </div>
       <div className={style.answerBox}>
        <div className={style.answerOptions}>
         <ul>
          {
            answers.length &&   answers.map( item =>  
            <li key={item.id}><input type="radio" value={item.id} onChange={onSelect} checked={isChecked(item.id)} /> {item.answer}</li>)
          }
          <button onClick={handleAnswer}>Enviar respuesta</button>
         </ul>


        </div>
        {/* <button className={style.sendButton}>Enviar Respuesta</button>
        <button onClick={(e)=> handleLoadQuestion(-1)}><AiOutlineLeft/></button><button onClick={(e)=> handleLoadQuestion(+1)}><AiOutlineRight/></button>  */}
       </div>
       </div>
    </div>
</div>
)}


export default Questioncomponent