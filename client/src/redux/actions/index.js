
import axios from 'axios'
export const USER_LOGIN = "USER_LOGIN"
export const TEST_QUESTIONS = "TEST_QUESTIONS"


export const userLogin = (payload) => {

    return  async function (dispatch){
       let checkUser = await axios.get(`ttp://localhost:3001/${payload}   `)
       console.log(checkUser.data)
       return dispatch({type: USER_LOGIN, payload: checkUser.data })
    }

}


export const testQuestions = (testid) =>{
    return async function(dispatch){
    // const token = window.localStorage.getItem('token');
    const res = await axios.get(`http://localhost:3001/test/question?testid=${testid}`)
    return dispatch({type: TEST_QUESTIONS, payload: res.data})
  }

}
