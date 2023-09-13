
import axios from 'axios'
export const USER_LOGIN = "USER_LOGIN"
export const TEST_QUESTIONS = "TEST_QUESTIONS"
export const QUESTION_ANSWERS = "QUESTION_ANSWERS"
export const CLEAR_QUESTION_ANSWERS = "CLEAR_QUESTION_ANSWERS"
export const UPDATE_PAGE = "UPDATE_PAGE"
export const LOGOUT = "LOGOUT"
export const SIGN_UP_USER = "SIGN_UP_USER"
export const GET_USER_INFO = "GET_USER_INFO"


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


// export const testQuestions = (testid,page) =>{
//     return async function(dispatch){
//      const token = window.localStorage.getItem('token');

//     let config ={
//       headers:{
//         authorization:`bearer ${token}`
//       }

//     }

//     let data = {
//       'HTTP_CONTENT_LANGUAGE': self.language
//     }
//     console.log(token)
//     console.log(testid)

//     try{
//     const res = await axios.get(`http://localhost:3001/test/question?testid=${testid}&page=${page}`,{
//       headers: {
//         Authorization: `Bearer ${window.localStorage.getItem('token')}`,
//       },})
//     console.log(`soy page de actions ${page}`)
//     return dispatch({type: TEST_QUESTIONS, payload: res.data})
//     console.log(res)
//   }
// catch(error){
// console.log(error)
// // return dispatch({
// //     type: TEST_QUESTIONS,
// //     payload: {error: error.response.data},
// //   })
// }
//     }
// }

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
  
  // return dispatch({type: TEST_QUESTIONS, payload: res.data})
  // console.log(res)
}
catch(error){
console.log(error)
// return dispatch({
//     type: TEST_QUESTIONS,
//     payload: {error: error.response.data},
//   })
}
  }
}

export const questionAnswers = (payload) =>{
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

}}



export const userAnswers = async(payload) =>{
  const token = window.localStorage.getItem('token');
  let config ={
    headers:{
      Authorization:`bearer ${token}`
    }

  }

  let data = {
    'HTTP_CONTENT_LANGUAGE': self.language,
    'QuestionId': payload.question ,
    'AnswerId': payload.answer,
   

  }
   const res = await axios.post(`http://localhost:3001/test/useranswers`,data,config)
  //  UserId, QuestionId, AnswerId,correct
   if(res.status === 200){ console.log("respuesta guardada correctamente")}
}

export const clearQuestionAnswers = () =>{
return {type: CLEAR_QUESTION_ANSWERS}
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