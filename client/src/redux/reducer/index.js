
import { QUESTION_ANSWERS, TEST_QUESTIONS, USER_LOGIN, CLEAR_QUESTION_ANSWERS,UPDATE_PAGE,LOGOUT,GET_USER_INFO, GET_TESTUSER_ANSWERS } from "../actions"



const initialState = {
userLogin: "",
testQuestions: [],
questionAnswers:[],
page: 0,
error: null,
userInfo: "",
getTestUserAnswers: []

}




export default function rootReducer(state= initialState, action){

switch(action.type){

case USER_LOGIN:

    if(action.payload.error)
     return{
        ...state,
        error: action.payload.error,
     }
return {
...state,
userLogin: action.payload


}



case TEST_QUESTIONS:{
return{
    ...state,
testQuestions: action.payload
}    
}

case QUESTION_ANSWERS:{
return{
    ...state,
    questionAnswers: action.payload
}
}
case CLEAR_QUESTION_ANSWERS:{
    return{
        ...state,
        questionAnswers: []
    }
}
case UPDATE_PAGE:{
 return{
       ...state,
       page: action.payload
 }
}
case LOGOUT:{
return{
...state,
userLogin: ""

}

}
case GET_USER_INFO:{
return{
...state,
userInfo: action.payload
}
}

case GET_TESTUSER_ANSWERS:{
return{
...state,
getTestUserAnswers: action.payload

}

}


default: return{...state}


}


}