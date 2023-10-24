import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Answerscorecard from "./AnswerScoreCard/Answerscorecard";
import axios from "axios";
import { getTestUserAnswers, questionAnswers, testQuestions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from './MainTestScore.module.css'
import CertificacionWidget from "../../Certification/CertificationWidget/CertificationWidget";
import { AiOutlineReload } from 'react-icons/ai';
const Maintestscore = () =>{

    const [QuestionAndAnswers, setQuestionAndAnswers]= useState(null)
let testeid= "9e9db805-16c8-472f-af72-54e54ea2d9c2"
const [userAnswers,setuserAnswers] = useState([])
const[Score, setScore] = useState({

rate: '',
correct: '',
incorrect: ''


})
const dispatch = useDispatch()
const stateTestQuestions = useSelector(state => state.testQuestions)

const stateUserAnswers = useSelector(state => state.getTestUserAnswers)
let certificationInf={
  name: "maelo moreno",
  course: "como ser genial",
  date: "10/12/2008"



 } 
let page = ""
useEffect(()=>{
 
// setuserAnswers([])
// dispatch(testQuestions(testeid,page))
// console.log(`soy useEffect${stateTestQuestions.question === true ? true : false}`)
// dispatch(getTestUserAnswers(testeid))
// setTimeout(function(){
//   if(stateTestQuestions.question.length){ questionAndAnswers() }
// }, 2000);
const miFuncion = async () => {

  // Despacha la acción



  dispatch(testQuestions(testeid,page))
  dispatch(getTestUserAnswers(testeid))

  // Espera a que la acción se complete
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  if(stateTestQuestions){ questionAndAnswers() }
  // Ejecuta la función después de que la acción se haya completado
  console.log('La acción se ha completado');
};

miFuncion();
// console.log(`soy useEffect${stateTestQuestions.question === true ? true : false}`)

},[dispatch]
)

useEffect(()=>{
  
  if(stateTestQuestions){ questionAndAnswers()
   
   
  }


},[dispatch,stateTestQuestions])

useEffect(()=>{
  if(userAnswers){ rating()
   
   
  }


},[userAnswers])

//  console.log(stateTestQuestions)

// console.log(`soy stateTestQuestions.question.length ${stateTestQuestions.question.length}`)
const questionAndAnswers = async() =>{
    // setuserAnswers([])
//  console.log("entre a questionAnswers")
//  console.log(`soy stateTestQuestions.question.length ${stateTestQuestions.question.length}`)
if(stateTestQuestions.question){
for(let i=0; i < stateTestQuestions.question.length;i++){
    const token = window.localStorage.getItem('token');
    let config ={
        headers:{
          authorization:`bearer ${token}`
        }
    
      }
    
      let data = {
        'HTTP_CONTENT_LANGUAGE': self.language
      }
    let dbquestionanswers = await axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${stateTestQuestions.question[i].id}`,data, config) 
          console.log(`soy console.log de questionAnswers ${dbquestionanswers.data}`)
       
        console.log(`soy posicion i ${i}`)
       let userchoose = stateUserAnswers.find(item => item.QuestionId === stateTestQuestions.question[i].id )
       let questanswers =  dbquestionanswers.data.find(item => item.QuestionId === userchoose.QuestionId)
      let questandanswer = {
        questionid: stateTestQuestions.question[i].id || undefined,
      question: stateTestQuestions.question[i].question,
        answerId: questanswers.id ||undefined,
       useranswer: questanswers.answer || undefined,
    correct: userchoose.correct || undefined

      }
 console.log(questandanswer)
      setuserAnswers(userAnswers =>[...userAnswers, questandanswer])
  



}
}
}

const rating = () =>{
console.log("entre a rating")

let totalRate
let corrects = userAnswers.filter(item => item.correct === true).length
let incorrects = userAnswers.filter(item => item.crrect === false).length
if(corrects){ totalRate = (corrects / userAnswers.length)*100}
 setScore({...Score, rate: totalRate, correct: corrects, incorrect: incorrects})
console.log(`${corrects},${incorrects}`)
switch (Score.rate){
 case Score > 70:
  return <div>
    <h2>Felicidades! superaseete el test con un puntaje de {Score.rate}%</h2>
    <p>Respondiste correctamente {Score.correct} de un total de {userAnswers.length}</p>
    </div>
 


}
}

const ratingMessage = () =>{
  switch (true) {
    case Score.rate > 70:
      return <div className={style.ratingAndCertificateBox}><h2>Felicidades! superaste el test con un puntaje de {Score.rate}%</h2>
      <p>Respondiste correctamente {Score.correct} preguntas de un total de {userAnswers.length}</p>
      <CertificacionWidget certificationInfo={certificationInf}/>
      </div>;
      case Score.rate < 70:
        return  <div className={style.ratingAndCertificateBox}><h2>¡ Desafortunadamente no superaste el test !</h2>
        <p>Respondiste correctamente {Score.correct} preguntas de un total de {userAnswers.length}</p>
        <button className={style.fullButton}> <p>Intenta de nuevo </p>  <AiOutlineReload/></button>
        </div>;
     
    default:
      return <div>Cargando...</div>;
  }

}



return(
<div >
<Navbar/>
<div className={style.MainTestBox}>
{
<div className={style.headerPhrase}>
{
ratingMessage()

}


{



  <div>



</div>


}
</div>
}

{ userAnswers && userAnswers.map(item =>(
    < Answerscorecard question={item.question} selectedAnswer={item.useranswer} correct={item.correct}/>)
)


}
</div>
<Footer/>
</div>


)}


export default  Maintestscore