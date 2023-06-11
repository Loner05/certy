import React, { useEffect, useState } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Coursetest.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import Questioncomponent from "./Questioncomponent/Questioncomponent";
import Teststartcard from "./Teststartcard/Teststartcard";
import { useDispatch, useSelector } from "react-redux";
import { clearQuestionAnswers, questionAnswers, testQuestions, updatePage } from "../../redux/actions";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { unstable_useBlocker } from "react-router-dom";


const Coursetest = () =>{
    // const state = store.getState();
    let valuer = 1
    let reduxpage = useSelector(state => state.page)
// console.log(`page getstate ${state.page}`)
    const testeid = "9e9db805-16c8-472f-af72-54e54ea2d9c2"

    let dbquest = useSelector(state => state.testQuestions)
    //  console.log(dbquest.categories[0].question)
    let dbanswers = useSelector(state => state.questionAnswers)
   
    const [page,setPage] = useState(valuer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(testQuestions(testeid,reduxpage))

        // dispatch(questionAnswers(dbquest.categories[0].id))
        
        },[dispatch,reduxpage])
    

  
    
//   console.log(page)
 
// if(dbquest.categories[0].question){
//  console.log(`antes ${dbquest.categories[0].question}`)

const carnage = () =>{

    dispatch(clearQuestionAnswers())
        
    dispatch(questionAnswers(dbquest.categories[0].id))
    console.log(`soy reduxpage 
    carnage  ${reduxpage}`)
    dispatch(testQuestions(testeid,reduxpage))
    dispatch(testQuestions(testeid,reduxpage))
    console.log(dbquest.categories[0].id)

    forceUpdate()
}

const handleLoadQuestion = async(value) =>{

    // if(value===-1 && page===0)set
    
    // (value)
    // if(value===1 && dbquest.total-2===page)setPage(dbquest.total-3)
    // if(value ===-1 && page>0 && page <=dbquest.total ){setPage(page+value)}

    // if(value === 1){
    //  if(page >= 0 && page <=dbquest.total-2)setPage(page+value)
    await dispatch(updatePage(value))
  
    console.log(`soy page updated ${page}`)
    carnage()
     
//  dispatch(clearQuestionAnswers())

// dispatch(testQuestions(testeid,page))

// questionAnswers(dbquest.categories[0].id)

}
// console.log(`despues ${dbquest.categories[0].question}`)

    return(
<div className={style.userPageContainer}>
    <Navbar/>
   
   <div className={style.testQuestionBox}>
    <div>tiempo restante 15:20</div>
    <div> pregunta {page} de {dbquest.total-2} redux page {reduxpage}</div>
    <button onClick={(e)=> handleLoadQuestion(0)}>1</button>
    <button onClick={(e)=> handleLoadQuestion(1)}>2</button>
    <button onClick={(e)=> handleLoadQuestion(2)}>3</button>
    <button onClick={(e)=> dispatch(dispatch(updatePage(3)))}>4</button>
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