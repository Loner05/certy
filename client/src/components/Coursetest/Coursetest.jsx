import React, { useEffect, useState } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Coursetest.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import Questioncomponent from "./Questioncomponent/Questioncomponent";
import Teststartcard from "./Teststartcard/Teststartcard";
import { useDispatch, useSelector } from "react-redux";
import { clearQuestionAnswers, questionAnswers, testQuestions } from "../../redux/actions";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';


const Coursetest = () =>{

  let dbquest = useSelector(state => state.testQuestions)
  //  console.log(dbquest.categories[0].question)
  let dbanswers = useSelector(state => state.questionAnswers)
  let valuer = 0
  const [page,setPage] = useState(valuer)
    
  console.log(page)
  const dispatch = useDispatch()
 const testeid = "9e9db805-16c8-472f-af72-54e54ea2d9c2"
useEffect(()=>{
dispatch(testQuestions(testeid,page))
// dispatch(questionAnswers(dbquest.categories[0].id))

},[dispatch])
// if(dbquest.categories[0].question){
//  console.log(`antes ${dbquest.categories[0].question}`)
const handleLoadQuestion =(value) =>{
    
    if(value===-1 && page===0)setPage(value)
    if(value===1 && dbquest.total-2===page)setPage(dbquest.total-3)
    if(value ===-1 && page>0 && page <=dbquest.total ){setPage(page+value)}

    if(value === 1){
     if(page >= 0 && page <=dbquest.total-2)setPage(page+value)
    
    }
    console.log(page)

        dispatch(clearQuestionAnswers())

        dispatch(testQuestions(testeid,page))
        
        dispatch(questionAnswers(dbquest.categories[0].id))
 
//  dispatch(clearQuestionAnswers())

// dispatch(testQuestions(testeid,page))

// questionAnswers(dbquest.categories[0].id)


console.log(`despues ${dbquest.categories[0].question}`)

}

    return(
<div className={style.userPageContainer}>
    <Navbar/>
   
   <div className={style.testQuestionBox}>
    <div>tiempo restante 15:20</div>
    <div> pregunta {page} de {dbquest.total-2}</div>

     
          {
               
          //  dbquest.categories && <div>{dbquest.categories[0].question}</div>
          
        
           
       dbquest.categories &&   dbquest.categories[0] && <div>
          {/* <Questioncomponent question={dbquest.categories[0].question}  questiontotal={dbquest.total} questionid={dbquest.categories[0].id} page={page}/> */}
           <Questioncomponent question={dbquest.categories[0].question} answers={dbanswers} questiontotal={dbquest.total} questionid={dbquest.categories[0].id} page={page}/>
          </div>
          }

      <button onClick={(e)=> handleLoadQuestion(-1)}><AiOutlineLeft/></button><button onClick={(e)=> handleLoadQuestion(+1)}><AiOutlineRight/></button>

   </div>

<Footer/>
</div>
)}


export default Coursetest