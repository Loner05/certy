
import { TEST_QUESTIONS, USER_LOGIN } from "../actions"



const initialState = {
userLogin: "",
testQuestions: [],

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


default: return{...state}


}


}