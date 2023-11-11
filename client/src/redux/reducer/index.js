
import { GET_TEST, REMAIN_TEST_TIME,STATUS_QUESTION_ANSWERS,QUESTION_ANSWERS, TEST_QUESTIONS, USER_LOGIN, CLEAR_QUESTION_ANSWERS,UPDATE_PAGE,LOGOUT,GET_USER_INFO, GET_TESTUSER_ANSWERS, remainTestTime } from "../actions"



const initialState = {
userLogin: "",
testQuestions: [],
questionAnswers:[],
page: 0,
error: null,
userInfo: "",
getTestUserAnswers: [],
statusQuestionAnswers: "",
remaintestime: true,
tests: []
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
case GET_TEST:
    if(action.payload.error)
    return{
       ...state,
       error: action.payload.error,
    }
return {
...state,
tests: action.payload


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

case STATUS_QUESTION_ANSWERS:{
    return{
    ...state,
    statusQuestionAnswers: action.payload,
    error: false,
   
    

}
}
case REMAIN_TEST_TIME:{
    return{
...state,
remaintime: action.payload
    }
}





default: return{...state}


}


}