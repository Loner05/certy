
import axios from 'axios'
export const USER_LOGIN = "USER_LOGIN"
export const TEST_QUESTIONS = "TEST_QUESTIONS"
export const QUESTION_ANSWERS = "QUESTION_ANSWERS"
export const CLEAR_QUESTION_ANSWERS = "CLEAR_QUESTION_ANSWERS"

export const userLogin = (payload) => {

    return  async function (dispatch){
       let checkUser = await axios.get(`ttp://localhost:3001/${payload}   `)
       console.log(checkUser.data)
       return dispatch({type: USER_LOGIN, payload: checkUser.data })
    }

}


export const testQuestions = (testid,page) =>{
    return async function(dispatch){
    // const token = window.localStorage.getItem('token');
    const res = await axios.get(`http://localhost:3001/test/question?testid=${testid}&page=${page}`)
    console.log(`soy page de actions ${page}`)
    return dispatch({type: TEST_QUESTIONS, payload: res.data})
  }

}


export const questionAnswers = (payload) =>{

return async function(dispatch){
 const res = await axios.get(`http://localhost:3001/test/questionanswer?QuestionId=${payload}`)
 return dispatch({type: QUESTION_ANSWERS, payload: res.data})

}


}

export const clearQuestionAnswers = () =>{
return {type: CLEAR_QUESTION_ANSWERS}
}
