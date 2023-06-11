
import { QUESTION_ANSWERS, TEST_QUESTIONS, USER_LOGIN, CLEAR_QUESTION_ANSWERS,UPDATE_PAGE,LOGOUT } from "../actions"



const initialState = {
userLogin: "",
testQuestions: [],
questionAnswers:[],
page: 0,
error: null,

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


default: return{...state}


}


}