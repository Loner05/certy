
import { QUESTION_ANSWERS, TEST_QUESTIONS, USER_LOGIN, CLEAR_QUESTION_ANSWERS } from "../actions"



const initialState = {
userLogin: "",
testQuestions: [],
questionAnswers:[],

}




export default function rootReducer(state= initialState, action){

switch(action.type){

case USER_LOGIN:{
return {
...state,
userLogin: action.payload


}

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


default: return{...state}


}


}