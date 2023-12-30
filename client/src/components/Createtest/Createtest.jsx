import React, { useState } from "react";
import style from "./Createtest.module.css"
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
export const Createtest = () =>{

let axiosCreatedTest = {}
let createQuestion = {
    Question: "",
QuestionId:"",
payload:[]



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
        const[testQuestion, setTestQuestion] = useState(createQuestion)




const handleChange = (e) =>{

setTest({...test,[e.target.name]:e.target.value })
}
const handleQuestionChange = (e) =>{
setTestQuestion({...testQuestion, [e.target.name]: e.target.value})


}

const handleUpload = (e) =>{
e.preventDefault()
console.log(file)
const formdata = new FormData()
formdata.append('image', file)
axios.post('http://localhost:3001/files/images/single', formdata)
.then(res => (setTest({...test, image: res.data})


   
    

)

.catch(err => console.log(err)))


}

const handleQuestionSubmit = async(e) =>{
e.preventDefault()
console.log(testQuestion)

}
const handleSubmit = async(e) =>{
    console.log(test)
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
       setCreatedTest(res.data)

    }

}catch(error){
    console.log(error)
}

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
    <form action="">
    <div className={style.formField}>
                <div><label htmlFor="">Pregunta</label></div>
               <div> <input type="text" onChange={handleQuestionChange} value={testQuestion.name} name="question"/></div>
                </div>
                <div className={style.formField}>
                <div><label htmlFor="">Respuesta {testQuestion.payload.length +1}</label></div>
               <div> <input type="text"   value={testQuestion.payload} name="answer"/>
                    <button onClick={handleUpload}>Upload</button>
               </div>
                </div>

    </form>

  </div>
     

   <button>Agregar pregunta<FaPlusCircle /></button>
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