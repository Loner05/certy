
import axios from 'axios'
export const USER_LOGIN = "USER_LOGIN"
export const TEST_QUESTIONS = "TEST_QUESTIONS"
export const QUESTION_ANSWERS = "QUESTION_ANSWERS"
export const CLEAR_QUESTION_ANSWERS = "CLEAR_QUESTION_ANSWERS"
export const UPDATE_PAGE = "UPDATE_PAGE"
export const LOGOUT = "LOGOUT"
export const SIGN_UP_USER = "SIGN_UP_USER"
export const GET_USER_INFO = "GET_USER_INFO"
export const GET_TESTUSER_ANSWERS = "GET_TESTUSER_ANSWERS"
export const STATUS_QUESTION_ANSWERS = "STATUS_QUESTION_ANSWERS"
export const REMAIN_TEST_TIME = "REMAIN_TEST_TIME"
export const GET_TEST = "GET_TEST"
export const USER_TEST_DB = "USER_TEST_DB"
export const USER_COMPLETE_RATE = "USER_COMPLETE_RATE"
export const LOADING = "LOADING"
export const LOADING2 ="LOADING2"



export const userLogin = (payload) => {

    return  async function (dispatch){


      try{
       let checkUser = await axios.post('http://localhost:3001/user/login',{
       email: payload.email ,
       password: payload.password }
     ).then((res) => {
      window.localStorage.setItem('token', res.data.token)
   console.log(res.data.token)
     
      return dispatch({
        type: USER_LOGIN,
        payload: res.data.token,
      })
    })
       console.log(checkUser.data)
  }catch(error){
    return dispatch({
      type: USER_LOGIN,
      payload: {error: error.response.data},
    })

  }
      //  return dispatch({type: USER_LOGIN, payload: checkUser.data })
    }

}

export const getTEST = () =>{
  console.log("estoy en gettest")
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
 await axios.get(`http://localhost:3001/test`,{
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },}).then((res)=>{

 return dispatch({type: GET_TEST, payload: res.data})

 })
 


}


}

export const testQuestions = (testid,page) =>{
  return async function(dispatch){
   const token = window.localStorage.getItem('token');
  let questionData ={
    question: "",
    answers: ""
  }
  let config ={
    headers:{
      authorization:`bearer ${token}`
    }

  }

  let data = {
    'HTTP_CONTENT_LANGUAGE': self.language
  }
  console.log(token)
  console.log(testid)

  try{
    typeof page === 'number' ?
     await axios.get(`http://localhost:3001/test/question?testid=${testid}&page=${page}`,{
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },}).then((res)=>{
      questionData.question = res.data
       axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${res.data.categories[0].id}`,data, config).then((res)=>{
        questionData.answers = res.data
        return dispatch({type: TEST_QUESTIONS, payload: questionData})
      })

    })


:   await axios.get(`http://localhost:3001/test/question?testid=${testid}`,{
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },}).then((res)=>{
      questionData.question = res.data 
      console.log(res.data)
      //  axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${res.data[0].id}`,data, config).then((res)=>{
      //   questionData.answers = res.data
        return dispatch({type: TEST_QUESTIONS, payload: questionData})
      // })

    })
 
 
  
  // return dispatch({type: TEST_QUESTIONS, payload: res.data})
  // console.log(res)
}
catch(error){
console.log(error)
return dispatch({
    type: TEST_QUESTIONS,
    payload: {error: error.response.data},
  })
}
  }
}

export const questionAnswers = (items) => async(dispatch) =>{
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
 return dispatch({type: QUESTION_ANSWERS, payload: res.data})

}
}




export const userAnswers = (items) =>async(dispatch) =>{
  const token = window.localStorage.getItem('token');
  let payload = {
   "payload": items

  }
  let config ={
    headers:{
      Authorization:`bearer ${token}`,
      "Content-Type": 'application/json',
    }

  }
  
const url = 'http://localhost:3001/test/useranswers'

  // console.log(payload)
  //  const res = await axios.post(`localhost:3001/test/useranswers`, JSON.stringify(payload),config)

   const res = await axios.post(url, JSON.stringify(payload), {
    headers: {
       Authorization:`bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  //  UserId, QuestionId, AnswerId,correct
   if(res.status === 200){return dispatch({type: "STATUS_QUESTION_ANSWERS", payload: "respuestas enviadas exitosamente"})}
   if(res.status !== 200){return dispatch({type: "STATUS_QUESTION_ANSWERS", payload:{error: "Opps algo ha ocurrido!"}})}
}

export const clearQuestionAnswers = (testid) =>{

  return async function(){
  const token = window.localStorage.getItem('token');
  let body= {
    testId:"9e9db805-16c8-472f-af72-54e54ea2d9c2",
    userId:"a1bdbea7-c77e-44a6-b5b8-f90309288df8"
   }

  let config ={
    headers:{
      Authorization:`bearer ${token}`,
      'Content-Type': 'application/json'
    }

  }
  
const url = 'http://localhost:3001/test/useranswers'


   const res = await axios.delete( `http://localhost:3001/test/useranswers?testId=${testid}` ,{
    headers: {
       Authorization:`bearer ${token}`,
      
    }})
 
  console.log(res)
   if(res.status === 200){ return console.log("respuestas borradas correctamente")}

  }


}



export const updatePage = (page) => (dispatch) =>{
  dispatch({ type: UPDATE_PAGE, payload: page})
}


export const logOut = () =>  async(dispatch) =>{
   window.localStorage.removeItem('token')
   return dispatch({type: 'LOGOUT'})

        
}


export const getUser = (id) => async(dispatch) =>{
try{
const info = await axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${payload}`)

}catch(error){
 dispatch({
  type: ERROR,
  payload: error.message
 })

}


}


export const getTestUserAnswers = (data) => async(dispatch) =>{
  try{
   
    const token = window.localStorage.getItem('token');
 
    let config ={
      headers:{
        Authorization:`bearer ${token}`,
      }
  
    }
  
    let data = {
      'HTTP_CONTENT_LANGUAGE': self.language,
    
     
    }
     
   await axios.get(`http://localhost:3001/test/useranswers?TestId=${data}`,{
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('token')}`,
    },}).then((res) =>{
      console.log(res.data)
    return dispatch({
      type: GET_TESTUSER_ANSWERS,
      payload: res.data
    })
  }
   )
    
  
  
  
  
  }catch(error){
  return dispatch({
  type: GET_TESTUSER_ANSWERS,
  payload: { error:error.message}
  
  })
  
  }


}

export const signUpUser = (data) => async(dispatch) =>{
try{

  const serverSign = await axios.post("http://localhost:3001/user/signup", {
     name: data.name,
     lastname: data.lastname,
     email: data.email,
     password: data.password
  })
  console.log(serverSign.response.data)
   return dispatch({ type: SIGN_UP_USER, payload: serverSign.response.data})
}catch(error){
  return dispatch({
  type: SIGN_UP_USER,
  payload:{error: error.response.data}

  })

}


}



// GET USER INFO NAME, PHOTO, EMAIL, PASSWORD

export const getUserInfo = (id) => async(dispatch) =>{
try{
  console.log("estoy en dispatch de getuserinfo")
  const token = window.localStorage.getItem('token');
   console.log(`soy toker de getuserinfo ${token}`)
  let config ={
    headers:{
      Authorization:`bearer ${token}`,
    }

  }

  let data = {
    'HTTP_CONTENT_LANGUAGE': self.language,
  
   
  }
   
 await axios.get(`http://localhost:3001/user/user`,{
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`,
  },}).then((res) =>{
  return dispatch({
    type: GET_USER_INFO,
    payload: res.data
  })
}
 )
  




}catch(error){
return dispatch({
type: GET_USER_INFO,
payload: { error:error.message}

})

}
}


export const remainTestTime = (remaintime) =>(dispatch)=>{
  window.localStorage.setItem('remain', remaintime)
return dispatch({type: REMAIN_TEST_TIME, payload: remaintime})


}

export const userTestDB = (testId,userId)=> async(dispatch) =>{



  try{
   
   await axios.get(`http://localhost:3001/test/usertests?testId=${testId}&&userId=${userId}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },}).then((res) =>{
        console.log(res.data)
      return dispatch({
        type:  USER_TEST_DB,
        payload: res.data
      })
    }
     )

  } catch(error){
    return dispatch({
      type:USER_TEST_DB,
      payload:{error: error.message}
  })
  }
}


// export const postUserTestDB = (payload) => async(dispatch) =>{

// try{
// await axios.post('http://localhost:3001/user/login',{
//   email: payload.email ,
//   password: payload.password }
// ).then((res) => {
//  window.localStorage.setItem('token', res.data.token)
// console.log(res.data.token)

//  return dispatch({
//    type: USER_TEST_DB,
//    payload: res.data.token,
//  })
// })

// }catch(error){

// return dispatch({
// type: USER_TEST_DB,
// payload:{postError: error.response.data}

// })

// }




// } 


export const userCompleteRate = (payload) => {
console.log(`estoy en completeRate ${payload.testId}`)
const token = window.localStorage.getItem('token');
  return async function(){
try{

  const res = await axios.post("http://localhost:3001/test/usertests", JSON.stringify(payload), {
    headers: {
       Authorization:`bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
console.log(res.data)

// await axios.post('http://localhost:3001//test/usertests',{
// testId: payload.testId,
// userId: payload.userId,
// complete_rate: payload.complete_rate,
// date: payload.date
// }, {
//   headers: {
//      Authorization:`bearer ${token}`,
//     'Content-Type': 'application/json'
//   }}).then((res)=>{console.log(res.data)})

}catch(error){

  console.log(error.message)
}

  }

}


export const loading = (payload) => (dispatch) =>{
console.log(`soy payload de loading actions${payload}`)
return dispatch({type: LOADING, payload})

}


export const loading2 = (payload) => (dispatch) =>{
  console.log(`soy payload de loading actions${payload}`)
  return dispatch({type: LOADING2, payload})
  
  }