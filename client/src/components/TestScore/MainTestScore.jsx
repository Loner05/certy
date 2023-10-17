import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Answerscorecard from "./AnswerScoreCard/Answerscorecard";
import axios from "axios";
import { getTestUserAnswers, questionAnswers, testQuestions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";



const Maintestscore = () =>{

    const [QuestionAndAnswers, setQuestionAndAnswers]= useState([])
let testeid= "9e9db805-16c8-472f-af72-54e54ea2d9c2"
const [userAnswers,setuserAnswers] = useState([])
const dispatch = useDispatch()
const stateTestQuestions = useSelector(state => state.testQuestions)

const stateUserAnswers = useSelector(state => state.getTestUserAnswers)

let page = ""
useEffect(()=>{
dispatch(testQuestions(testeid,page))

dispatch(getTestUserAnswers(testeid))
if(stateTestQuestions.question ){ questionAndAnswers() }

},[dispatch])

//  console.log(stateTestQuestions)


const questionAndAnswers = async() =>{
    
 console.log("entre a questionAnswers")
 console.log(stateTestQuestions)
if(stateTestQuestions.question){
for(let i=0; i <  stateTestQuestions.question.length;i++){
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
        questionid: stateTestQuestions.question[i].id,
      question: stateTestQuestions.question[i].question,
         answerId: questanswers.id || null,
       useranswer: questanswers.answer || null,
    correct: userchoose.correct || null

      }
 console.log(questandanswer)
      setuserAnswers(userAnswers =>[...userAnswers, questandanswer])




}
}
}
 console.log(userAnswers)



return(
<div>
<Navbar/>
<h2>soy page test score</h2>

{ userAnswers && userAnswers.map(item =>(
    < Answerscorecard question={item.question} selectedAnswer={item.useranswer} correct={item.correct}/>)
)


}
<Footer/>
</div>


)}


export default  Maintestscore