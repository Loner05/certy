import React, { useEffect, useState} from "react";
import style from "./Createtest.module.css"
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { createTestQuestionsAndAnswers, testQuestions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import QuestionCard from "./QuestionCard/QuestionCard";
import ModalQuestionEdition from "./ModalQuestionEdition/ModalQuestionEdition";
export const Createtest = () =>{
  const dispatch = useDispatch()
let answerArray =[]

let axiosCreatedTest = {}
let createQuestion = {
    answerOptionsNum: 1,
    Question: "",
QuestionId:"",

}



    let testData = {
        name: "",
        description: "",
        testime: "",
        image: ""
        }
         const[file,setFile] = useState()
        const[test, setTest] = useState(testData)
        const[createdTest, setCreatedTest] = useState(axiosCreatedTest)
        const DBtestQuestions = useSelector(state => state.testQuestions )
        const[testQuestion, setTestQuestion] = useState(createQuestion)
        const [dbQuestionAndAnswers,setDbQuestionAndAnswers] = useState([])
        
       const[answers, setAnswers]= useState(answerArray)
        console.log(createdTest.id)
        console.log("dbQuestionAndAnswers")
        console.log(dbQuestionAndAnswers)
        useEffect(()=>{
          if(DBtestQuestions.question){
            console.log("entre a useeffect dbtestquestions")
            getExistingQuestionAndAnswers()}
           
        

        },[DBtestQuestions])
        useEffect(()=>{
          if(createdTest.id){
          dispatch(testQuestions(createdTest.id))}
           if(DBtestQuestions.question){
            console.log("entre a useeffect dbtestquestions")
            getExistingQuestionAndAnswers()}
           
        
        }
        
        ,[])
const handleChange = (e) =>{

setTest({...test,[e.target.name]:e.target.value })
}

const handleAnswerChange = (e,index) =>{
   e.preventDefault()
  let {value}= e.target
  let onChangeValue = [...answers]
  onChangeValue[index].value = value
  setAnswers(onChangeValue)
    

}
console.log(dbQuestionAndAnswers)

const handleQuestionChange = (e,index) =>{
  e.preventDefault()
   console.log(e.target.value)
    if(e.target.name === "addAnswer"){
    let answerOptionsNumUpdate = testQuestion.answerOptionsNum++

setTestQuestion({...testQuestion, answerOptionsNum: answerOptionsNumUpdate +1})
setAnswers([...answers, {value: ""}])
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

const getExistingQuestionAndAnswers = () =>{

  //dbQuestionAndAnswers
DBtestQuestions.question.map(item =>{
  console.log(`soy itemid ${item.id}`)
try{
  axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${item.id}`,
  {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },}).then((res)=>{
      console.log("soy res data ")
      console.log(res.data)
      if(dbQuestionAndAnswers.includes(item.id) === false){
      setDbQuestionAndAnswers([...dbQuestionAndAnswers,{questionId: item.id, question: item.question, answers: res.data}])
       console.log({questionId: item.id, question: item.question, answers: res.data})}
    })
  
  

}catch(error){console.log(error.message)}
  
})


}


const handleUpload = (e) =>{
e.preventDefault()
console.log(file)
const formdata = new FormData()
formdata.append('image', file)
axios.post('http://localhost:3001/files/images/single', formdata)
.then(res => (setTest({...test, image: res.data})

/// soy un comment nuevo
   
    

)

.catch(err => console.log(err)))


}
console.log(createdTest.id)
const handleQuestionSubmit = async(e) =>{
e.preventDefault()
console.log(testQuestion)

}
const handleSubmit = async(e) =>{

    e.preventDefault()

    
try{
    const token = window.localStorage.getItem('token');
    let config ={
      headers:{
        authorization:`bearer ${token}`
      }
  
    }

    let res = await axios.post("http://localhost:3001/test",test, config)
  console.log(res.data)
   if (res.status == 200 ){
       setCreatedTest( res.data)
       dispatch(testQuestions(createdTest.id))
    }

}catch(error){
    console.log(error)
}

}
 
const handleSubmitQuestionAndAnswers = async(e) =>{
  e.preventDefault();
  console.log('estoy en submitquestionandanswers')
  e.preventDefault();
 
try{
  dispatch(createTestQuestionsAndAnswers(createdTest.id, answers, testQuestion.Question))
  setAnswers(answerArray)
  dispatch(testQuestions(createdTest.id))
}catch(error){

  console.log(error)
}

}
console.log(`dbQuestionAndAnswers length${dbQuestionAndAnswers.length}`)
console.log(` dbQuestions es array ${Array.isArray(dbQuestionAndAnswers.answer)}`)


const[active, setActivate]= useState(true)
const toggle = () =>{
  console.log("soy toogle")
  setActivate(false)
}
return(

<div>


{
    createdTest.id && 
    
     <div>
    <h2>{createdTest.name}</h2>
   <div>{createdTest.description}</div>
   <div>{createdTest.testime}</div>


  <div>
  
    <form action={handleSubmitQuestionAndAnswers}>
    <div className={style.formField}>
                <div><label htmlFor="">Pregunta</label></div>
               <div> <input type="text" onChange={handleQuestionChange} value={testQuestion.name} name="Question"/></div>
                </div>
                { 


testQuestion.answerOptionsNum && 
               
             createQuestion.answerOptionsNum &&
              answers.map((input,index) =>
                
                <div className={style.formField} >
                <div><label htmlFor="">Respuesta {index+1}</label></div>
                     <input type="text" onChange={(e)=>handleAnswerChange(e,index)} value={answers[index].value} name="answer"/>
                </div>)
                }
              <button onClick={handleQuestionChange} name="addAnswer">agregar respuesta </button>

              <input  onClick={handleSubmitQuestionAndAnswers}  value={`Guardar pregunta ${<FaPlusCircle />}`} />
                
    </form>
   
  </div>
  <div  className={style.questionFlex}>
    {
     
     dbQuestionAndAnswers && 
    
    dbQuestionAndAnswers.map(item =>   <QuestionCard question={item.question} answers={item.answers} key={item.id}/>)

       
 
   
} 
</div>
     

 
     </div>


      

}


{ !createdTest.id &&

    <div>

   
    <form onSubmit={handleSubmit}>
    <div className={style.formField}>
                <div><label htmlFor="">Nombre del test</label></div>
               <div> <input type="text" onChange={handleChange} value={test.name} name="name"/></div>
                </div>
                <div className={style.formField}>
                <div><label htmlFor="">descripcion</label></div>
               <div> <input type="text" onChange={handleChange} value={test.description} name="description"/></div>
                </div>
                <div className={style.formField}>
                <div><label htmlFor="">Tiempo para resolver el test</label></div>
               <div> <input type="text" onChange={handleChange} value={test.testime} name="testime"/></div>
                </div>
                
                <form action="" method="POST" enctype="multipart/form-data">
                <div className={style.formField}>
                <div><label htmlFor="">Imagen</label></div>
                <div> <input type="file" onChange={e => setFile(e.target.files[0])} name="image"/>
                <button onClick={handleUpload}>Upload</button>
                </div>
                </div>
                </form>
               
        
            <div>
                <input type="submit" value="crear test"/>
            </div>
        
    </form>
</div>


}




</div>



)
}