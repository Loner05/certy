import React, { useEffect,useState } from "react";
import style from './Questioncomponent.module.css'
import { BiUserCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { clearQuestionAnswers, questionAnswers, testQuestions ,userAnswers} from "../../../redux/actions";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Redirect } from 'react-router-dom';

const Questioncomponent = ({question,questionid,questiontotal,answers}) =>{
  
// console.log(question)
const dispatch = useDispatch()
const[checked,setChecked] = useState([])
const {testeid} = useParams()
const[che, setChe] = useState([])
let reduxpage = useSelector(state => state.page)
const[remainTime, setRemainTime] = useState("")
//  setRemainTime(window.localStorage.getItem('remain'))
console.log(checked)
console.log(`soy questiontotal ${questiontotal}`)
console.log(`soy reduxpage ${reduxpage}`)
let dbAnswer 
// const [page,setPage] = useState(0)
// console.log(`antes ${page}`)
useEffect(()=>{
   dispatch(questionAnswers(questionid))
   dispatch(clearQuestionAnswers(testeid))
  //  if(remainTime < Date.now()){
    
  //   window.location.href = 'http://127.0.0.1:5173/testscore'
  //   }
  //  checkUserAnswers()

},[dispatch])


let dbquest = useSelector(state => state.testQuestions)
 const statequestionanswers = useSelector(state => state.questionAnswers)
 const statestatusQuestionAnswers = useSelector(state => state.statusQuestionAnswers)
 
// const completion = ((page*100)/questiontotal)+'%'
// const checkUserAnswers = async() =>{

//    const token = window.localStorage.getItem('token');
//    console.log(`soy toker userdbanswers ${token}`)
//    console.log(`soy dbquestion ${dbquest.question.categories[0].id}`)
//    try{
//       let config ={
//          headers:{
//            authorization:`bearer ${token}`
//          }
     
//        }
     
//        let data = {
//          'HTTP_CONTENT_LANGUAGE': self.language,
//          "UserId": "bbb8d9f6-0838-4ffb-bd22-ec27d4f54d21",
//          "QuestionId": dbquest.question.categories[0].id,
        
//        }
       
//       let db = await axios.get('localhost:3001/test/useranswers',data, config)
//       console.log(`soy dbuseranswers ${db}`)
           
//       if(db){
//       //  dbAnswer = db.data[db.data.length-1]
//         dbAnswer = db.data
//        console.log(`soy dbanswers ${dbAnswer}`)
      
//       }
   
   
//    }catch(error){ console.log(error.message)}


// }

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
// {target:{value}}
const onSelect = (e) => {
    let alreadyAnswered =Object.keys(checked).forEach( key => key === e.target.value ? true : false)
  //  setChecked({...checked, [questionid] : e.target.value})
  // // console.log(`soy log de checked[0].obj ${checked[0].obj["250ae560-711d-47c2-a837-1560cb523631"]}`)
  // console.log(`soy log de checked[0].obj ${checked[0]}`)
  //  console.log(`alreadyAnswered ${alreadyAnswered}`);
  console.log(`soy questionid ${questionid}`)
      // console.log(`soy checked.questionid ${checked[questionid]}`)
   if (alreadyAnswered) {
     let newArray = checked.map((item) => {
       if (item.QuestionId === questionid) {
         return {
        
          [questionid]: e.target.value,
          
         };
       }
       return item;
     });
     console.log(newArray)
     setChecked(newArray)
     
   } else {
     let newItem = {
       QuestionId: e.target.value,
 
     };
     setChecked(prevState =>({...prevState, [questionid] : e.target.value}))
   }
 };

const handleClickSubmitButton = (e) =>{
e.preventDefault()
handleSubmitAnswers()

}


const handleSubmitAnswers = () =>{
 
  const obj = { a: 1, b: 2, c: 3 };
let moet = []
let momo = Object.entries(obj).forEach(([key, value]) => {
 moet.push({Key: key, Value: value});
});




let formattedAnswersArray =[]
let formattedAnswers = Object.entries(checked).forEach(([key,value])=>{
  formattedAnswersArray.push({QuestionId: key, AnswerId: value});

});
console.log(formattedAnswersArray)

console.log(statequestionanswers)
// if(formattedAnswersArray.length > 0){
// dispatch(userAnswers(formattedAnswersArray))
// }

}



// if(userTests[0].date + currentTest.testime < Date.now()){
  
//   window.location.href = 'http://127.0.0.1:5173/testscore'
//   }
// const alreadyanswered = axios.get()
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
            <li key={item.id}><input type="radio" value={item.id ?? ''}  onChange={()=>onSelect} checked={checked[questionid] === item.id ? true : false} /> {item.answer}</li>)
          }
          {/* <button onClick={handleAnswer}>Enviar respuesta</button> */}
         </ul>


        </div>
        {/* <button className={style.sendButton}>Enviar Respuesta</button>
        <button onClick={(e)=> handleLoadQuestion(-1)}><AiOutlineLeft/></button><button onClick={(e)=> handleLoadQuestion(+1)}><AiOutlineRight/></button>  */}
       </div>
       
       </div>
       {
       questiontotal-1 === reduxpage+1 &&
       
       <button onClick={()=>handleClickSubmitButton}>Enviar respuestas</button>
}
    </div>
</div>
)}


export default Questioncomponent