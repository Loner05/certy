import React, { useEffect, useState } from "react";
import Coursecard from "../Coursecard/Coursecard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from './Coursetest.module.css'
import userPageDisplay from '../../media/user_page_main.svg'
import Questioncomponent from "./Questioncomponent/Questioncomponent";
import Teststartcard from "./Teststartcard/Teststartcard";
import { useDispatch, useSelector } from "react-redux";
import {loading,clearQuestionAnswers, questionAnswers, remainTestTime, testQuestions, updatePage,userTestDB ,getUserInfo, getTEST, userCompleteRate, LOADING, loading2} from "../../redux/actions";
import { AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import axios from "axios";
import Countdown from "../Timer/Countdown";
import jwtDecode from 'jwt-decode'
import Loader from "../Loading/Loading";

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
   const res = await axios.get(`localhost:3001/test/questionanswer?QuestionId=${payload}`,data, config)
   return res.data
  }}



const Coursetest = () =>{
    
    let valuer = 0
      let loader = useSelector(state => state.loading2)
    const {testeid} = useParams()
    let finaltime =parseInt( window.localStorage.getItem('remain'))
  //  let finaltime = window.localStorage.getItem('remain')
    // console.log(finaltime[0])
    const [timeBlock, setTimeBlock] = useState("")
    console.log(`soy finaltime ${finaltime}`)
    let reduxpage = useSelector(state => state.page)
    let paginatorArray = []
   const [cautivedtest24,setCautivatedTest24] = useState(false)
   
   var decoded = jwtDecode(window.localStorage.getItem('token'))
    

   console.log(`soy cautivatedtest24 ${cautivedtest24}`)
//  console.log(`soy cautivatedtest24 ${cautivedtest24}`)
    // let reduxpage = useState(1)
// console.log(`page getstate ${state.page}`)

    const[remainTime, setRemainTime] = useState("")


    console.log(`soy testeid ${testeid}`)
    let dbquest = useSelector(state => state.testQuestions)
    //  console.log(dbquest.categories[0].question)
    let dbanswers = useSelector(state => state.questionAnswers)
    let userTests = useSelector(state => state.usertests)
    const[res,setRes] = useState("")
    const [page,setPage] = useState(valuer)
    const profile = useSelector(state => state.userInfo)
    let  stateTests = useSelector(state => state.tests)
    let currentTest = stateTests.find( item => item.id === testeid)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loading2(true))
      dispatch(getUserInfo())
      dispatch(getTEST())
        
       dispatch(testQuestions(testeid,reduxpage))
        // if( !finaltime  || finaltime < Date.now()){
        //  dispatch(remainTestTime(Date.now() + 1200000))
        // }
        //  setRemainTime(window.localStorage.getItem('remain'))
        console.log(`soy current test ${currentTest}`)
        console.log(userTests.tests)
        // if(userTests.length){
        //   console.log(`usertest legnth ${userTests.length}`)
        // if( userTests[0].date + currentTest.testime  + 86400000 > Date.now() ){
        //     setCautivatedTest24(true)
        //     setTimeBlock(userTests[0].date+86400000)
        // }}



        dispatch(userTestDB(testeid,"a1bdbea7-c77e-44a6-b5b8-f90309288df8"))

        // console.log(`soy dbquest ${dbquest.categories[0].id}`)
        if(dbquest.categories){
          dispatch(questionAnswers(dbquest.categories[0].id))
       setRes(questionAns(dbquest.categories[0].id))
        .then(function(value){
            questionAns(dbquest.categories[0].id).then(function(value){

                setOptions(value)
            })

        })}


        // dispatch(loading(false))

        },[dispatch,reduxpage,cautivedtest24,testeid,timeBlock])


      useEffect(()=>{
        if(userTests[0] && currentTest){


          testRestriction()
          
        }

// setTimeout(() => {
//   console.log("soy setimeout")
//   testRestriction()
// }, timeBlock, finaltime);
        // if(userTests.length && currentTest.testime){
        //   console.log(`usertest legnth ${userTests.length}`)
        // if( userTests[0].date + currentTest.testime  < Date.now() ){
        //     setCautivatedTest24(true)
        //     setTimeBlock( Date.now() + ((parseInt(userTests[0].date))-Date.now()+86400000))
        // }}




      },[userTests,timeBlock,reduxpage,cautivedtest24,testeid])







  // if(remainTime < Date.now()){

  //  window.location.href = 'http://127.0.0.1:5173/testscore'
  // }
  console.log(page)

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
// if(finaltime < Date.now()){


// }

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
  //  console.log(dbquest.question.categories[0].id)

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


const paginator = () =>{
for(let i=0; i < reduxpage-1; i++){
paginatorArray.push(<button onClick={(e)=> handleLoadQuestion(i)}>{i+1}</button>)

}


}
console.log(`soy timeblock ${timeBlock}`)
// if(userTests.tests){
//   console.log(`usertests length ${!userTests.tests[0].date}`)

// // }



const testRestriction =() =>{
  let payload2 = {

          testId: testeid,
          userId:"a1bdbea7-c77e-44a6-b5b8-f90309288df8",
            date: Date.now(),
            complete_rate: 45
    
    
          }

          console.log(`usertests.date ${!userTests[0].date}`)

  if(!userTests[0].date){
    dispatch(remainTestTime(Date.now() + parseInt(currentTest.testime)));
      dispatch(userCompleteRate(payload2))
       dispatch(loading2(false))

 }
 if(userTests[0].date){
//este registro aun tiene tiempo vigente para responder el test
if(parseInt(userTests[0].date) + parseInt(currentTest.testime) > Date.now()){
   dispatch(remainTestTime(Date.now() +((parseInt(userTests[0].date)) + currentTest.testime - Date.now())))
   dispatch(loading2(false))

}

if(parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()){
  if(parseInt(userTests[0].date) + parseInt(currentTest.testime) + 120000 > Date.now()){
    window.location.href = 'http://127.0.0.1:5173/testscore'
     dispatch(loading2(false))
   
  }
  if(parseInt(userTests[0].date) + parseInt(currentTest.testime) + 120000 < Date.now()){
dispatch(remainTestTime(Date.now() + parseInt(currentTest.testime)));
 dispatch(userCompleteRate(payload2))
 dispatch(loading2(false))
}

}

 }}

// const testRestriction = () =>{


//   console.log("mogo")
// }



// const testRestriction =() =>{
// // console.log(`condiciones testrestricions 
// // ${parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()}.
// // ${parseInt(userTests[0].date) + currentTest.testime < Date.now()},
// // ${userTests[0].date + parseInt(currentTest.testime) < Date.now()}`)
// // console.log(`soy usertests length ${!userTests[0].length}` )
// // console.log(`soy condicion 1 testrestrictions ${parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()}`)
// //  // si no tengo ningun registro de test
// if (parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()) {
//     dispatch(remainTestTime(Date.now() + parseInt(currentTest.testime)));
//     let payload2 = {

//       testId: testeid,
//       userId:"a1bdbea7-c77e-44a6-b5b8-f90309288df8",
//         date: Date.now(),
//         complete_rate: 45


//       }
//      dispatch(userCompleteRate(payload2))
//      dispatch(loading(false))
//    }


// // tengo un registro previo de test respondido
// if(userTests[0].date ){
   


//   console.log(`entro a usertests testrestrictions`)
//   console.log(`entro a usertests testimes ${parseInt(currentTest.testime), userTests.date + currentTest.testime < Date.now()}`)
//   //verifico si el test se respondio hace poco y esta en tiempo de bloqueo, si es asi es bloqueado


//   setTimeout(()=>{
//     if( parseInt(userTests[0].date) + currentTest.testime < Date.now()){
//       console.log(`entro a setCautivatedTest24`)
//       // setCautivatedTest24(true)
//       setTimeBlock( (Date.now() + parseInt(userTests[0].date)-Date.now())+120000)
//       if(parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()){
//         console.log("entro a condicion de tiempo se acabo paso a testscore")
//         window.location.href = 'http://127.0.0.1:5173/testscore'
//         }
//       dispatch(loading(false))
//     }


//   },2000)

// // verifico quue el test aun esta en tiempo disponible para ser respondido y restablezco el timer
// if ((userTests[0].date + currentTest.testime - Date.now()) >= 0) {

//   // setCautivatedTest24(false)
//   dispatch(remainTestTime(Date.now() +((parseInt(userTests[0].date)) + currentTest.testime - Date.now())) )
//   // dispatch(remainTestTime(Date.now() +(userTests[0].date + currentTest.testime - Date.now())))
// /////////////////////////////
// // setTimeout(()=>{
// //  testRestriction()

// // },Date.now() +((parseInt(userTests[0].date)) + currentTest.testime - Date.now()))
// dispatch(loading(false))
// }
// // setTimeout(() =>{
// //   if(parseInt(userTests[0].date) + parseInt(currentTest.testime) < Date.now()){
// //     console.log("entro a condicion de tiempo se acabo paso a testscore")
// //     window.location.href = 'http://127.0.0.1:5173/testscore'
// //     }
// //    },500)
//   }
// if(userTests[0].date + currentTest.testime < Date.now()){
// window.location('window.location.href =')

// }



// }
    return(
<div className={style.userPageContainer}>
    <Navbar/>

    { loader && loader ?
    <div style={{marginTop: "150px"}}><Loader/></div>
      

  :<div>
   {cautivedtest24  &&
   cautivedtest24 ===true ?
   <div className={style.cautivatedBox}>
   debes esperar <Countdown countdownTimestampMs={timeBlock} /></div>
   :

   <div className={style.testQuestionBox}>
    <div>tiempo restante <Countdown countdownTimestampMs={finaltime} /> </div>
    <div className={style.cautivatedBox}>
   debes esperar <Countdown countdownTimestampMs={timeBlock} /></div>
       <div>{testeid}testeid</div>
{cautivedtest24 && cautivedtest24 ? <div>no estoy cautivo</div>: <div> estoy cautivo</div>}

    <div> pregunta {page} de {5} redux page {reduxpage}</div>
    {

    dbquest.question &&

    (() => {
          let jsxObjects = [];

          for(let i=0; i < dbquest.question.total-1; i++) {
            jsxObjects.push( <button key={i} onClick={(e)=> handleLoadQuestion(i)}>{i+1}</button>
            );

          }
          console.log(jsxObjects)
          return jsxObjects;
        })()}

          {

          //  dbquest.categories && <div>{dbquest.categories[0].question}</div>


       dbquest.question &&   <div>
          {/* <Questioncomponent question={dbquest.categories[0].question}  questiontotal={dbquest.total} questionid={dbquest.categories[0].id} page={page}/> */}
           <Questioncomponent question={dbquest.question.categories[0].question} answers={dbquest.answers} questiontotal={dbquest.question.total} questionid={dbquest.question.categories[0].id} page={page}/>
          </div>
          }

      <button onClick={(e)=> handleLoadQuestion(-1)}><AiOutlineLeft/></button><button onClick={(e)=> handleLoadQuestion(+1)}><AiOutlineRight/></button>

   </div>
   }
   </div>
   }

<Footer/>
</div>
)}


export default Coursetest