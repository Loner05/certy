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
import axios from "axios";



 const questionAns = (payload) =>{
    const token = window.localStorage.getItem('token');
    let config ={
      headers:{
        authorization:`bearer ${token}`
      }
  
    }
  
    let data = {
      'HTTP_CONTENT_LANGUAGE': self.language
    }
  
  return async function(dispatch){
   const res = await axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${payload}`,data, config)
   return res.data
  }}
const Coursetest = () =>{
    // useEffect(() => {
    //     if (src) {
    //       playActive(src);
    //     }
    //   }, [src]);
  

    // const state = store.getState();
    let valuer = 0
    let reduxpage = useSelector(state => state.page)
    // let reduxpage = useState(1)
// console.log(`page getstate ${state.page}`)
    const testeid = "9e9db805-16c8-472f-af72-54e54ea2d9c2"

    let dbquest = useSelector(state => state.testQuestions)
    //  console.log(dbquest.categories[0].question)
    let dbanswers = useSelector(state => state.questionAnswers)
    const[res,setRes] = useState("")
    const [page,setPage] = useState(valuer)
    const dispatch = useDispatch()
    useEffect(()=>{
        
        dispatch(testQuestions(testeid,reduxpage))
        // console.log(`soy dbquest ${dbquest.categories[0].id}`)
      //  setRes(questionAns(dbquest.categories[0].id))
        // .then(function(value){
        //     questionAns(dbquest.categories[0].id).then(function(value){

        //         setOptions(value)
        //     })

        // })
        
        // (dispatch(questionAnswers(dbquest.categories[0].id)))
        
        },[dispatch,reduxpage])
    

  console.log(res)
    
//   console.log(page)
 
// if(dbquest.categories[0].question){
//  console.log(`antes ${dbquest.categories[0].question}`)

const carnage = () =>{

    dispatch(clearQuestionAnswers())
        
    
    console.log(`soy reduxpage 
    carnage  ${reduxpage}`)
    dispatch(testQuestions(testeid,reduxpage))
    // dispatch(testQuestions(testeid,reduxpage))
    dispatch(questionAnswers(dbquest.categories[0].id))
    console.log(dbquest.categories[0].id)

    // forceUpdate()
}

const handleLoadQuestion = (value) =>{

    // if(value===-1 && page===0)set
    
    // (value)
    // if(value===1 && dbquest.total-2===page)setPage(dbquest.total-3)
    // if(value ===-1 && page>0 && page <=dbquest.total ){setPage(page+value)}

    // if(value === 1){
    //  if(page >= 0 && page <=dbquest.total-2)setPage(page+value)
     dispatch(updatePage(value))
    // await carnage()
  //  questionAns(dbquest.categories[0].id)
  // .then(function(value){
   console.log(dbquest.question.categories[0].id)

  //   })
  
    console.log(`soy page updated ${reduxpage}`)
    // carnage()
    // dispatch(questionAnswers(dbquest.question.categories[0].id))
//  dispatch(clearQuestionAnswers())

// dispatch(testQuestions(testeid,reduxpage))

// questionAnswers(dbquest.categories[0].id)
// console.log(`questionAnswers ${dbquest.categories[0].id}`)
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
          
           
       dbquest.question &&   <div>
          {/* <Questioncomponent question={dbquest.categories[0].question}  questiontotal={dbquest.total} questionid={dbquest.categories[0].id} page={page}/> */}
           <Questioncomponent question={dbquest.question.categories[0].question} answers={dbquest.answers} questiontotal={dbquest.total} questionid={dbquest.question.categories[0].id} page={page}/>
          </div>
          }

      <button onClick={(e)=> handleLoadQuestion(-1)}><AiOutlineLeft/></button><button onClick={(e)=> handleLoadQuestion(+1)}><AiOutlineRight/></button>

   </div>

<Footer/>
</div>
)}


export default Coursetest